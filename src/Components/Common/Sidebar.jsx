import React from 'react'

const Sidebar = () => {
  return (
    <aside
      className="
              fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 z-40 transition-transform duration-300
              -translate-x-full lg:translate-x-0
            "
    >
      <a
        data-testid="nav-profile"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/profile"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user"
          aria-hidden="true"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Profile</span>
      </a>
      <a
        data-testid="nav-attendance"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/attendance"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-calendar"
          aria-hidden="true"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <span>Student</span>
      </a>
      <a
        data-testid="nav-timetable"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/timetable"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-book-open"
          aria-hidden="true"
        >
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
        <span>Timetable</span>
      </a>
      <a
        data-testid="nav-subjects"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/subjects"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-file-text"
          aria-hidden="true"
        >
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
        <span>Subjects</span>
      </a>
      <a
        data-testid="nav-homework"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/homework"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-clipboard-check"
          aria-hidden="true"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="m9 14 2 2 4-4"></path>
        </svg>
        <span>Homework</span>
      </a>
      <a
        data-testid="nav-exams"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/exams"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-graduation-cap"
          aria-hidden="true"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
          <path d="M22 10v6"></path>
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
        </svg>
        <span>Exams</span>
      </a>
      <a
        data-testid="nav-communication"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/communication"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-message-square"
          aria-hidden="true"
        >
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Communication</span>
      </a>
      <a
        data-testid="nav-fees"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/fees"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-dollar-sign"
          aria-hidden="true"
        >
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        <span>Fees</span>
      </a>
      <a
        data-testid="nav-library"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/library"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-library"
          aria-hidden="true"
        >
          <path d="m16 6 4 14"></path>
          <path d="M12 6v14"></path>
          <path d="M8 8v12"></path>
          <path d="M4 4v16"></path>
        </svg>
        <span>Library</span>
      </a>
      <a
        data-testid="nav-activities"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/activities"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-activity"
          aria-hidden="true"
        >
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
        </svg>
        <span>Activities</span>
      </a>
      <a
        data-testid="nav-requests"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]
                  "
        href="/student/requests"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-file-question-mark"
          aria-hidden="true"
        >
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
          <path d="M12 17h.01"></path>
          <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path>
        </svg>
        <span>Requests</span>
      </a>
      <a
        data-testid="nav-settings"
        className="
                    flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                    bg-[#4F46E5] text-white
                  "
        href="/student/settings"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-settings"
          aria-hidden="true"
        >
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>Settings</span>
      </a>
    </aside>
  );
}

export default Sidebar