import React from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

const teacherSchema = z.object({
  teacher: z.object({
    firstName: z.string().min(1, "FirstName is required"),
    lastName: z.string().min(1, "Last Name is required"),
    password:z.string().min(1,"Password is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    contactNumber: z.coerce.number().min(1, "Contact number is required"),
    subject: z.string().min(1, "subject is required"),
    qualification: z.string().min(1, "qualificatio is required"),
    experience: z.coerce.number().min(1, "Experience is required"),
    status: z.string().min(1, "Status is required"),
    gender: z.string().min(1, "Gender is required"),
    address: z.string().min(1, "Address is required"),
  }),
});


const AddTeacher = ({open,onClose}) => {
    const {
      register,
      handleSubmit,
      reset,
      clearErrors,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(teacherSchema),
      defaultValues: {
        teacher: {
          firstName: "",
          lastName:"",
          password:"",
          email: "",
          contactNumber: "",
          subject: "",
          qualification: "",
          experience: "",
          status:"",
          gender:"",
          address: "",
        },
      },
    });
const onSubmit = (data) => {
  console.log("Validated Data:", data);
  axios.post("http://localhost:5000/api/staff/addStaff",data).then((res)=>console.log(res)) .catch((err)=> console.log(err))
   reset();
   clearErrors();
   onClose();
};

const handleClose = () => {
  reset();
  clearErrors();
  onClose();
};

  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 bg-black/50  items-center justify-center z-50 p-4`}
    >
      <div className="bg-white rounded-2xl w-full max-w-3xl p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
          Add New Teacher
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                First Name *
              </label>
              <input
                type="text"
                {...register("teacher.firstName")}
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              {errors.teacher?.firstName && (
                <p className="text-red-500">
                  {errors.teacher.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                {...register("teacher.lastName")}
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              {errors.teacher?.lastName && (
                <p className="text-red-500">
                  {errors.teacher.lastName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Password *
              </label>
              <input
                type="text"
                {...register("teacher.password")}
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              {errors.teacher?.password && (
                <p className="text-red-500">
                  {errors.teacher.password.message}
                </p>
              )}
            </div>

            

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Email *
              </label>
              <input
                type="email"
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.email")}
              />
              {errors.teacher?.email && (
                <p className="text-red-500">{errors.teacher.email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Contact *
              </label>
              <input
                type="tel"
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.contactNumber")}
              />
              {errors.teacher?.contactNumber && (
                <p className="text-red-500">
                  {errors.teacher.contactNumber.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Subject *
              </label>
              <input
                type="text"
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.subject")}
              />
              {errors.teacher?.subject && (
                <p className="text-red-500">{errors.teacher.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Qualification *
              </label>
              <input
                type="text"
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.qualification")}
              />
              {errors.teacher?.qualification && (
                <p className="text-red-500">
                  {errors.teacher.qualification.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Experience *
              </label>
              <input
                type="text"
                placeholder="e.g., 5 years"
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.experience")}
              />
              {errors.teacher?.experience && (
                <p className="text-red-500">
                  {errors.teacher.experience.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#0F172A] mb-2">
                Status *
              </label>
              <select
                className="h-10 px-3 border-2 border-[#FCD34D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.status")}
              >
                <option value="active">Active</option>
                <option value="on_leave">On Leave</option>
                <option value="resigned">Resigned</option>
              </select>
              {errors.teacher?.status && (
                <p className="text-red-500">{errors.teacher.status.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                Gender *
              </label>
              <select
                className="h-10 w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                {...register("teacher.gender")}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.teacher?.gender && (
                <p className="text-red-500">{errors.teacher.gender.message}</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[#0F172A]">Address</h3>
            <textarea
              rows="3"
              placeholder="Enter full residential address"
              className="w-full rounded-lg border-2 border-[#FCD34D] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              {...register("teacher.address")}
            ></textarea>
            {errors.teacher?.address && (
              <p className="text-red-500">{errors.teacher.address.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-4 pt-6 border-t-2 border-[#FCD34D]">
            <button
              type="button"
              className="px-6 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold transition"
              onClick={handleClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 h-10 rounded-lg bg-[#F59E0B] text-white hover:bg-[#D97706] font-semibold transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher