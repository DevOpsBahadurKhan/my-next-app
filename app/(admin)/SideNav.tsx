// app/components/admin/SideNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/dashboard/users" },
  { name: "Appointments", path: "/dashboard/appointments" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded transition ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
