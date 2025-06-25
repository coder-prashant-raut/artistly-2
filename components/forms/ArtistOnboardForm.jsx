"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useTheme } from "@/components/theme/ThemeContext.jsx"; // ✅ your global theme

export default function ArtistOnboardForm() {
  const { theme } = useTheme();
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
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!form.name.trim() || !form.location.trim()) {
          toast.error("Name and location are required");
          return false;
        }
        break;
      case 2:
        if (!form.category.trim() || !form.price.trim()) {
          toast.error("Category and price are required");
          return false;
        }
        break;
      case 3:
        if (!form.description.trim()) {
          toast.error("Description is required");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => Math.max(1, prev - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      toast.success("🎉 Application submitted!");
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-center p-10 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
          ✅ Application Submitted!
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
      className={`space-y-6 p-8 rounded-xl shadow-xl w-full max-w-2xl mx-auto transition-colors duration-300 ${
        theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-gray-900"
      }`}
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
                  ref={inputRef}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter artist name"
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
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
                  value={form.category}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
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
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Expected fee"
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
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
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Short bio or about the artist..."
                  className={`w-full border px-4 py-2 rounded text-sm ${
                    theme === "dark"
                      ? "bg-zinc-700 text-white border-zinc-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
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
            className={`px-4 py-2 text-sm border rounded ${
              theme === "dark"
                ? "bg-zinc-700 text-white border-zinc-600"
                : "bg-gray-100 text-gray-900 border-gray-300"
            }`}
          >
            ⬅ Previous
          </button>
        ) : (
          <div />
        )}

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
