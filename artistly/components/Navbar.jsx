"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeContext"; // ✅ imported

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // ✅ use theme state

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Onboard", href: "/onboard" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-xl font-bold ${
            isDark ? "text-blue-300" : "text-blue-700"
          }`}
        >
          <Link href="/">🎤 Artistly</Link>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? isDark
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDark
                    ? "hover:text-blue-300"
                    : "hover:text-blue-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pb-4 pt-2 shadow-md ${
            isDark ? "bg-zinc-900 text-gray-100" : "bg-white text-gray-800"
          }`}
        >
          <ul className="space-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    pathname === link.href
                      ? isDark
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDark
                      ? "hover:text-blue-300"
                      : "hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
