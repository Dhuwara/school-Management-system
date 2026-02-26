import React from 'react'
import LandingPage from '../Pages/LandingPage';
import Login from '../Login';
import DashboardLayout from '../layouts/DashboardLayout';

import StudentManagement from '../modules/students/Pages/StudentManagement';
import TeacherManagement from '../modules/teachers/Pages/TeacherManagement';
import Settings from '../modules/settings/Pages/SettingsManagement';
import Classes from '../modules/settings/components/Classes';
import ProtectedRoute from './ProtectedRoute';

import AdminDashboard from '../modules/admin/AdminDashboard';
const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },

  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "admin",
            element: <ProtectedRoute role="admin" />,
            children: [
              { index: true, element: <AdminDashboard /> },
              { path: "students", element: <StudentManagement /> },
              { path: "teachers", element: <TeacherManagement /> },
              { path: "classes", element: <Classes /> },
              { path: "settings", element: <Settings /> },
            ],
          },

          // {
          //   path: "staff",
          //   element: <ProtectedRoute role="staff" />,
          //   children: [{ index: true, element: <StaffDashboard /> }],
          // },

          // {
          //   path: "student",
          //   element: <ProtectedRoute role="student" />,
          //   children: [{ index: true, element: <StudentHome /> }],
          // },

          // {
          //   path: "parent",
          //   element: <ProtectedRoute role="parent" />,
          //   children: [{ index: true, element: <ParentDashboard /> }],
          // },
        ],
      },
    ],
  },
];


export default routes