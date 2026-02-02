export default function Projects() {
  return (
    <main className="relative min-h-screen bg-white px-6 py-24 overflow-hidden">

      {/* Soft Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 heading-animate text-center">
          Projects
        </h1>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Engineer Progress Tracker */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Engineer Progress Tracker
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A complete productivity and progress monitoring system for engineering teams. Includes custom
              calculation logic, real‑time dashboards, and advanced ExcelJS export with protected cells,
              conditional formatting, and multi‑sheet reporting.
            </p>
            <p className="text-gray-900 font-semibold">Tech Used:</p>
            <p className="text-gray-700">Next.js, JavaScript, HTML, CSS, MSSQL, ExcelJS</p>
          </div>

          {/* Progress Matrix */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Progress Matrix
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A PHP‑based operational tracking system used to evaluate project progress, engineer performance,
              and site‑level productivity. Includes dynamic forms, reporting modules, and MSSQL integration.
            </p>
            <p className="text-gray-900 font-semibold">Tech Used:</p>
            <p className="text-gray-700">PHP, HTML, CSS, JavaScript, MSSQL</p>
          </div>

          {/* ARMS */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ARMS (Asset & Resource Management System)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A centralized system for managing assets, resources, and operational workflows. Includes
              real‑time dashboards, role‑based access, and MSSQL‑driven backend logic.
            </p>
            <p className="text-gray-900 font-semibold">Tech Used:</p>
            <p className="text-gray-700">Next.js, JavaScript, HTML, CSS, MSSQL</p>
          </div>

          {/* Organization Chart */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border hover:shadow-2xl hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Organization Chart System
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A Django‑based system for generating dynamic organizational charts with hierarchical
              relationships, department structures, and role‑based visualization.
            </p>
            <p className="text-gray-900 font-semibold">Tech Used:</p>
            <p className="text-gray-700">Python, Django</p>
          </div>

        </div>
      </div>
    </main>
  );
}
