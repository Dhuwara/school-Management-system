import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";


const subjectsSchema = z.object({
  subjectName: z.string().min(1, "subject Name is required"),
  subjectCode: z.string().min(1, "Code is required"),
  description: z.string().min(1, "Description must be at least 1"),
});
const AddSubjects = ({ onOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subjectsSchema),
    defaultValues: {
      subjectName: "",
      subjectCode: "",
      description: ""
    },
  });
  const onSubmit = (data) => {
    console.log(data,"datatrta")
    axios.post("http://localhost:5000/api/subject/addsubject", data);
    reset();
    clearErrors();
    onClose();
  };
  return (
    <dialog className={`modal ${onOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <div className="space-y-2 py-3">
              <label htmlFor="subjectName" className="text-sm font-medium">
                Subject Name *
              </label>
              <input
                id="subjectName"
                type="text"
                placeholder="e.g., maths"
                className="flex h-9 w-full rounded-md   bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
               disabled:cursor-not-allowed disabled:opacity-50"
                {...register("subjectName")}
              />
              {errors.subjectName && (
                <p className="text-red-500">{errors.subjectName.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label htmlFor="subjectCode " className="text-sm font-medium capitalize">
                subject Code *
              </label>
              <input
                id="subjectCode"
                type="text"
                placeholder="M001"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
               disabled:cursor-not-allowed disabled:opacity-50"
                {...register("subjectCode")}
              />
              {errors.subjectCode && (
                <p className="text-red-500">{errors.subjectCode.message}</p>
              )}
            </div>

            <div className="space-y-2 py-3">
              <label
                htmlFor="description"
                className="text-sm font-medium capitalize"
              >
                description
              </label>
              <input
                id="room"
                type="text"
                placeholder="Brief description"
                className="flex h-9 w-full rounded-md       bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
               placeholder:text-muted-foreground
               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
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

export default AddSubjects;
