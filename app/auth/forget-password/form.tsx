"use client";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-2 py-1"
      />
      <button type="submit" className="border px-4 py-1 mt-2">Send Link</button>
      {message && <p>{message}</p>}
    </form>
  );
}
