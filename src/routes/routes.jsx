import React from 'react'
import LandingPage from '../Pages/LandingPage';
import Login from '../modules/Login';
import DashboardLayout from '../layouts/DashboardLayout';
import StudentDashboard from '../modules/students/Pages/StudentDashboard';
import StudentManagement from '../modules/students/Pages/StudentManagement';

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login/:role", element: <Login /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/student", element: <StudentDashboard /> },
      { path: "/dashboard/studentmanagement", element: <StudentManagement /> },
    ],
  },
];

export default routes