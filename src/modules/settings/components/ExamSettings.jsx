import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExamSettings = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExamType, setSelectedExamType] = useState('');
  const [examSchedule, setExamSchedule] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(null);

  const examTypes = [
    { id: 'cat1', name: 'CAT-1', duration: 60, maxMarks: 50 },
    { id: 'cat2', name: 'CAT-2', duration: 60, maxMarks: 50 },
    { id: 'quarterly', name: 'Quarterly', duration: 120, maxMarks: 100 },
    { id: 'halfyearly', name: 'Half Yearly', duration: 180, maxMarks: 100 },
    { id: 'annual', name: 'Annual', duration: 180, maxMarks: 100 }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [classRes, subjectRes] = await Promise.all([
          axios.get("http://localhost:5000/api/class/configureclass", {
            timeout: 10000,
            headers: { "Cache-Control": "no-cache" },
          }),
          axios.get("http://localhost:5000/api/subject/getallsubjects", {
            timeout: 10000,
            headers: { "Cache-Control": "no-cache" },
          })
        ]);

        setClasses(Array.isArray(classRes.data) ? classRes.data : []);
        setSubjects(Array.isArray(subjectRes.data) ? subjectRes.data : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setClasses([]);
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getAcademicYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    if (month >= 6) {
      return `${year}-${year + 1}`;
    } else {
      return `${year - 1}-${year}`;
    }
  };

  const handleClassChange = async (classId) => {
     setSelectedClass(classId);
     setSelectedExamType("");
     setCurrentSchedule(null);

    if (!classId) {
      setExamSchedule([]);
      setCurrentSchedule(null);
      return;
    }

    try {
      const subjectRes = await axios.get(`/api/class/${classId}/subjects`);

      setSubjects(subjectRes.data.data || []);
    } catch (err) {
      console.error(err);
      setSubjects([]);
    }

    // Existing exam schedule fetch
    try {
      const academicYear = getAcademicYear();
      const res = await axios.get(
        `/api/exam/schedule/${classId}/${academicYear}`,
      );
      setExamSchedule(res.data.data || []);
    } catch {
      setExamSchedule([]);
    }
  };

  const handleExamTypeChange = (examType) => {
    const examInfo = examTypes.find((t) => t.id === examType);
    setSelectedExamType(examType);
    const existingSchedule = examSchedule.find(s => s.examType === examType);
    if (existingSchedule) {
      setCurrentSchedule(existingSchedule);
       setEditMode(false);
    } else {
      console.log(selectedClass,"selectedClass")
      const classInfo = classes.find(c => c._id === selectedClass);
      console.log(classInfo,"classinfoffoof")
      const isHighSchool =
        classInfo &&
        (classInfo.standard === "11" || classInfo.standard === "12");
      console.log(isHighSchool,"ishighschool")
      setCurrentSchedule({
        examType,
        examName: examInfo?.name,
        academicYear: getAcademicYear(),
        startDate: "",
        endDate: "",
        scheduleType: isHighSchool ? "section" : "all",
        sections: isHighSchool ? [classInfo?.section] : [],
        subjectSchedule: subjects.map((subject) => ({
          subjectCode: subject.subjectCode,
          subjectName: subject.subjectName,
          date: "",
          startTime: "",
          endTime: "",
          room: "",
          mmaxMarks: examInfo?.maxMarks || 100,
        })),
      });
       setEditMode(false);
    }
  };

  const handleScheduleChange = (field, value) => {
    setCurrentSchedule(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubjectScheduleChange = (subjectCode, field, value) => {
    setCurrentSchedule(prev => ({
      ...prev,
      subjectSchedule: prev.subjectSchedule.map(subject =>
        subject.subjectCode === subjectCode
          ? { ...subject, [field]: value }
          : subject
      )
    }));
  };

  const handleSaveSchedule = async () => {
    try {

      if (!currentSchedule?.startDate || !currentSchedule?.endDate) {
        alert("Please select start and end dates");
        return;
      }

      for (let subject of currentSchedule?.subjectSchedule || []) {
        if (!subject.date) {
          alert(`Please set exam date for ${subject.subjectName}`);
          return;
        }
      }

      const payload = {
        classId: selectedClass,
        ...currentSchedule,
      };

      await axios.post(`/api/exam/schedule/save`, payload);

      const academicYear = getAcademicYear();

      const res = await axios.get(
        `/api/exam/schedule/${selectedClass}/${academicYear}`,
      );

      setExamSchedule(res.data.data || []);

      const updatedCurrent = res.data.data.find(
        (s) => s.examType === currentSchedule.examType,
      );

      setCurrentSchedule(updatedCurrent || null);
      setEditMode(false);
    } catch (error) {
      console.error("Error saving exam schedule:", error);
    }
  };

  const getCurrentClassInfo = () => {
    return classes.find(cls => cls._id === selectedClass);
  };

  const isHighSchoolClass = () => {
    const classInfo = getCurrentClassInfo();
    return classInfo && (classInfo.standard === '11' || classInfo.standard === '12');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner loading-lg text-[#F59E0B]"></div>
      </div>
    );
  }

  return (
    <main className="flex-1 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      {cls.className} - Section {cls.section}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exam Type *
                </label>
                <select
                  value={selectedExamType}
                  onChange={(e) => handleExamTypeChange(e.target.value)}
                  disabled={!selectedClass}
                  className="w-full px-4 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] disabled:opacity-50"
                >
                  <option value="">Select Exam Type</option>
                  {examTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.duration} min, {type.maxMarks} marks)
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => setEditMode(!editMode)}
                  disabled={
                    !selectedClass || !selectedExamType || !currentSchedule
                  }
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

          {selectedClass && selectedExamType && currentSchedule && (
            <>
              {/* Exam Details */}
              <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Exam Details - {currentSchedule.examName}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    {editMode ? (
                      <input
                        type="date"
                        value={currentSchedule?.startDate || ""}
                        onChange={(e) =>
                          handleScheduleChange("startDate", e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    ) : (
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        {currentSchedule.startDate || "Not set"}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    {editMode ? (
                      <input
                        type="date"
                        value={currentSchedule.endDate}
                        onChange={(e) =>
                          handleScheduleChange("endDate", e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    ) : (
                      <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                        {currentSchedule.endDate || "Not set"}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Schedule Type
                    </label>
                    <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                      {isHighSchoolClass() ? "Section-wise" : "All Sections"}
                    </div>
                  </div>

                  {isHighSchoolClass() && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {isHighSchoolClass() ? "Section" : "Sections"}
                      </label>
                      {editMode ? (
                        <input
                          type="text"
                          value={
                            currentSchedule.sections
                              ? currentSchedule.sections.join(", ")
                              : ""
                          }
                          onChange={(e) => {
                            const sectionsArray = e.target.value
                              .split(",")
                              .map((s) => s.trim());
                            handleScheduleChange("sections", sectionsArray);
                          }}
                          placeholder="e.g. A, B"
                          className="w-full px-3 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                        />
                      ) : (
                        <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                          {currentSchedule.sections &&
                          currentSchedule.sections.length > 0
                            ? currentSchedule.sections
                                .filter(Boolean)
                                .join(", ") || "Not set"
                            : "Not set"}
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Academic Year
                    </label>
                    <div className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                      {currentSchedule.academicYear}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject-wise Schedule */}
              <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Subject-wise Schedule
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          Subject
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          Date
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          Start Time
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          End Time
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          Room
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                          Max Marks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSchedule.subjectSchedule.map((subject, index) => (
                        <tr
                          key={subject.subjectCode}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="border border-gray-200 px-4 py-2 text-sm">
                            {subject.subjectName}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {editMode ? (
                              <input
                                type="date"
                                value={subject.date}
                                onChange={(e) =>
                                  handleSubjectScheduleChange(
                                    subject.subjectCode,
                                    "date",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              />
                            ) : (
                              <span className="text-sm">
                                {subject.date || "Not set"}
                              </span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {editMode ? (
                              <input
                                type="time"
                                value={subject.startTime}
                                onChange={(e) =>
                                  handleSubjectScheduleChange(
                                    subject.subjectCode,
                                    "startTime",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              />
                            ) : (
                              <span className="text-sm">
                                {subject.startTime || "Not set"}
                              </span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {editMode ? (
                              <input
                                type="time"
                                value={subject.endTime}
                                onChange={(e) =>
                                  handleSubjectScheduleChange(
                                    subject.subjectCode,
                                    "endTime",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              />
                            ) : (
                              <span className="text-sm">
                                {subject.endTime || "Not set"}
                              </span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {editMode ? (
                              <input
                                type="text"
                                value={subject.room}
                                onChange={(e) =>
                                  handleSubjectScheduleChange(
                                    subject.subjectCode,
                                    "room",
                                    e.target.value,
                                  )
                                }
                                placeholder="Room No."
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              />
                            ) : (
                              <span className="text-sm">
                                {subject.room || "Not assigned"}
                              </span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {editMode ? (
                              <input
                                type="number"
                                value={subject.maxMarks}
                                onChange={(e) =>
                                  handleSubjectScheduleChange(
                                    subject.subjectCode,
                                    "maxMarks",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              />
                            ) : (
                              <span className="text-sm">
                                {subject.maxMarks}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Save Button */}
              {editMode && (
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveSchedule}
                    className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-2 rounded-lg font-semibold transition-all"
                  >
                    Save Exam Schedule
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="text-lg font-medium">
                  Select a class to manage exam schedules
                </p>
                <p className="text-sm mt-1">
                  Choose a class and exam type to create or view exam schedules
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ExamSettings;
