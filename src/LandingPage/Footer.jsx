import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
    <img alt="AJMII Logo" className="h-10 w-10 object-contain rounded-lg" src="https://customer-assets.emergentagent.com/job_school-hub-ajm/artifacts/xr5umcwl_logo.jpg"/>
    <span className="text-xl font-bold">AJM International Institution</span>
    </div>
    <p className="text-slate-400 text-center md:text-right">© 2024 AJM International Institution. All rights reserved.
    <br/>This is a demo application showcasing school management features.</p>
    </div>
    </div>
    </footer>
  )
}

export default Footer