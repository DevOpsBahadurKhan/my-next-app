"use client";
import { useState } from "react";

type UserType = {
    name: string;
    email: string;
    password: string;
};

const ButtonClick = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState<UserType[]>([]);


    const handleButtonClick = () => {
        setUsers([...users, { name, email, password }]);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="space-y-4">

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border px-4 py-2 rounded" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-4 py-2 rounded" />

            <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add User
            </button>

            <table className="border w-full mt-4">
                <thead>
                    <tr>
                        <th className="border px-2 py-1">Name</th>
                        <th className="border px-2 py-1">Email</th>
                        <th className="border px-2 py-1">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="border px-2 py-1">{user.name}</td>
                            <td className="border px-2 py-1">{user.email}</td>
                            <td className="border px-2 py-1">{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default ButtonClick;
