"use client";

import { useRef, useState, useEffect } from "react";


export default function Home() {
  const imgRef = useRef(null);

  const [typedCode, setTypedCode] = useState("");

  const codeLines = [
    "def process_order(order):",
    "    if not order.is_valid():",
    "        raise Exception(\"Invalid order\")",
    "",
    "    save_to_db(order)",
    "    trigger_workflow(order)",
    "    return {\"status\": \"processed\"}"
  ];

  useEffect(() => {
    let line = 0;
    let char = 0;

    const typeChar = () => {
      if (line >= codeLines.length) return;

      const currentLine = codeLines[line];

      if (char < currentLine.length) {
        setTypedCode(prev => prev + currentLine[char]);
        char++;
        setTimeout(typeChar, 75); // smoother typing speed
      } else {
        setTypedCode(prev => prev + "\n");
        line++;
        char = 0;
        setTimeout(typeChar, 180); // pause before next line
      }
    };

    typeChar();
  }, []);



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
        <div className="fade-in">

          {/* Intro Line */}
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Backend Engineering • Architecture • Automation
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Enterprise Backend Engineer & System Architect
          </h1>

          {/* Value Statement */}
          <p className="mt-6 text-lg text-gray-700 leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            I design scalable backend systems, automate workflows, and build reliable engineering foundations
            that help teams move faster with confidence. My work blends architecture, operations, and
            productivity into one cohesive engineering workflow.
          </p>







          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Django */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-green-400 to-emerald-600
              shadow-[0_0_12px_rgba(16,185,129,0.7)]
              hover:shadow-[0_0_20px_rgba(16,185,129,1)]
              hover:scale-110 transition-all duration-300">
              🐍 Django
            </span>

            {/* Java / Spring */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-orange-400 to-red-600
              shadow-[0_0_12px_rgba(249,115,22,0.7)]
              hover:shadow-[0_0_20px_rgba(249,115,22,1)]
              hover:scale-110 transition-all duration-300">
              ☕ Java / Spring
            </span>

            {/* Next.js */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-gray-700 to-black
              shadow-[0_0_12px_rgba(0,0,0,0.7)]
              hover:shadow-[0_0_20px_rgba(0,0,0,1)]
              hover:scale-110 transition-all duration-300">
              ⚡ Next.js
            </span>

            {/* MySQL */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-blue-400 to-blue-700
              shadow-[0_0_12px_rgba(59,130,246,0.7)]
              hover:shadow-[0_0_20px_rgba(59,130,246,1)]
              hover:scale-110 transition-all duration-300">
              🐬 MySQL
            </span>

            {/* Redis */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-red-500 to-red-700
              shadow-[0_0_12px_rgba(239,68,68,0.7)]
              hover:shadow-[0_0_20px_rgba(239,68,68,1)]
              hover:scale-110 transition-all duration-300">
              🔥 Redis
            </span>

            {/* Docker */}
            <span className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-sky-400 to-sky-700
              shadow-[0_0_12px_rgba(56,189,248,0.7)]
              hover:shadow-[0_0_20px_rgba(56,189,248,1)]
              hover:scale-110 transition-all duration-300">
              🐳 Docker
            </span>

          </div>




          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-700 hover:scale-105 transition shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-gray-900 text-gray-900 font-medium hover:bg-gray-100 hover:scale-105 transition shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: 3D Tilt Image */}
        <div
          className="tilt-container relative flex justify-center fade-in pb-70"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imgRef}
            src="/profile.jpg"
            alt="Profile"
            className="tilt w-64 h-64 rounded-full object-cover shadow-2xl border border-gray-200 ring-4 ring-purple-200"
          />

          {/* Mini Code Snippet Under Image */}
          <div className="absolute bottom-0 w-100 bg-[#1e1e1e] text-gray-100 rounded-xl shadow-2xl border border-gray-700 h-65 overflow-hidden">

            {/* Editor Header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] border-b border-gray-700">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="ml-3 text-xs text-gray-300">backend.py</p>
            </div>

            {/* Code Area */}
            <div className="p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap">
                {typedCode}
                <span className="cursor"></span>
              </pre>


            </div>
            </div>
          </div>
      </div>
    </main>
  );
}
