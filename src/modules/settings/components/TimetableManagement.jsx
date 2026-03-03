import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const TimetableManagement = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [timetableData, setTimetableData] = useState({});
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // Mock data for demonstration
  const mockClasses = useMemo(() => [
    { _id: '1', className: 'Grade 10', section: 'A' },
    { _id: '2', className: 'Grade 10', section: 'B' },
    { _id: '3', className: 'Grade 11', section: 'A' },
    { _id: '4', className: 'Grade 11', section: 'B' },
  ], []);


  const timeSlots = useMemo(() => [
    { time: '08:00-08:45', type: 'period', label: 'Period 1' },
    { time: '08:45-09:30', type: 'period', label: 'Period 2' },
    { time: '09:30-09:45', type: 'break', label: 'Morning Break' },
    { time: '09:45-10:30', type: 'period', label: 'Period 3' },
    { time: '10:30-11:15', type: 'period', label: 'Period 4' },
    { time: '11:15-12:00', type: 'period', label: 'Period 5' },
    { time: '12:00-12:45', type: 'period', label: 'Period 6' },
    { time: '12:45-01:30', type: 'break', label: 'Lunch Break' },
    { time: '01:30-02:15', type: 'period', label: 'Period 7' },
    { time: '02:15-03:00', type: 'period', label: 'Period 8' }
  ], []);

  const days = useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], []);
const initializeEmptyTimetable = () => {
  const initialTimetable = {};

  days.forEach((day) => {
    initialTimetable[day] = {};

    timeSlots.forEach((slot) => {
      initialTimetable[day][slot.time] = {
        subject: "",
        teacher: "",
        room: "",
      };
    });
  });

  setTimetableData(initialTimetable);
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
const transformTimetableFromApi = (apiData) => {
  console.log(apiData,"aidateee")
  const formatted = {};

  apiData.forEach((dayObj) => {
    formatted[dayObj.day] = {};

    dayObj.periods.forEach((period) => {
      const timeKey = `${period.startTime}-${period.endTime}`;

      formatted[dayObj.day][timeKey] = {
        subject: period.subject?._id || "",
        teacher: period.teacher?._id || "",
        room: period.roomNumber || "",
      };
    });
  });

  return formatted;
};
const transformTimetableToApi = (data) => {
  return Object.entries(data).map(([day, periods]) => ({
    day,
    periods: Object.entries(periods).map(([timeSlot, details], index) => {
      const [startTime, endTime] = timeSlot.split("-");

      return {
        periodNumber: index + 1,
        startTime,
        endTime,
        subject: details.subject || null, 
        teacher: details.teacher || null, 
        roomNumber: details.room || "", 
      };
    }),
  }));
};
 useEffect(() => {
   const fetchData = async () => {
     try {
        const [classRes, teacherRes, subjectRes] =
          await Promise.all([
            axios.get("/api/class/configureclass", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
            axios.get("/api/staff/getallstaffs", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
           
            axios.get("/api/subject/getallsubjects", {
              timeout: 10000,
              headers: { "Cache-Control": "no-cache" },
            }),
          ]);
       const processedClasses = Array.isArray(classRes.data) ? classRes.data : [];
       const processedTeachers = Array.isArray(teacherRes.data)
         ? teacherRes.data
         : [];
       const processedSubjects = Array.isArray(subjectRes.data)
          ? subjectRes.data
          : [];
       console.log(teacherRes.data, "classess");
       setClasses(processedClasses); 
       setSubjects(processedSubjects);
       setTeachers(processedTeachers);

       // Initialize empty timetable structure
       const initialTimetable = {};
       days.forEach((day) => {
         initialTimetable[day] = {};
         timeSlots.forEach((slot) => {
           initialTimetable[day][slot.time] = {
             subject: "",
             teacher: "",
             room: "",
           };
         });
       });

       setTimetableData(initialTimetable);
     } catch (error) {
       console.error("Error fetching timetable data:", error);
     }
   };

   fetchData();
 }, [days, timeSlots]);
useEffect(() => {
  const fetchTimetable = async () => {
    if (!selectedClass) return;

    try {
      // const academicYear = getAcademicYear();

      const res = await axios.get(
        `http://localhost:5000/api/timetable/${selectedClass}`,
      );
      console.log(res,"resofschedule")
      if (res.data && res.data.schedule) {
        const converted = transformTimetableFromApi(res.data.schedule);
        console.log(converted,'convertedddd')
        setTimetableData(converted);
      } else {
        initializeEmptyTimetable();
      }
    } catch (error) {
      console.log("No timetable found. Creating new structure.");
      initializeEmptyTimetable();
    }
  };

  fetchTimetable();
}, [selectedClass]);

  const handleClassChange = (classId) => {
    setSelectedClass(classId);
    const selectedClassData = classes.find((c) => c._id === classId);
    if (selectedClassData) {
      setSelectedSection(selectedClassData.section);
    }
  };

  const handleCellClick = (day, timeSlot) => {
    if (!selectedClass) {
      alert('Please select a class first');
      return;
    }
    setEditMode(true);
    // Here you would open a modal to edit this specific cell
    console.log(`Editing ${day} ${timeSlot} for class ${selectedClass}`);
  };

  const handleCellChange = (day, timeSlot, field, value) => {
    const newTimetable = { ...timetableData };
    newTimetable[day][timeSlot][field] = value;
    setTimetableData(newTimetable);
  };

 const handleSaveTimetable = async () => {
   const formattedForApi = transformTimetableToApi(timetableData);
  console.log(formattedForApi,":formamwfg")
   const payload = {
     class: selectedClass,
     section: selectedSection,
     academicYear: getAcademicYear(),
     schedule: formattedForApi,
   };

   try {
     await axios.post("http://localhost:5000/api/timetable/upsert", payload);

     alert("Timetable saved successfully!");
     setEditMode(false);
   } catch (error) {
     console.error(error);
     alert("Failed to save timetable");
   }
 };

const getAvailableTeachers = (subjectId) => {
  console.log(subjectId,"dubfejfejfe")
  if (!subjectId) return [];

  const subject = subjects.find((s) => String(s._id) === String(subjectId));
  console.log(subject,"subjectt")
  console.log(teachers,"teacherss")

  if (!subject) return [];

  return teachers.filter(
    (teacher) =>
      Array.isArray(teacher.subjects) &&
      teacher.subjects.some(
        (sub) => sub === subject.subjectCode || sub === subject._id,
      ),
  );
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
                  {cls.className} - Section {cls.section}
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

      {/* Timetable */}
      {selectedClass && (
        <div className="bg-white rounded-xl border-2 border-[#FCD34D] shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Timetable -{" "}
              {classes.find((c) => c._id === selectedClass)?.className} -
              Section {selectedSection}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2]">
                <tr>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase text-black border border-gray-300">
                    Time / Day
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="px-4 py-3 text-center text-xs font-bold uppercase text-black border border-gray-300"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((timeSlot) => (
                  <tr
                    key={timeSlot.time}
                    className={timeSlot.type === "break" ? "bg-yellow-50" : ""}
                  >
                    <td className="px-4 py-3 text-center text-sm font-medium text-gray-900 border border-gray-300 bg-gray-50">
                      <div>
                        <div className="font-semibold">{timeSlot.label}</div>
                        <div className="text-xs text-gray-500">
                          {timeSlot.time}
                        </div>
                      </div>
                    </td>
                    {days.map((day) => (
                      <td
                        key={`${day}-${timeSlot.time}`}
                        className={`px-2 py-2 border border-gray-300 ${
                          timeSlot.type === "break"
                            ? "bg-yellow-100 cursor-not-allowed"
                            : "cursor-pointer hover:bg-[#FFFBEB] transition-colors"
                        }`}
                        onClick={() =>
                          editMode &&
                          timeSlot.type === "period" &&
                          handleCellClick(day, timeSlot.time)
                        }
                      >
                        {timeSlot.type === "break" ? (
                          <div className="text-center text-sm font-medium text-yellow-800">
                            {timeSlot.label}
                          </div>
                        ) : editMode ? (
                          <div className="space-y-1">
                            <select
                              value={
                                timetableData[day]?.[timeSlot.time]?.subject ||
                                ""
                              }
                              onChange={(e) =>
                                handleCellChange(
                                  day,
                                  timeSlot.time,
                                  "subject",
                                  e.target.value,
                                )
                              }
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <option value="">Subject</option>
                              {subjects.map((subject) => (
                                <option key={subject._id} value={subject._id}>
                                  {subject.subjectName}
                                </option>
                              ))}
                            </select>

                            <select
                              value={
                                timetableData[day]?.[timeSlot.time]?.teacher ||
                                ""
                              }
                              onChange={(e) =>
                                handleCellChange(
                                  day,
                                  timeSlot.time,
                                  "teacher",
                                  e.target.value,
                                )
                              }
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <option value="">Teacher</option>
                              {getAvailableTeachers(
                                timetableData[day]?.[timeSlot.time]?.subject,
                              ).map((teacher) => (
                                <option key={teacher._id} value={teacher._id}>
                                  {teacher.firstName} {teacher.lastName}
                                </option>
                              ))}
                            </select>

                            <input
                              type="text"
                              value={
                                timetableData[day]?.[timeSlot.time]?.room || ""
                              }
                              onChange={(e) =>
                                handleCellChange(
                                  day,
                                  timeSlot.time,
                                  "room",
                                  e.target.value,
                                )
                              }
                              placeholder="Room"
                              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#F59E0B]"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        ) : (
                          <div className="min-h-[60px] p-2">
                            {timetableData[day]?.[timeSlot.time]?.subject && (
                              <div className="text-xs space-y-1">
                                <div className="font-semibold text-[#0F172A]">
                                  {
                                    subjects.find(
                                      (s) =>
                                        s._id ===
                                        timetableData[day][timeSlot.time]
                                          .subject,
                                    )?.subjectCode
                                  }
                                </div>
                                {timetableData[day][timeSlot.time].teacher && (
                                  <div className="text-gray-600">
                                    {
                                      teachers.find(
                                        (t) =>
                                          t._id ===
                                          timetableData[day][timeSlot.time]
                                            .teacher,
                                      )?.firstName
                                    }
                                  </div>
                                )}
                                {timetableData[day][timeSlot.time].room && (
                                  <div className="text-gray-500">
                                    Room:{" "}
                                    {timetableData[day][timeSlot.time].room}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {editMode && (
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={handleSaveTimetable}
                className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Save Timetable
              </button>
            </div>
          )}
        </div>
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-lg font-medium">
              Select a class to view timetable
            </p>
            <p className="text-sm mt-1">
              Choose a class from the dropdown above to manage its timetable
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableManagement;
