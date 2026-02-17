import React, { useEffect, useState } from 'react'
import AddStudent from '../components/AddStudent';
import axios from 'axios';

const StudentManagement = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleModal = ()=>{
      setIsOpen(true);

  }
  const [students, setStudents] = useState([]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/studentList");
        console.log("API RESPONSE:", res.data);
        setStudents(res.data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchStudents();
  }, []);
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">
              Students Management
            </h1>
            <p className="text-[#64748B] mt-1">
              Manage student records and profiles
            </p>
          </div>

          <button
            className="flex items-center gap-2 bg-[#DC2626] text-white hover:bg-[#B91C1C] px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
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
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Student
          </button>
        </div>

        <div className="bg-white rounded-xl border-2 border-[#FCD34D] p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.34-4.34" />
              </svg>

              <input
                type="text"
                placeholder="Search by name, roll no, or className..."
                className="w-full pl-10 pr-4 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>

            <div className="flex items-center gap-2">
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
                className="text-gray-400"
              >
                <path
                  d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7
              a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3
              a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
                />
              </svg>

              <select className="flex-1 px-4 py-2 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="graduated">Graduated</option>
                <option value="transferred">Transferred</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-[#FCD34D] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2]">
                <tr>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    Roll No
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    Name
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    className
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    DOB
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    Parent Contact
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {students?.map((student) => (
                  <tr key={student._id}>
                    <td className="text-center">{student.rollNumber}</td>
                    <td className="text-center">{student.name}</td>
                    <td className="text-center">{student.classSection}</td>
                    <td className="text-center">{formatDate(student.dob)}</td>
                    <td className="text-center">
                      {student.parent.contactNumber}
                    </td>
                    <td className="text-center">{student.status}</td>
                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 text-red-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}

                <tr>
                  {students.length === 0 && (
                    <td
                      colSpan="7"
                      className="px-6 py-12 text-center text-[#64748B] "
                    >
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-lg font-medium">No students found</p>
                        <p className="text-sm">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddStudent open={isOpen} onClose={closeModal} />
    </main>
  );
}

export default StudentManagement