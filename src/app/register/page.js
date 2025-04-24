"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ full_name: "", email: "", password: "", role: "customer" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost/backend/register.php", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      alert("Registered successfully! You can now log in.");
    } else {
      alert("Error registering user.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <select name="role" onChange={handleChange} className="w-full p-2 border rounded mb-2">
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
