import React from 'react'

const Contact = () => {
  return (
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-[#FEF3C7] via-white to-[#FEE2E2]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-[#DC2626] px-4 py-2 rounded-full font-semibold text-sm mb-4 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-square"
                aria-hidden="true"
              >
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              </svg>
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Ready to Transform Your School?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Contact us today for a free demo and see how we can help
              streamline your school operations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FCD34D] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokewidth="2"
                      strokeLinejoin-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-graduation-cap text-[#DC2626]"
                      aria-hidden="true"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">School Name:</p>
                    <p className="text-[#64748B]">
                      AJM International Institution
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FCD34D] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-message-square text-[#DC2626]"
                      aria-hidden="true"
                    >
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Email:</p>
                    <p className="text-[#64748B]">ajminstitution@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FCD34D] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-users text-[#DC2626]"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Phone:</p>
                    <p className="text-[#64748B]">+91 9884620202</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FCD34D] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar text-[#DC2626]"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Address:</p>
                    <p className="text-[#64748B]">
                      24, Mannady St, opposite to post office, Chennai - 600001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Name
                  </label>
                  <input
                    required=""
                    className="w-full h-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#FCD34D] transition-colors"
                    placeholder="Your full name"
                    type="text"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email
                  </label>
                  <input
                    required=""
                    className="w-full h-12 px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#FCD34D] transition-colors"
                    placeholder="your.email@example.com"
                    type="email"
                    value=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Message
                  </label>
                  <textarea
                    required=""
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#FCD34D] resize-none transition-colors"
                    placeholder="Tell us about your school and requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C] h-12 px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact