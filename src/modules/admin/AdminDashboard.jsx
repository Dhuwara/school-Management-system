import React from 'react'

const AdminDashboard = () => {
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] rounded-2xl p-8 border-2 border-[#FCD34D]">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">
              Welcome back, Admin User! 👋
            </h1>
            <p className="text-lg text-[#64748B]">
              Here's what's happening in AJM International Institution today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              data-testid="stat-total-students"
              className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#FEE2E2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users text-[#DC2626]"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-green-500"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-[#64748B] mb-1">
                Total Students
              </h3>
              <p className="text-3xl font-bold text-[#0F172A] mb-2">0</p>
              <p className="text-xs text-[#64748B]">+5 this week</p>
            </div>
            <div
              data-testid="stat-total-classNamees"
              className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#FEF3C7]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-open text-[#F59E0B]"
                    aria-hidden="true"
                  >
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-green-500"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-[#64748B] mb-1">
                Total classes
              </h3>
              <p className="text-3xl font-bold text-[#0F172A] mb-2">0</p>
              <p className="text-xs text-[#64748B]">8 sections</p>
            </div>
            <div
              data-testid="stat-total-teachers"
              className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#D1FAE5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap text-[#10B981]"
                    aria-hidden="true"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-green-500"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-[#64748B] mb-1">
                Total Teachers
              </h3>
              <p className="text-3xl font-bold text-[#0F172A] mb-2">0</p>
              <p className="text-xs text-[#64748B]">3 new this month</p>
            </div>
            <div
              data-testid="stat-pending-fees"
              className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#FEE2E2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up text-green-500"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-[#64748B] mb-1">
                Pending Fees
              </h3>
              <p className="text-3xl font-bold text-[#0F172A] mb-2">₹0</p>
              <p className="text-xs text-[#64748B]">15 students</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar text-[#F59E0B]"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Today's Attendance Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#D1FAE5] rounded-lg">
                <p className="text-sm text-[#064E3B] font-medium">Present</p>
                <p className="text-3xl font-bold text-[#10B981]">142</p>
              </div>
              <div className="p-4 bg-[#FEE2E2] rounded-lg">
                <p className="text-sm text-[#7F1D1D] font-medium">Absent</p>
                <p className="text-3xl font-bold text-[#DC2626]">8</p>
              </div>
              <div className="p-4 bg-[#FEF3C7] rounded-lg">
                <p className="text-sm text-[#78350F] font-medium">
                  Attendance Rate
                </p>
                <p className="text-3xl font-bold text-[#F59E0B]">94.7%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dollar-sign text-[#10B981]"
                aria-hidden="true"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Fee Collection Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#D1FAE5] rounded-lg">
                <p className="text-sm text-[#064E3B] font-medium">Collected</p>
                <p className="text-2xl font-bold text-[#10B981]">₹4,50,000</p>
              </div>
              <div className="p-4 bg-[#FEF3C7] rounded-lg">
                <p className="text-sm text-[#78350F] font-medium">Pending</p>
                <p className="text-2xl font-bold text-[#F59E0B]">₹75,000</p>
              </div>
              <div className="p-4 bg-[#FEE2E2] rounded-lg">
                <p className="text-sm text-[#7F1D1D] font-medium">Overdue</p>
                <p className="text-2xl font-bold text-[#DC2626]">₹25,000</p>
              </div>
              <div className="p-4 bg-[#E0E7FF] rounded-lg">
                <p className="text-sm text-[#312E81] font-medium">Total Expected</p>
                <p className="text-2xl font-bold text-[#4F46E5]">₹5,50,000</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm">
              <h2 className="text-2xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell text-[#DC2626]"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button
                  data-testid="quick-add-student"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] hover:shadow-md transition-all text-[#0F172A] font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-plus text-[#DC2626]"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                  Add New Student
                </button>
                <button
                  data-testid="quick-add-teacher"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] hover:shadow-md transition-all text-[#0F172A] font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap text-[#F59E0B]"
                    aria-hidden="true"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  Add New Teacher
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] hover:shadow-md transition-all text-[#0F172A] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar text-[#10B981]"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Record Attendance
                </button>
                <button
                  data-testid="quick-announcement"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] hover:shadow-md transition-all text-[#0F172A] font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square text-[#4F46E5]"
                    aria-hidden="true"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Send Announcement
                </button>
              </div>
            </div>
            <div className="p-6 rounded-xl border-2 border-[#FCD34D] bg-white shadow-sm">
              <h2 className="text-2xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert text-[#F59E0B]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Recent Activities &amp; Alerts
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big text-green-500"
                      aria-hidden="true"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">
                      5 new students added today
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell text-blue-500"
                      aria-hidden="true"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">
                      Attendance marked for Grade 5-A
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">3 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-alert text-yellow-500"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" x2="12" y1="8" y2="12"></line>
                      <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">
                      15 fee payments pending
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big text-green-500"
                      aria-hidden="true"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">
                      Mid-term exam results published
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell text-blue-500"
                      aria-hidden="true"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#0F172A]">
                      Parent-teacher meeting scheduled
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard