export default function About() {
  return (
    <main className="relative min-h-screen bg-white px-6 py-24 flex justify-center overflow-hidden">

      {/* Soft Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-2xl object-cover shadow-xl border"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 heading-animate">
            About Me
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m an Enterprise Backend Software Engineer, System Architect, and Productivity‑focused Analyst with a
            disciplined approach to building systems that are clean, maintainable, and aligned with real operational needs.
            My work sits at the intersection of backend engineering, process optimization, and data‑driven decision‑making.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’ve designed fullstack applications, automated complex ExcelJS reporting pipelines, built productivity
            tracking systems, and architected backend logic that scales reliably under real‑world pressure. I believe in
            writing code that future developers can trust, aligning backend logic with UI and business workflows, and
            improving processes instead of patching symptoms.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            My engineering philosophy is rooted in clarity, structure, and long‑term thinking. I enjoy collaborating with
            teams, communicating clearly, and building solutions that deliver measurable impact. I’m deeply interested in
            operational efficiency, productivity analysis, and creating tools that help teams work smarter.
          </p>
        </div>

      </div>
    </main>
  );
}
