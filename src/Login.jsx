import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import AuthContext from './context/AuthContext';
const Login = () => {
  const { fetchUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { role } = useParams();

  const onSubmit = async (data)=>{  
    try{
      axios
      .post("http://localhost:5000/api/auth/login", data, {
        withCredentials: true,
      })
      const user = await fetchUser()
      if (!user) return;
       console.log(user.role);
      switch (user.role) {
       
        case "student":
          navigate("/dashboard/student");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "teacher":
          navigate("/dashboard/teacher");
          break;
        default:
          navigate("/");
      }
    }catch(err){
      console.log(err)
    }
    
      
  }
  const {register,handleSubmit, formState:{errors},} = useForm()
  const [isEye, setIsEye] = useState(false)
  const handlePassword = () => {
    setIsEye((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-[#4F46E5] items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="flex items-center gap-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap"
              aria-hidden="true"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>

            <h1 className="text-4xl font-bold leading-tight">
              AJM International Institution
            </h1>
          </div>

          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Complete School Management System for Modern Education
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold mb-4">Demo Credentials:</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Admin:</strong> admin / 123
              </p>
              <p>
                <strong>Staff:</strong> staff / 123
              </p>
              <p>
                <strong>Student:</strong> student / 123
              </p>
              <p>
                <strong>Parent:</strong> parent / 123
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-[#0F172A] mb-2">
                Welcome Back
              </h2>
              <p className="text-[#64748B]">
                Enter your credentials to access your portal
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {role === "student" ? (
                <>
                  <div>
                    <label
                      htmlFor="rollnumber"
                      className="block text-sm font-medium text-[#0F172A] mb-2"
                    >
                      Roll Number
                    </label>
                    <input
                      id="rollnumber"
                      type="text"
                      placeholder="Enter rollnumber"
                      className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                      {...register("rollnumber", {
                        required: "rollnumber is required",
                      })}
                    />
                    {errors.rollnumber && (
                      <p className="text-red-400">*rollnumber is required</p>
                    )}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#0F172A] mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type={isEye ? "text" : "password"}
                      className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-400">*password is required</p>
                    )}
                    {isEye ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 absolute bottom-2 right-1 cursor-pointer"
                        onClick={handlePassword}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 absolute bottom-2 right-1 cursor-pointer"
                        onClick={handlePassword}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0F172A] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter email"
                      className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                      {...register("email", {
                        required: "email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400">*email is required</p>
                    )}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#0F172A] mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type={isEye ? "text" : "password"}
                      className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-400">*password is required</p>
                    )}
                    {isEye ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 absolute bottom-2 right-1 cursor-pointer"
                        onClick={handlePassword}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 absolute bottom-2 right-1 cursor-pointer"
                        onClick={handlePassword}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    )}
                  </div>
                </>
              )}
              <button
                type="submit"
                data-testid="auth-submit-button"
                className="w-full h-10 bg-[#4F46E5] text-white rounded-lg font-medium
                   hover:bg-[#4338CA] transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="/"
                className="text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]"
              >
                ← Back to Home
              </a>
            </div>

            <div className="mt-6 p-4 bg-[#F8FAFC] rounded-lg lg:hidden">
              <p className="text-xs font-semibold text-[#64748B] mb-2">
                Demo Credentials:
              </p>
              <div className="space-y-1 text-xs text-[#64748B]">
                <p>Admin: admin / 123</p>
                <p>Staff: staff / 123</p>
                <p>Student: student / 123</p>
                <p>Parent: parent / 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login