import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const studentSchema = z.object({
  student: z.object({
    name: z.string().min(1, "Student name is required"),
    dob: z.string().min(1, "Date of Birth is required"),
    gender: z.string().min(1, "Gender is required"),
    rollNumber: z.string().min(1, "Roll number is required"),
    class_section: z.string().min(1, "Class & Section is required"),
    status: z.string().min(1, "Status is required"),
  }),
  parent: z.object({
    name: z.string().min(1, "Parent name is required"),
    contactNumber: z.string().min(1, "Contact number is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
  }),
  address: z.string().min(1, "Address is required"),
});

const AddStudent = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      student: {
        name: "",
        dob: "",
        gender: "",
        rollNumber: "",
        class_section: "",
        status: "",
      },
      parent: {
        name: "",
        contactNumber: "",
        email: "",
      },
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
    axios
      .post("http://localhost:5000/api/student", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
     reset();
     clearErrors()
     onClose();
  };

  if (!open) return null;
  const handleClose=()=>{
   reset();
   clearErrors()
   onClose();
  }
  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 z-50  items-center justify-center bg-black/50 p-4`}
    >
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0F172A]">Add New Student</h2>

          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Enter full name"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.name")}
                />
                {errors.student?.name && (
                  <p className="text-red-500">{errors.student.name.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.dob")}
                />
                {errors.student?.dob && (
                  <p className="text-red-500">{errors.student.dob.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Gender *
                </label>
                <select
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.student?.gender && (
                  <p className="text-red-500">
                    {errors.student.gender.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Roll Number *
                </label>
                <input
                  type="text"
                  placeholder="e.g., A001"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.rollNumber")}
                />
                {errors.student?.rollNumber && (
                  <p className="text-red-500">
                    {errors.student.rollNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Class Section *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Grade 5-A"
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.class_section")}
                />
                {errors.student?.class_section && (
                  <p className="text-red-500">
                    {errors.student.class_section.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Status *
                </label>
                <select
                  className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  {...register("student.status")}
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Graduated">Graduated</option>
                  <option value="Transferred">Transferred</option>
                </select>
                {errors.student?.status && (
                  <p className="text-red-500">
                    {errors.student.status.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#FEE2E2] p-4">
            <h3 className="mb-3 font-semibold text-[#0F172A]">
              Parent / Guardian Details
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Father/Mother name"
                className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("parent.name")}
              />
              {errors.parent?.name && (
                <p className="text-red-500">{errors.parent.name.message}</p>
              )}

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("parent.contactNumber")}
              />
              {errors.parent?.contactNumber && (
                <p className="text-red-500">
                  {errors.parent.contactNumber.message}
                </p>
              )}

              <input
                type="email"
                placeholder="parent@example.com"
                className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("parent.email")}
              />
              {errors.parent?.email && (
                <p className="text-red-500">{errors.parent.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[#0F172A]">Address</h3>
            <textarea
              rows="3"
              placeholder="Enter full residential address"
              className="w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              {...register("address")}
            ></textarea>
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div className="flex gap-3 border-t-2 border-[#FCD34D] pt-4">
            <button
              type="button"
              className="flex-1 h-10 rounded-lg bg-gray-200 font-semibold text-[#0F172A] hover:bg-gray-300"
              onClick={handleClose}
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
};

export default AddStudent;
