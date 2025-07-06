export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600">Frontend Developer & UI Enthusiast</p>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Passionate developer with 5 years of experience in building beautiful
          and functional web applications. Specializing in modern frontend
          technologies and user-centric design.
        </p>
      </section>

      {/* Education Section */}
      <section className="py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Computer Science Degree</h3>
            <p className="text-gray-600">University of Technology • 2018-2022</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-lg h-32"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
