import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

const classSchema = z.object({
  className: z.string().min(1, "Class Name is required"),
  section: z.string().min(1, "Section is required"),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1"),
  roomNumber: z.string().min(1, "Room Number is required"),
  class_teacher: z.string().min(1, "Class Teacher is required"),
});

const AddClass = ({ onOpen, onClose }) => {
      const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(classSchema),
        defaultValues: {
          className: "",
          section: "",
          capacity: "",
          roomNumber: "",
          class_teacher: "",
        },
      });

    const onSubmit = (data)=>{
        axios.post("http://localhost:5000/api/class/configureclass",data)
         reset();
         clearErrors();
         onClose();
    }
  return (
    <dialog className={`modal ${onOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 py-3">
              <label htmlFor="name" className="text-sm font-medium">
                Class Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g., Grade 10"
                className="flex h-9 w-full rounded-md   bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
               disabled:cursor-not-allowed disabled:opacity-50"
                {...register("className")}
              />
              {errors.className && (
                <p className="text-red-500">{errors.className.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="section" className="text-sm font-medium">
                Section *
              </label>
              <input
                id="section"
                type="text"
                placeholder="e.g., A"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
               disabled:cursor-not-allowed disabled:opacity-50"
                {...register("section")}
              />
              {errors.section && (
                <p className="text-red-500">{errors.section.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="academicYear" className="text-sm font-medium">
                Academic Year *
              </label>
              <input
                id="academicYear"
                type="text"
                defaultValue="2024-2025"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="capacity" className="text-sm font-medium">
                Capacity
              </label>
              <input
                id="capacity"
                type="number"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                {...register("capacity")}
              />
              {errors.capacity && (
                <p className="text-red-500">{errors.capacity.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="room" className="text-sm font-medium">
                Room Number
              </label>
              <input
                id="room"
                type="text"
                placeholder="e.g., Room 101"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                {...register("roomNumber")}
              />
              {errors.roomNumber && (
                <p className="text-red-500">{errors.roomNumber.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="classTeacher_id" className="text-sm font-medium">
                Class Teacher
              </label>
              <select
                id="classTeacher_id"
                className="w-full h-9 rounded-md shadow-sm px-3 py-2 text-sm
                 focus: ring-indigo-400 "
                {...register("class_teacher")}
              >
                <option value="">Select Teacher</option>
                <option value="teacher_4dcc4fe147e9">Emily Davis</option>
                <option value="teacher_661fedc97ee7">Michael Brown</option>
                <option value="teacher_32562c9fd9fa">Sarah Johnson</option>
              </select>
              {errors.class_teacher && (
                <p className="text-red-500">{errors.class_teacher.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-3 pt-4">
            <button
              type="button"
              className="h-9 px-4 rounded-md cursor-pointer  text-sm font-medium shadow-sm
              hover:text-accent-foreground"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className=" bg-[#4F46E5] text-white hover:bg-[#4338CA] h-10 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 cursor-pointer"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddClass