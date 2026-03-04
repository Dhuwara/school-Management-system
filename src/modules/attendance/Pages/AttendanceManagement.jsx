import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* ─────────────────────────────────────────────
   Small helper: student initials avatar
───────────────────────────────────────────── */
const InitialsAvatar = ({ name }) => {
    const initials = name
        ? name
            .split(' ')
            .slice(0, 2)
            .map((n) => n[0])
            .join('')
            .toUpperCase()
        : '?';

    const colors = [
        'bg-indigo-100 text-indigo-700',
        'bg-green-100 text-green-700',
        'bg-amber-100 text-amber-700',
        'bg-rose-100 text-rose-700',
        'bg-sky-100 text-sky-700',
        'bg-purple-100 text-purple-700',
    ];
    const color = colors[name?.charCodeAt(0) % colors.length] ?? colors[0];

    return (
        <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${color}`}
        >
            {initials}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Toast component
───────────────────────────────────────────── */
const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const t = setTimeout(onClose, 3500);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl text-white text-sm font-semibold
        transition-all duration-300 animate-fade-in
        ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
            {type === 'success' ? (
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            {message}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Tab 1 – Mark Attendance
───────────────────────────────────────────── */
const MarkAttendanceTab = ({ classes }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [loadingStudents, setLoadingStudents] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const showToast = (message, type = 'success') => {
        setToast({ message, type });
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
    useEffect(() => {
      if (!selectedClass) {
        setStudents([]);
        setAttendance({});
        setSubmitted(false);
        return;
      }
      console.log(selectedClass, "selectedclass");

      const cls = classes.find((c) => c._id === selectedClass);
      if (!cls) return;

      const fetchStudents = async () => {
        setLoadingStudents(true);
        setSubmitted(false);
        try {
          const academicYear = getAcademicYear();
          const res = await axios.get(
            `http://localhost:5000/api/class/students/${selectedClass}`,
            {
              params: {
                academicYear,
              },
            },
          );

          const studentsData = Array.isArray(res.data) ? res.data : [];
          setStudents(studentsData);

          await fetchExistingAttendance(selectedClass, date);
        } catch (err) {
          console.error(err);
          showToast("Failed to load students", "error");
        } finally {
          setLoadingStudents(false);
        }
      };

      fetchStudents();
    }, [selectedClass, date, classes]);

    const toggle = (id) => {
        setAttendance((prev) => ({
            ...prev,
            [id]: prev[id] === 'present' ? 'absent' : 'present',
        }));
    };

    const markAll = (status) => {
        const next = {};
        students.forEach((s) => (next[s._id] = status));
        setAttendance(next);
    };

    const presentCount = Object.values(attendance).filter((v) => v === 'present').length;
    const absentCount = Object.values(attendance).filter((v) => v === 'absent').length;

    const handleSubmit = async () => {
      if (!selectedClass || !date) return;

      setSubmitting(true);

      try {
        const records = students.map((s) => ({
          studentId: s._id,
          studentName: s.name,
          rollNumber: s.rollNumber,
          status: attendance[s._id] ?? "present",
        }));

        await axios.post("http://localhost:5000/api/attendance/mark", {
          classId: selectedClass,
          academicYear: getAcademicYear(),
          date,
          records,
        });

        setSubmitted(true);
        setIsEditMode(false);
        showToast("Attendance saved successfully!");
      } catch (err) {
        console.error(err);
        showToast("Failed to save attendance", "error");
      } finally {
        setSubmitting(false);
      }
    };
const fetchExistingAttendance = async (classId, date) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/attendance/history",
      {
        params: {
          classId,
          date,
          academicYear: getAcademicYear(),
        },
      },
    );

    if (res.data.records && res.data.records.length > 0) {
      const attendanceMap = {};

      res.data.records.forEach((record) => {
        attendanceMap[record.studentId] = record.status;
      });

      setAttendance(attendanceMap);
      setSubmitted(true);
      setIsEditMode(false);
    } else {
      setAttendance({});
      setSubmitted(false);
      setIsEditMode(false);
    }
  } catch (err) {
    console.error("Error fetching existing attendance:", err);
  }
};
    return (
      <div className="space-y-6">
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Class <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] bg-white"
              >
                <option value="">— Choose a class —</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.className}
                    {cls.section ? ` – Section ${cls.section}` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>
          </div>
        </div>

        {/* ── Loading ── */}
        {loadingStudents && (
          <div className="flex justify-center items-center py-16">
            <span className="loading loading-spinner loading-lg text-[#F59E0B]" />
          </div>
        )}

        {/* ── Empty class selection ── */}
        {!selectedClass && !loadingStudents && (
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-16 text-center shadow-sm">
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <svg
                className="w-14 h-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-600">
                Select a class to mark attendance
              </p>
              <p className="text-sm">
                Choose a class from the dropdown above to get started
              </p>
            </div>
          </div>
        )}

        {/* ── Students list ── */}
        {selectedClass && !loadingStudents && students.length === 0 && (
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-12 text-center shadow-sm">
            <p className="text-gray-500 font-medium">
              No students found in this class.
            </p>
          </div>
        )}

        {selectedClass && !loadingStudents && students.length > 0 && (
          <>
            {/* Summary strip */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-4 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Total
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {students.length}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-green-200 p-4 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Present
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {presentCount}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-red-200 p-4 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Absent
                  </p>
                  <p className="text-2xl font-bold text-red-500">
                    {absentCount}
                  </p>
                </div>
              </div>
            </div>

            {/* Bulk action + submit row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => markAll("present")}
                  disabled={!isEditMode}
                  className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-green-500 text-green-600 hover:bg-green-50 transition-colors disabled:opacity-40"
                >
                  ✓ Mark All Present
                </button>

                <button
                  onClick={() => markAll("absent")}
                  disabled={!isEditMode}
                  className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-red-400 text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
                >
                  ✕ Mark All Absent
                </button>
              </div>

                  <div className="flex gap-3">
                {submitted && !isEditMode && (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="px-5 py-2.5 rounded-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white shadow-md"
                  >
                     Edit Attendance
                  </button>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={submitting || !isEditMode}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold shadow-md transition-all text-white
      ${
        !isEditMode
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#4F46E5] hover:bg-[#4338CA]"
      }`}
                >
                  {submitting ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Student cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {students.map((student) => {
                const status = attendance[student._id] ?? "present";
                const isPresent = status === "present";
                return (
                  <div
                    key={student._id}
                    className={`bg-white rounded-xl border-2 p-4 shadow-sm transition-all duration-200
                    ${
                      isPresent
                        ? "border-green-300 shadow-green-50"
                        : "border-red-300 shadow-red-50"
                    }`}
                  >
                    {/* Top section */}
                    <div className="flex items-center gap-3 mb-4">
                      <InitialsAvatar name={student.name} />
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 truncate text-sm">
                          {student.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          Roll #{student.rollNumber}
                        </p>
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="flex items-center justify-center mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                        ${
                          isPresent
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isPresent ? "bg-green-500" : "bg-red-500"}`}
                        />
                        {isPresent ? "Present" : "Absent"}
                      </span>
                    </div>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggle(student._id)}
                      disabled={!isEditMode}
                      className={`w-full py-2 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95
  ${
    !isEditMode
      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
      : isPresent
        ? "bg-red-500 hover:bg-red-600 text-white"
        : "bg-green-500 hover:bg-green-600 text-white"
  }`}
                    >
                      {isPresent ? "✕ Mark Absent" : "✓ Mark Present"}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
};

/* ─────────────────────────────────────────────
   Tab 2 – Attendance History
───────────────────────────────────────────── */
const AttendanceHistoryTab = ({ classes }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const fetchHistory = async () => {
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
      if (!selectedClass) return;

      setLoading(true);
      setSearched(true);

      try {
        const res = await axios.get(
          "http://localhost:5000/api/attendance/history",
          {
            params: {
              classId: selectedClass,
              date,
              academicYear: getAcademicYear(),
            },
          },
        );

        setRecords(res.data.records || []);
      } catch (err) {
        console.error(err);
        setRecords([]);
      } finally {
        setLoading(false);
      }
    };

    const formatDate = (d) =>
        d ? new Date(d).toLocaleDateString('en-GB') : '—';

    return (
        <div className="space-y-6">
            {/* Filter bar */}
            <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-5 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                        <select
                            value={selectedClass}
                            onChange={(e) => { setSelectedClass(e.target.value); setSearched(false); }}
                            className="w-full px-4 py-2.5 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] bg-white"
                        >
                            <option value="">— Choose a class —</option>
                            {classes.map((cls) => (
                                <option key={cls._id} value={cls._id}>
                                    {cls.className}{cls.section ? ` – Section ${cls.section}` : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2.5 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                        />
                    </div>

                    <button
                        onClick={fetchHistory}
                        disabled={!selectedClass || loading}
                        className="px-6 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-50 text-white rounded-lg font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
                                </svg>
                                View Records
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Table */}
            {searched && !loading && (
                <div className="bg-white rounded-xl border-2 border-[#FCD34D] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2]">
                                <tr>
                                    {['Roll No', 'Student Name', 'Date', 'Status'].map((h) => (
                                        <th
                                            key={h}
                                            className="px-6 py-4 text-center text-xs font-bold uppercase text-black"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {records.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-16 text-center text-gray-400">
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                                <p className="font-medium text-gray-500">No attendance records found for this date</p>
                                                <p className="text-sm">Try selecting a different class or date</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    records.map((r, i) => (
                                        <tr key={i} className="hover:bg-[#FFFBEB] transition-colors">
                                            <td className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                                                {r.rollNumber || '—'}
                                            </td>
                                            <td className="px-6 py-3 text-center text-sm text-gray-800">
                                                {r.studentName || '—'}
                                            </td>
                                            <td className="px-6 py-3 text-center text-sm text-gray-600">
                                                {formatDate(date)}
                                            </td>
                                            <td className="px-6 py-3 text-center">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                            ${r.status === 'present'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-red-100 text-red-600'}`}
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full ${r.status === 'present' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                    {r.status === 'present' ? 'Present' : 'Absent'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Prompt before first search */}
            {!searched && !loading && (
                <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-16 text-center shadow-sm">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-semibold text-gray-600">View past attendance records</p>
                        <p className="text-sm">Select a class and date, then click <strong>View Records</strong></p>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const AttendanceManagement = () => {
    const [activeTab, setActiveTab] = useState('mark');
    const [classes, setClasses] = useState([]);
    const [loadingClasses, setLoadingClasses] = useState(true);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/class/configureClass');
                setClasses(Array.isArray(res.data) ? res.data : []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingClasses(false);
            }
        };
        fetchClasses();
    }, []);

    if (loadingClasses) {
        return (
            <main className="flex-1 p-6 md:p-8 lg:p-12 flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg text-[#F59E0B]" />
            </main>
        );
    }

    return (
        <main className="flex-1 p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto w-full space-y-6">

                {/* Page Header */}
                <div>
                    <h1 className="text-4xl font-bold text-[#0F172A]">Attendance Management</h1>
                    <p className="text-[#64748B] mt-1">Mark and track student attendance by class</p>
                </div>

                {/* Tab bar */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
                    <button
                        onClick={() => setActiveTab('mark')}
                        className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200
              ${activeTab === 'mark'
                                ? 'bg-white text-[#4F46E5] shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Mark Attendance
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200
              ${activeTab === 'history'
                                ? 'bg-white text-[#4F46E5] shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Attendance History
                        </span>
                    </button>
                </div>

                {/* Tab content */}
                {activeTab === 'mark' && <MarkAttendanceTab classes={classes} />}
                {activeTab === 'history' && <AttendanceHistoryTab classes={classes} />}
            </div>
        </main>
    );
};

export default AttendanceManagement;
