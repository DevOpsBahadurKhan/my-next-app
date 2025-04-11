"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (!confirm) return;

    await fetch("/api/users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    fetchUsers();
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/edit-user/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      <table className="w-full border">
        <thead>
          <tr className="border">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                <button onClick={() => handleEdit(user.id)} className="bg-blue-500 text-white px-2 py-1 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
