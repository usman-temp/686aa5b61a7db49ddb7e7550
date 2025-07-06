export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm a Web Developer
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            I create modern web experiences with React, Next.js, and Tailwind CSS.
            Passionate about building responsive, performant, and user-friendly applications.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['window.svg', 'next.svg', 'globe.svg', 'file.svg'].map((icon, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer flex flex-col items-center"
                >
                  <img 
                    src={`/${icon}`} 
                    alt="Skill" 
                    className="h-12 w-12 mb-2 object-contain"
                  />
                  <span className="text-gray-400 text-sm">
                    {icon.replace('.svg', '').toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}