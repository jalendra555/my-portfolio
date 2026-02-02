"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap">

        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          JALENDRA KUMAR
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-gray-500 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-500 transition">About</Link>
          <Link href="/skills" className="hover:text-gray-500 transition">Skills</Link>
          <Link href="/experience" className="hover:text-gray-500 transition">Experience</Link>
          <Link href="/projects" className="hover:text-gray-500 transition">Projects</Link>
          <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-lg px-6 py-4 space-y-4 text-gray-800 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
