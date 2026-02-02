export default function Skills() {
  return (
    <main className="relative min-h-screen bg-white px-6 py-24 overflow-hidden">

      {/* Soft Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 heading-animate text-center">
          Skills & Expertise
        </h1>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Backend Engineering */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Backend Engineering</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• PHP, Laravel</li>
              <li>• Django, Python</li>
              <li>• Java, Spring Boot</li>
              <li>• REST API Design</li>
              <li>• MSSQL, MySQL</li>
            </ul>
          </div>

          {/* Frontend Development */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Next.js</li>
              <li>• React</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          {/* DevOps & Deployment */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DevOps & Deployment</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• IIS</li>
              <li>• Nginx</li>
              <li>• Git & Version Control</li>
              <li>• CI/CD Fundamentals</li>
            </ul>
          </div>

          {/* Specialized Expertise */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialized Expertise</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• ExcelJS Automation</li>
              <li>• Operational Dashboards</li>
              <li>• Productivity Tracking Systems</li>
              <li>• System Architecture</li>
              <li>• Data Analysis & Reporting</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
