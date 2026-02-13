import React from "react";

const HeroSection = () => {
  return (
    <section  className
="py-20 px-6 bg-[#FEF3C7]">
      <div className
="max-w-7xl mx-auto">
        <div className
="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className
="inline-flex items-center gap-2 bg-white text-[#DC2626] px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className
="lucide lucide-circle-check-big"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Trusted by 500+ Schools
            </div>
            <h1 className
="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              Complete School Management Software for
              <span className
="text-[#DC2626]"> Modern Schools</span>
            </h1>
            <p className
="text-xl text-[#0F172A]/80 mb-8 leading-relaxed">
              Streamline attendance, fees, exams, timetables, and parent
              communication with our comprehensive platform designed for Indian
              and International schools.
            </p>
            <div className
="flex flex-wrap gap-4">
              <button className
="bg-[#DC2626] text-white hover:bg-[#B91C1C] px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book a Free Demo
              </button>
              <button className
="bg-white text-[#DC2626] border-2 border-[#DC2626] hover:bg-[#DC2626] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md">
                Request Pricing
              </button>
            </div>
            <div className
="mt-8 flex items-center gap-6 text-sm text-[#0F172A]/70">
              <div className
="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className
="lucide lucide-circle-check-big text-[#0F172A]"
                  aria-hidden="true"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>Free Setup &amp; Training</span>
              </div>
              <div className
="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className
="lucide lucide-circle-check-big text-[#0F172A]"
                  aria-hidden="true"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className
="relative">
            <div className
="absolute -inset-4 bg-white rounded-2xl blur opacity-30"></div>
            <img
              alt="School building"
              className
="relative rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
