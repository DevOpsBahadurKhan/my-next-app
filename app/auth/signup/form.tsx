"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl mb-4">Signup</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border px-2 py-1" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-2 py-1" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-2 py-1" />
        <button type="submit" className="bg-blue-600 text-white py-2">Signup</button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 underline">
            Signup here
          </Link>
        </p>
      </form>

    </div>
  );
}