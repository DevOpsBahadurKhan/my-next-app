"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear Token / LocalStorage
    localStorage.removeItem("token");

    // Redirect to Login
    router.push("/auth/login");
  };

  return (
    <header className="flex justify-between items-center px-4 bg-white text-black shadow-md">
      <div className="flex items-center">
        <Image src="/logo1.png" alt="Logo" width={70} height={40} />
      </div>

      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </nav>

    </header>


  );
}
