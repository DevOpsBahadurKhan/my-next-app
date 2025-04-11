"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setName(data.name);
      setEmail(data.email);
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, email }),
    });

    router.push("/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 w-full mb-4" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-4" />
      <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2">
        Update
      </button>
    </div>
  );
}
