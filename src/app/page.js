"use client";

import { useRef } from "react";

export default function Home() {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / 20) * -1;
    const rotateY = x / 20;

    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-6">

      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Enterprise Backend Engineer & System Architect
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Designing maintainable systems, disciplined processes, and data‑driven workflows across PHP, Django,
            Java, Next.js, and enterprise environments. I build backend systems that stay reliable under real‑world
            pressure and align engineering, operations, and productivity into one cohesive workflow.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="/projects"
              className="px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-md border border-gray-900 text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: 3D Tilt Image */}
        <div
          className="tilt-container flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src="/profile.jpg"
            alt="Profile"
            className="tilt w-64 h-64 rounded-full object-cover shadow-xl border"
          />
        </div>

      </div>
    </main>
  );
}
