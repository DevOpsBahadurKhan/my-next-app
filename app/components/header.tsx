"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image src="/logo2.png" alt="Logo" width={70} height={50} priority />
          <span className="text-xl font-bold text-blue-700">Bone & Joint Hospital</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition duration-200">About</Link>
          <Link href="/services" className="hover:text-blue-600 transition duration-200">Services</Link>
          <Link href="/contact" className="hover:text-blue-600 transition duration-200">Contact</Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition duration-200"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-blue-600">About</Link>
            <Link href="/services" onClick={toggleMenu} className="hover:text-blue-600">Services</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-600">Contact</Link>
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
