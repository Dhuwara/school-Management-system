import  { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { MultiSelect } from "@mantine/core";

const classSchema = z.object({
  standard: z.string().min(1, "standard is required"),
  section: z.string().min(1, "Section is required"),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1"),
  roomNumber: z.string().min(1, "Room Number is required"),
  classTeacher: z.object({
    _id: z.string().min(1),
    firstName: z.string().min(1),
  }),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
});

const AddClass = ({ onClose, classData, setTableData }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(classSchema),
    defaultValues: {
      standard: "",
      section: "",
      capacity: "",
      roomNumber: "",
      classTeacher: "",
      subjects: [],
    },
  });

  const [subjectOptions, setSubjectOptions] = useState([]);
  const [teacherOptions, setTeacherOptions] = useState([]);
  const [classConfig, setClassConfig] = useState(null);

useEffect(() => {
  if (classData) {
    reset({
      ...classData,
      subjects: classData.subjects?.map((s) =>
        typeof s === "object" ? s._id : s,
      ),
    });
  } else {
    reset();
  }
}, [classData, reset]);
useEffect(() => {
  const fetchSubjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/subject/getallsubjects",
      );
      const formatted = res.data.map((sub) => ({
        value: sub.subjectCode,
        label: sub.subjectName,
      }));
      setSubjectOptions(formatted);
    } catch (err) {
      console.log(err);
    }
  };

  fetchSubjects();
}, []);
useEffect(() => {
  const fetchTeachers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/staff/getallstaffs",
      );

      const formatted = res.data.map((teacher) => ({
        value: teacher._id,
        label: `${teacher.firstName} ${teacher.lastName || ""}`.trim(),
      }));
      setTeacherOptions(formatted);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchClassConfig = async () => {
    try {
      const res = await axios.get("/api/classconfig/getconfig");
      if (res.data) setClassConfig(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchClassConfig()
  fetchTeachers();
}, []);

 const getSectionOptions = () => {
   const baseClasses = ["LKG", "UKG"];
   const sections = [];
   if (classConfig?.standardFormat === "number") {
     for (let i = 1; i <= 12; i++) sections.push(i.toString());
   } else if (classConfig?.standardFormat === "roman") {
     const romans = [
       "I",
       "II",
       "III",
       "IV",
       "V",
       "VI",
       "VII",
       "VIII",
       "IX",
       "X",
       "XI",
       "XII",
     ];
     sections.push(...romans);
   }
   return [...baseClasses, ...sections];
 };

 const isEditMode = Boolean(classData?._id);

 const onSubmit = async (data) => {
   try {
     let res;
     if (isEditMode) {
       res = await axios.put(`/api/class/updateclass/${classData._id}`, data);
       setTableData((prev) =>
         prev.map((item) =>
           item._id === classData._id ? res.data.data : item,
         ),
       );
     } else {
       res = await axios.post("/api/class/addclass", data);
       setTableData((prev) => [...prev, res.data.data]);
     }

     reset();
     clearErrors();
     onClose();
   } catch (err) {
     console.log(err);
   }
 };
  
  
  useEffect(() => {
    if (classData) {
      reset(classData);
    } else {
      reset();
    }
  }, [classData, reset]);
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 py-3">
              <label
                htmlFor="className"
                className="text-sm font-medium capitalize"
              >
                standard *
              </label>
              <select
                id="standard"
                className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm shadow-sm"
                {...register("standard")}
              >
                {getSectionOptions().map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              {errors.standard && (
                <p className="text-red-500">{errors.standard.message}</p>
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
                className="flex h-9 w-full rounded-md  capitalize     bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
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
              <Controller
                name="subjects"
                control={control}
                render={({ field }) => (
                  <MultiSelect
                    label="Subjects *"
                    placeholder="Select subjects"
                    data={subjectOptions}
                    searchable
                    value={field.value}
                    onChange={field.onChange}
                    styles={{ dropdown: { zIndex: 10000 } }}
                  />
                )}
              />
              {errors.subjects && (
                <p className="text-red-500">{errors.subjects.message}</p>
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
              <Controller
                name="classTeacher"
                control={control}
                render={({ field }) => (
                  <select
                    className="w-full h-9 rounded-md shadow-sm px-3 py-2 text-sm"
                    value={field.value?._id || ""}
                    onChange={(e) => {
                      const selected = teacherOptions.find(
                        (t) => t.value === e.target.value,
                      );
                      field.onChange(
                        selected
                          ? { _id: selected.value, firstName: selected.label }
                          : null,
                      );
                    }}
                  >
                    <option value="">Select Teacher</option>
                    {teacherOptions.map((teacher) => (
                      <option key={teacher.value} value={teacher.value}>
                        {teacher.label}
                      </option>
                    ))}
                  </select>
                )}
              />

              {errors.classTeacher && (
                <p className="text-red-500">{errors.classTeacher.message}</p>
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

export default AddClass;
