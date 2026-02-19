import React,{useState} from 'react'
import AddTeacher from '../components/AddTeacher';

const TeacherManagement = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleModal = ()=>{
    setIsOpen(true)
  }
  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-[#0F172A]">
                Teachers Management
              </h1>
              <p className="text-[#64748B] mt-1">
                Manage teacher profiles, subjects &amp; workload
              </p>
            </div>
            <button
              className="flex items-center gap-2 bg-[#F59E0B] text-white hover:bg-[#D97706] px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
              onClick={handleModal}
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
                className="lucide lucide-plus"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add Teacher
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 rounded-xl border-2 border-[#FCD34D] bg-gradient-to-br from-[#FEF3C7] to-white">
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
                className="lucide lucide-users text-[#F59E0B] mb-2"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <p className="text-sm text-[#64748B]">Total Teachers</p>
              <p className="text-3xl font-bold text-[#0F172A]">5</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-[#FCD34D] bg-gradient-to-br from-[#FEE2E2] to-white">
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
                className="lucide lucide-book-open text-[#DC2626] mb-2"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
              <p className="text-sm text-[#64748B]">Subjects Taught</p>
              <p className="text-3xl font-bold text-[#0F172A]">12</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-[#FCD34D] bg-gradient-to-br from-[#D1FAE5] to-white">
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
                className="lucide lucide-calendar text-[#10B981] mb-2"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <p className="text-sm text-[#64748B]">Avg Workload</p>
              <p className="text-3xl font-bold text-[#0F172A]">26 hrs/week</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border-2 border-[#FCD34D] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2]">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Employee ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Subject
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Assigned Classes
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Workload
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-[#0F172A] uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#FFFBEB] transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">
                      T001
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">
                      Mrs. Sarah Johnson
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      Mathematics
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 5-A
                      </span>
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 4-B
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold">
                        30 hrs
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      +91 9876543210
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors">
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
                            className="lucide lucide-eye"
                            aria-hidden="true"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button className="p-2 text-[#F59E0B] hover:bg-[#FEF3C7] rounded-lg transition-colors">
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
                            className="lucide lucide-square-pen"
                            aria-hidden="true"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </svg>
                        </button>
                        <button className="p-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
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
                            className="lucide lucide-trash2 lucide-trash-2"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FFFBEB] transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">
                      T002
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">
                      Mr. John Smith
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      Science
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 6-A
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold">
                        25 hrs
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      +91 9876543211
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors">
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
                            className="lucide lucide-eye"
                            aria-hidden="true"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button className="p-2 text-[#F59E0B] hover:bg-[#FEF3C7] rounded-lg transition-colors">
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
                            className="lucide lucide-square-pen"
                            aria-hidden="true"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </svg>
                        </button>
                        <button className="p-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
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
                            className="lucide lucide-trash2 lucide-trash-2"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FFFBEB] transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">
                      T003
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">
                      Ms. Emily Davis
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      English
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 7-A
                      </span>
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 6-B
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold">
                        28 hrs
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      +91 9876543212
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors">
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
                            className="lucide lucide-eye"
                            aria-hidden="true"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button className="p-2 text-[#F59E0B] hover:bg-[#FEF3C7] rounded-lg transition-colors">
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
                            className="lucide lucide-square-pen"
                            aria-hidden="true"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </svg>
                        </button>
                        <button className="p-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
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
                            className="lucide lucide-trash2 lucide-trash-2"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FFFBEB] transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">
                      T004
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">
                      Mr. Michael Brown
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      Social Studies
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 5-B
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold">
                        22 hrs
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      +91 9876543213
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors">
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
                            className="lucide lucide-eye"
                            aria-hidden="true"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button className="p-2 text-[#F59E0B] hover:bg-[#FEF3C7] rounded-lg transition-colors">
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
                            className="lucide lucide-square-pen"
                            aria-hidden="true"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </svg>
                        </button>
                        <button className="p-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
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
                            className="lucide lucide-trash2 lucide-trash-2"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FFFBEB] transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">
                      T005
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[#0F172A]">
                      Mrs. Jessica Wilson
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">Hindi</td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 4-A
                      </span>
                      <span className="inline-block bg-[#FEF3C7] px-2 py-1 rounded text-xs mr-1 mb-1">
                        Grade 5-A
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 bg-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold">
                        26 hrs
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      +91 9876543214
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors">
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
                            className="lucide lucide-eye"
                            aria-hidden="true"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                        <button className="p-2 text-[#F59E0B] hover:bg-[#FEF3C7] rounded-lg transition-colors">
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
                            className="lucide lucide-square-pen"
                            aria-hidden="true"
                          >
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </svg>
                        </button>
                        <button className="p-2 text-[#DC2626] hover:bg-[#FEE2E2] rounded-lg transition-colors">
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
                            className="lucide lucide-trash2 lucide-trash-2"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddTeacher open={isOpen} onClose={closeModal} />
    </main>
  );
}

export default TeacherManagement