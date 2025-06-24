"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ArtistOnboardForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-10 bg-white dark:bg-zinc-800 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
          🎉 Application submitted successfully!
        </h2>
        <Link
          href="/"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
        >
          Go to Homepage
        </Link>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-xl w-full max-w-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter artist name"
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                >
                  <option value="">Select</option>
                  <option>Singer</option>
                  <option>Dancer</option>
                  <option>DJ</option>
                  <option>Speaker</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price (INR)</label>
                <input
                  name="price"
                  type="number"
                  required
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Expected fee"
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  required
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Short bio or about the artist..."
                  rows={4}
                  className="w-full border px-4 py-2 rounded text-sm bg-white dark:bg-zinc-700 dark:text-white"
                />
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between pt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 text-sm border rounded bg-gray-100 dark:bg-zinc-600 text-gray-800 dark:text-white"
          >
            ⬅ Previous
          </button>
        ) : <div />}

        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto px-6 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Next ➡
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-6 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded"
          >
            ✅ Submit Application
          </button>
        )}
      </div>
    </form>
  );
}