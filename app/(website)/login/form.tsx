"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      router.push("/dashboard");  // redirect after login
    }
  };

  return (
    <div className="flex  bg-gray-50 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full mx-auto flex flex-col gap-4 p-6 sm:my-40 bg-white shadow-md rounded"
      >
        {error && <p className="text-red-500">{error}</p>}
  
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 rounded"
        />
  
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 rounded"
        />
  
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Login
        </button>
  
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 underline">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  );
  
  
}
