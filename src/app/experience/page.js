export default function Experience() {
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
          Experience
        </h1>

        {/* Timeline */}
        <div className="space-y-12">

          {/* Gardinia Contracting LLC */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900">
              Gardinia Contracting LLC — Fullstack Engineer & Productivity Analyst
            </h2>
            <p className="text-gray-600 text-lg mt-1">Dubai, UAE</p>

            <ul className="mt-6 space-y-3 text-gray-700 text-lg">
              <li>• Built and maintained fullstack applications using PHP, Next.js, and Django</li>
              <li>• Designed operational dashboards for real‑time decision‑making</li>
              <li>• Developed productivity tracking systems for multi‑site engineering teams</li>
              <li>• Created ExcelJS export pipelines with advanced formatting and protection</li>
              <li>• Debugged production React/Next.js apps using DevTools and React DevTools</li>
              <li>• Ensured backend logic aligned with UI and operational workflows</li>
            </ul>
          </div>

          {/* SAI Digital Pvt. Ltd. */}
          <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900">
              SAI Digital Pvt. Ltd. — Backend Engineer
            </h2>
            <p className="text-gray-600 text-lg mt-1">India</p>

            <ul className="mt-6 space-y-3 text-gray-700 text-lg">
              <li>• Developed enterprise‑level e‑commerce modules using Java, Spring Boot, and SAP Hybris</li>
              <li>• Designed and optimized REST APIs for high‑traffic systems</li>
              <li>• Worked extensively with MSSQL databases</li>
              <li>• Integrated enterprise workflows and backend services</li>
              <li>• Followed disciplined Git workflows and deployment practices</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
