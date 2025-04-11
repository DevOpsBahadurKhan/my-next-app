"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear Token / LocalStorage
    localStorage.removeItem("token");

    // Redirect to Login
    router.push("/auth/login");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </header>
  );
}
