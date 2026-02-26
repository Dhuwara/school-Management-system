import React, { useEffect, useState } from 'react'
import Addclass from './AddClass.jsx';
import AddSubjects from './AddSubjects.jsx';
import axios from 'axios';
const Classes = () => {

  const [isOpen,setIsOpen] = useState(false)
  const [isSubjectOpen, setIsSubjectOpen] = useState(false)
  const [tableData, setTableData] = useState(null)
  const [activeTab, setActiveTab] = useState("classes");

  const handleDialogModal = () => {
    switch (activeTab) {
      case "classes":
        setIsOpen(true);
        break;

      case "subjects":
        setIsSubjectOpen(true);
        break;

      case "timetable":
        // setIsTimetableOpen(true)
        break;

      default:
        console.warn("Unknown tab selected");
    }
  };

  const closeModal = ()=>{
    switch (activeTab) {
      case "classes":
            setIsOpen(false)

        break;

      case "subjects":
        setIsSubjectOpen(false);
        break;

      case "timetable":
        // setIsTimetableOpen(true)
        break;

      default:
        console.warn("Unknown tab selected");
    }
  }

  useEffect(()=>{
    const fetchClasses = ()=>{
      axios
        .get("http://localhost:5000/api/class/configureClass")
        .then((res) => {
          console.log(res.data)
          setTableData(res.data);
        });
    }

    fetchClasses()
  },[])
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0F172A]">
                Academic Management
              </h1>
              <p className="text-[#64748B] mt-1">
                class, Subjects, Timetable & Academic Year
              </p>
            </div>
            <button
              className="flex items-center gap-2 bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
              onClick={handleDialogModal}
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

              {activeTab === "classes" && "Add Class"}
              {activeTab === "subjects" && "Add Subject"}
              {activeTab === "timetable" && "Add Timetable"}
            </button>
          </div>

          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab capitalize"
              aria-label=" classes"
              checked={activeTab === "classes"}
              onChange={() => setActiveTab("classes")}
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#FEF3C7] to-[#FEE2E2]">
                    <tr>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        S.No
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        className
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        SECTION
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        ACADEMIC TEACHER
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        STUDENTS
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        ROOM
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold uppercase text-black">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((table, index) => {
                      return (
                        <tr key={table._id || index}>
                          <td className="text-center px-6 py-4 ">
                            {index + 1}
                          </td>
                          <td className="text-center"> {table.className}</td>
                          <td className="text-center">{table.section}</td>
                          <td className="text-center">{table.class_teacher}</td>
                          <td></td>
                          <td className="text-center">{table.roomNumber}</td>
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
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Subjects"
              checked={activeTab === "subjects"}
              onChange={() => setActiveTab("subjects")}
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              Tab content 2
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Tab 3"
              checked={activeTab === "timetable"}
              onChange={() => setActiveTab("timetable")}
            />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
      <Addclass onOpen={isOpen} onClose={closeModal} />
      <AddSubjects onOpen={isSubjectOpen} onClose={closeModal} />
    </main>
  );
}

export default Classes;