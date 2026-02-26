import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewstudentModal = ({ open, onClose, id }) => {
  console.log(open, id, "hitsss");
  const [student, setstudent] = useState(null)

useEffect(() => {
  if (!open || !id) return;

  const fetchstudent = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/student/${id}`);
        console.log(res.data)
      setstudent(res.data); 
    } catch (error) {
      console.error(error);
    }
  };

  fetchstudent();
}, [open, id]);

 const formatDate = (dateString) => {
   return new Date(dateString).toLocaleDateString("en-GB");
 };

  return (
    <div
      className={`${open ? "fixed" : "hidden"} inset-0 bg-black/50 flex items-center justify-center z-50 p-4`}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0F172A]">student Profile</h2>

          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2] rounded-lg">
            <div className="w-20 h-20 bg-[#DC2626] text-white rounded-full flex items-center justify-center text-3xl font-bold capitalize">
                {student?.name.split("")[0]}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] capitalize">
                {student?.name}
              </h3>
              <p className="text-[#64748B]">
                Grade {student?.classSection} • Roll No: {student?.rollNumber}
              </p>
              <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full mt-2 bg-[#D1FAE5] text-[#065F46]">
                {student?.status}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[#64748B] mb-1">Date of Birth</p>
              <p className="text-base font-semibold text-[#0F172A]">
                {formatDate(student?.dob)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[#64748B] mb-1">Gender</p>
              <p className="text-base font-semibold text-[#0F172A] capitalize">
                {student?.gender}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[#64748B] mb-1">Parent Contact</p>
              <p className="text-base font-semibold text-[#0F172A]">
                {student?.parent.contactNumber}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[#64748B] mb-1">Parent Name</p>
              <p className="text-base font-semibold text-[#0F172A] capitalize">
                {student?.parent.name}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
              <p className="text-sm text-[#64748B] mb-1">Address</p>
              <p className="text-base font-semibold text-[#0F172A]">
                {student?.address}
              </p>
            </div>
          </div>
          <button className="w-full bg-[#F59E0B] text-white hover:bg-[#D97706] h-10 px-4 py-2 rounded-lg font-semibold transition-colors" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewstudentModal