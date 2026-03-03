import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassMapping = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [mappingData, setMappingData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // Parallel API calls for better performance
        const [classRes, teacherRes, studentRes, subjectRes] =
          await Promise.all([
            axios.get("http://localhost:5000/api/class/configureclass", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
            axios.get("http://localhost:5000/api/staff/getallstaffs", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
            axios.get("http://localhost:5000/api/studentList", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
            axios.get("http://localhost:5000/api/subject/getallsubjects", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
          ]);

        const processedClasses = Array.isArray(classRes.data) ? classRes.data : [];
        const processedTeachers = Array.isArray(teacherRes.data) ? teacherRes.data : [];
        const processedStudents = Array.isArray(studentRes.data) ? studentRes.data : [];
        console.log(processedStudents, "fefefef");
        const processedSubjects = Array.isArray(subjectRes.data)
          ? subjectRes.data
          : [];
          setSubjects(processedSubjects);
        setClasses(processedClasses);
        setTeachers(processedTeachers);
        setStudents(processedStudents);


        console.log('Data loaded successfully:', {
          classes: processedClasses.length,
          teachers: processedTeachers,
          students: processedStudents.length
        });

      } catch (error) {
        console.error('Error fetching data:', error);
        setClasses([]);
        setTeachers([]);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

 const handleClassChange = async (classId) => {
   setSelectedClass(classId);

   if (!classId) return;

   try {
     const academicYear = getAcademicYear();

     const res = await axios.get(
       `http://localhost:5000/api/classmapping/${classId}/${academicYear}`,
     );

     console.log("Fetched Mapping:", res.data);

     setMappingData(res.data.data);
   } catch (error) {
    console.log(error)
     console.log("No mapping found, initializing empty");

     // If mapping does not exist → initialize empty
     setMappingData({
       classTeacher: "",
       subjectTeachers: {},
       students: [],
     });
   }
 };

 const handleClassTeacherChange = (teacherId) => {
   setMappingData((prev) => ({
     ...prev,
     classTeacher: teacherId,
   }));
 };

  const handleSubjectTeacherChange = (subjectCode, teacherId) => {
    setMappingData((prev) => ({
      ...prev,
      subjectTeachers: {
        ...prev.subjectTeachers,
        [subjectCode]: teacherId,
      },
    }));
  };

  const handleStudentToggle = (studentId) => {
    setMappingData((prev) => {
      const currentStudents = prev?.students || [];

      const alreadyExists = currentStudents.includes(studentId);

      return {
        ...prev,
        students: alreadyExists
          ? currentStudents.filter((id) => id !== studentId)
          : [...currentStudents, studentId],
      };
    });
  };
const getAcademicYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // January = 0

  if (month >= 6) {
    return `${year}-${year + 1}`;
  } else {
    return `${year - 1}-${year}`;
  }
};
  const handleSaveMapping = async () => {
    try {
      const payload = {
        classId: selectedClass,
        academicYear: getAcademicYear(), // 👈 dynamic now
        classTeacher: mappingData?.classTeacher,
        subjectTeachers: mappingData?.subjectTeachers,
        students: mappingData?.students,
      };

      console.log("Sending payload:", payload);

      await axios.post(
        "http://localhost:5000/api/classmapping/create",
        payload,
      );

      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAvailableStudents = () => {
    if (!selectedClass || !students) return [];

    return students.filter((student) => student.status !== "Graduated");
  };

  const getCurrentClassInfo = () => {
    return classes.find(cls => cls._id === selectedClass);
  };

  const getAssignedStudents = () => {
    if (!selectedClass) return [];

    return students.filter((student) =>
      mappingData?.students?.some(
        (mappedStudent) => mappedStudent._id === student._id,
      ),
    );
  };

  const getUnassignedStudents = () => {
    if (!selectedClass) return [];
    console.log('Selected Class:', selectedClass);
    console.log('Mapping Data:', JSON.stringify(mappingData, null, 2));
    console.log('All Students:', students);
    
    const assignedStudentIds = mappingData?.students || [];
    console.log('Assigned Student IDs:', assignedStudentIds);
    
    const available = getAvailableStudents().filter(student => !assignedStudentIds.includes(student._id));
    console.log('Available Students:', available);
    
    return available;
  };


  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Class *
            </label>
            <select
              value={selectedClass}
              onChange={(e) => handleClassChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.className} - Section {cls.section} (Capacity:{" "}
                  {cls.capacity})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => setEditMode(!editMode)}
              disabled={!selectedClass}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                editMode
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-[#4F46E5] hover:bg-[#4338CA] text-white"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {editMode ? "View Mode" : "Edit Mode"}
            </button>
          </div>
        </div>
      </div>

      {selectedClass && (
        <>
          {/* Class Teacher Assignment */}
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Class Teacher Assignment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Teacher
                </label>
                {editMode ? (
                  <select
                    value={mappingData?.classTeacher || ""}
                    onChange={(e) => handleClassTeacherChange(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="">Select Class Teacher</option>
                    {teachers.map((teacher) => (
                      <option
                        key={teacher.employeeId}
                        value={teacher.employeeId}
                      >
                        {teacher.firstName} {teacher.lastName}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                    {(() => {
                      const assignedTeacher = teachers.find(
                        (t) => t.employeeId === mappingData?.classTeacher,
                      );

                      return assignedTeacher
                        ? `${assignedTeacher.firstName} ${assignedTeacher.lastName}`
                        : "Not assigned";
                    })()}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Information
                </label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                  {getCurrentClassInfo()?.className} - Section{" "}
                  {getCurrentClassInfo()?.section}
                </div>
              </div>
            </div>
          </div>

          {/* Subject Teachers Assignment */}
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Subject Teachers Assignment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <div key={subject.subjectCode}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {subject.subjectName}
                  </label>
                  {editMode ? (
                    <select
                      value={
                        mappingData?.subjectTeachers?.[subject.subjectCode] ||
                        ""
                      }
                      onChange={(e) =>
                        handleSubjectTeacherChange(
                          subject.subjectCode,
                          e.target.value,
                        )
                      }
                      className="w-full px-3 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm"
                    >
                      <option value="">Select Teacher</option>
                      {teachers
                        .filter(
                          (teacher) =>
                            Array.isArray(teacher.subjects) &&
                            teacher.subjects.includes(subject.subjectCode),
                        )
                        .map((teacher) => (
                          <option
                            key={teacher.employeeId}
                            value={teacher.employeeId}
                          >
                            {teacher.firstName} {teacher.lastName}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                      {(() => {
                        const teacherObj = teachers.find(
                          (t) =>
                            t.employeeId ===
                            mappingData?.subjectTeachers?.[subject.subjectCode],
                        );

                        return teacherObj
                          ? `${teacherObj.firstName} ${teacherObj.lastName}`
                          : "Not assigned";
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Student Assignment */}
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Student Assignment ({getAssignedStudents().length}/
              {getCurrentClassInfo()?.capacity})
            </h3>

            {editMode ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Available Students */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">
                    Available Students
                  </h4>
                  <div className="border-2 border-gray-200 rounded-lg p-3 h-64 overflow-y-auto">
                    {getUnassignedStudents().length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        <svg
                          className="mx-auto h-8 w-8 text-gray-400 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <p className="text-sm">No available students</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {getUnassignedStudents().map((student) => (
                          <label
                            key={student._id}
                            className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={mappingData?.students?.includes(
                                student._id,
                              )}
                              onChange={() => handleStudentToggle(student._id)}
                              className="mr-3 h-4 w-4 text-[#4F46E5] border-gray-300 rounded focus:ring-[#4F46E5]"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">
                                {student.firstName} {student.lastName}
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                {student.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                Roll No: {student.rollNumber}
                              </div>
                              {student.status && (
                                <div className="text-xs text-gray-400">
                                  Status: {student.status}
                                </div>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Assigned Students */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">
                    Assigned Students
                  </h4>
                  <div className="border-2 border-green-200 rounded-lg p-3 h-64 overflow-y-auto bg-green-50">
                    {getAssignedStudents().length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        <svg
                          className="mx-auto h-8 w-8 text-gray-400 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <p className="text-sm">No students assigned</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {getAssignedStudents().map((student) => (
                          <div
                            key={student._id}
                            className="flex items-center justify-between p-2 bg-white rounded border border-green-300"
                          >
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {student.firstName} {student.lastName}
                              </div>
                              <div className="text-xs text-gray-500">
                                Roll No: {student.rollNumber}
                              </div>
                              {student.status && (
                                <div className="text-xs text-gray-400">
                                  Status: {student.status}
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => handleStudentToggle(student._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getAssignedStudents().map((student) => (
                    <div
                      key={student._id}
                      className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="h-10 w-10 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-semibold mr-3">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {student.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Roll No: {student.rollNumber}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {getAssignedStudents().length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      No students assigned to this class
                    </p>
                    <p className="text-sm mt-1">
                      Switch to edit mode to assign students
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Save Button */}
          {editMode && (
            <div className="flex justify-end">
              <button
                onClick={handleSaveMapping}
                className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Save Class Mapping
              </button>
            </div>
          )}
        </>
      )}

      {!selectedClass && (
        <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-12 text-center">
          <div className="text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-lg font-medium">
              Select a class to manage mapping
            </p>
            <p className="text-sm mt-1">
              Choose a class from dropdown above to assign teachers and students
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassMapping;