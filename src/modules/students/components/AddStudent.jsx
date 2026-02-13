import React from 'react'

const AddStudent = ({open, onClose}) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 z-50  items-center justify-center bg-black/50 p-4`}
    >
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0F172A]">Add New Student</h2>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <form className="space-y-6">
          <div className="rounded-lg bg-[#FEF3C7] p-4">
            <h3 className="mb-3 font-semibold text-[#0F172A]">
              Student Information
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Gender *
                </label>
                <select className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Roll Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., A001"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  className & Section *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Grade 5-A"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Status *
                </label>
                <select className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                  <option>Active</option>
                  <option>Graduated</option>
                  <option>Transferred</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#FEE2E2] p-4">
            <h3 className="mb-3 font-semibold text-[#0F172A]">
              Parent / Guardian Details
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Parent Name
                </label>
                <input
                  type="text"
                  placeholder="Father/Mother name"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Parent Email
                </label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#0F172A]">
              Address *
            </label>
            <textarea
              rows="3"
              required
              placeholder="Enter full residential address"
              className="w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            ></textarea>
          </div>

          <div className="flex gap-3 border-t-2 border-[#FCD34D] pt-4">
            <button
              type="button"
              className="flex-1 h-10 rounded-lg bg-gray-200 font-semibold text-[#0F172A] hover:bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 h-10 rounded-lg bg-[#DC2626] font-semibold text-white hover:bg-[#B91C1C]"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent