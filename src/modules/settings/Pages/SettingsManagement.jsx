import React, { useState } from 'react'
import Settings from '../components/Settings'
import IdManagement from '../components/IdManagement.jsx'
import ClassessManagement from '../components/ClassessManagement.jsx'

const SettingsManagement = () => {


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
                classNamees, Subjects, Timetable &amp; Academic Year
              </p>
            </div>
          </div>

          <div>
            <div className="tabs tabs-border">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                aria-label="Employee Id"
                defaultChecked
              />
              <div className="tab-content border-base-300 bg-base-100 p-10">
                <IdManagement />
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                aria-label="Classes"
              />
              <div className="tab-content border-base-300 bg-base-100 p-10">
                <ClassessManagement />
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                aria-label="Tab 3"
              />
              <div className="tab-content border-base-300 bg-base-100 p-10">
                Tab content 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SettingsManagement;