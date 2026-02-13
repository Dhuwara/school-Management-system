import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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

            <form className="space-y-4">
              <div>
                <label
                  for="username"
                  className="block text-sm font-medium text-[#0F172A] mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  data-testid="username-input"
                  required
                  type="text"
                  placeholder="Enter username"
                  className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                />
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-[#0F172A] mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  data-testid="password-input"
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-10 px-3 py-2 border border-slate-200 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-[#4F46E5]
                     focus:ring-offset-2 transition-all"
                />
              </div>

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