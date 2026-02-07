export default function Contact() {
  return (
    <main className="relative min-h-screen bg-white px-6 py-24 overflow-hidden">

      {/* Soft Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 heading-animate text-center">
          Contact Me
        </h1>

        {/* Contact Card */}
        <div className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-10 border">

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Whether you want to discuss a project, collaborate, or explore opportunities,
            feel free to reach out. I’m always open to meaningful conversations.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3  ">

          <div className="space-y-8"></div>

            {/* Left: Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get in Touch</h2>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Email:</span> jalendrafordubai@gmail.com
              </p>

               <p className="text-gray-700 text-lg">
                 <span className="font-semibold">Phone:</span> +971529705852
               </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Location:</span> Dubai, UAE
              </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">LinkedIn:</span> www.linkedin.com/in/jalendra-kumar-abaab2371
              </p>


            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
