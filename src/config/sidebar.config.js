// config/sidebar.config.js
export const sidebarConfig = {
  student: [
    { label: "Dashboard", path: "/student/dashboard" },
    { label: "Results", path: "/student/results" },
    { label: "Timetable", path: "/student/timetable" },
  ],
  staff: [
    { label: "Dashboard", path: "/staff/dashboard" },
    { label: "Attendance", path: "/staff/attendance" },
    { label: "Marks", path: "/staff/marks" },
  ],
  parent: [
    { label: "Dashboard", path: "/parent/dashboard" },
    { label: "Child Progress", path: "/parent/progress" },
    { label: "Fees", path: "/parent/fees" },
  ],
};
