import {
  HomeIcon,
  UsersIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BookOpenIcon,
  TruckIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";

export const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard/admin",
    roles: ["admin"],
    icon: HomeIcon,
  },
  {
    label: "Students",
    path: "/dashboard/admin/students",
    roles: ["admin"],
    icon: UsersIcon,
  },
  {
    label: "Teachers",
    path: "/dashboard/admin/teachers",
    roles: ["admin"],
    icon: AcademicCapIcon,
  },
  {
    label: "Classes",
    path: "/dashboard/admin/classes",
    roles: ["admin"],
    icon: BookOpenIcon,
  },
  {
    label: "Attendance",
    path: "/dashboard/admin/attendance",
    roles: ["admin"],
    icon: CalendarDaysIcon,
  },
  {
    label: "Exams",
    path: "/dashboard/admin/exams",
    roles: ["admin"],
    icon: DocumentTextIcon,
  },
  {
    label: "Fees",
    path: "/dashboard/admin/fees",
    roles: ["admin"],
    icon: CreditCardIcon,
  },
  {
    label: "Library",
    path: "/dashboard/admin/library",
    roles: ["admin"],
    icon: BuildingLibraryIcon,
  },
  {
    label: "Transport",
    path: "/dashboard/admin/transport",
    roles: ["admin"],
    icon: TruckIcon,
  },
  {
    label: "Hostels",
    path: "/dashboard/admin/hostels",
    roles: ["admin"],
    icon: BuildingOffice2Icon,
  },
  {
    label: "Communication",
    path: "/dashboard/admin/communication",
    roles: ["admin"],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    label: "Settings",
    path: "/dashboard/admin/settings",
    roles: ["admin"],
    icon: Cog6ToothIcon,
  },
];
