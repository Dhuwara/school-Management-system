import React from 'react'

const Features = () => {
  return (
    <>
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#DC2626] px-4 py-2 rounded-full font-semibold text-sm mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-no-axes-column-increasing"
                aria-hidden="true"
              >
                <path d="M5 21v-6"></path>
                <path d="M12 21V9"></path>
                <path d="M19 21V3"></path>
              </svg>
              Core Features
            </div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Comprehensive tools designed specifically for Indian schools to
              manage all operations efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Attendance Management
              </h3>
              <p className="text-[#64748B]">
                Mark attendance digitally and generate reports instantly.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dollar-sign text-[#DC2626]"
                  aria-hidden="true"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Fee Management
              </h3>
              <p className="text-[#64748B]">
                Track paid, due, and pending fees with automatic reminders.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Exams &amp; Report Cards
              </h3>
              <p className="text-[#64748B]">
                Create exams, enter marks, and generate digital report cards.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Timetable Management
              </h3>
              <p className="text-[#64748B]">
                Simple className and teacher scheduling.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Parent Communication
              </h3>
              <p className="text-[#64748B]">
                Send notices, updates, and alerts via SMS or WhatsApp.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#FCD34D] hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D] rounded-lg w-fit mb-4 group-hover:from-[#FCD34D] group-hover:to-[#F59E0B] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-no-axes-column-increasing text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M5 21v-6"></path>
                  <path d="M12 21V9"></path>
                  <path d="M19 21V3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                Reports &amp; Analytics
              </h3>
              <p className="text-[#64748B]">
                Get clear insights into attendance, fees, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className
="py-20 px-6 bg-white">
        <div className
="max-w-7xl mx-auto text-center">
          <div className
="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#DC2626] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className
="lucide lucide-users"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            Perfect For
          </div>
          <h2 className
="text-4xl font-bold text-[#0F172A] mb-4">
            Who Can Use This?
          </h2>
          <p className
="text-[#64748B] mb-12 text-lg max-w-2xl mx-auto">
            Perfect for all types of educational institutions across India
          </p>
          <div className
="flex flex-wrap justify-center gap-4">
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              CBSE Schools
            </div>
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              ICSE/CISCE Schools
            </div>
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              Matriculation Schools
            </div>
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              State Board Schools
            </div>
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              Higher Secondary Schools
            </div>
            <div className
="bg-gradient-to-r from-[#FEF3C7] to-[#FCD34D] px-6 py-3 rounded-lg shadow-sm font-semibold text-[#DC2626] hover:from-[#FCD34D] hover:to-[#F59E0B] transition-all hover:shadow-md">
              Private &amp; Trust-run Institutions
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features