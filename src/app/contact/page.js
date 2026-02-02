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
          <div className="grid md:grid-cols-2 gap-10">

            {/* Left: Contact Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Email:</span> jalendrafordubai@gmail.com
              </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Location:</span> Dubai, UAE
              </p>

              <p className="text-gray-700 text-lg">
                <span className="font-semibold">LinkedIn:</span> www.linkedin.com/in/jalendra-kumar-abaab2371
              </p>


            </div>

            {/* Right: Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-800 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}
