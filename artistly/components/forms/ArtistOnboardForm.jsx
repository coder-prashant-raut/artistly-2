"use client";
import { useState } from "react";

export default function ArtistOnboardForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    price: "",
    description: "",
    image: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Artist:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-600 text-center">Application submitted successfully! 🎉</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" required value={form.name} onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select name="category" required value={form.category} onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-sm">
          <option value="">Select</option>
          <option>Singer</option>
          <option>Dancer</option>
          <option>DJ</option>
          <option>Speaker</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Location</label>
        <input name="location" required value={form.location} onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium">Price (INR)</label>
        <input name="price" type="number" required value={form.price} onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input name="image" value={form.image} onChange={handleChange}
          className="w-full border px-3 py-2 rounded text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea name="description" required value={form.description} onChange={handleChange}
          rows={4} className="w-full border px-3 py-2 rounded text-sm" />
      </div>

      <button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
>
  Submit Application
</button>

    </form>
  );
}
