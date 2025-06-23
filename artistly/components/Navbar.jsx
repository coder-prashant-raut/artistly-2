"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Onboard", href: "/onboard" }
  ];

  return (
    <nav className="w-full bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">
          <Link href="/">🎤 Artistly</Link>
        </h1>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 🌗 Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

