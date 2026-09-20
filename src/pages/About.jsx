import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-400 pulse-dot"></span>
          <span className="text-sm text-purple-400 font-semibold tracking-wide">WHO WE ARE</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          About <span className="gradient-text">MovieHub</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We are redefining the way you discover, track, and enjoy cinema. 
          Built for movie lovers, by movie lovers.
        </p>
      </div>

      {/* ===== MISSION & VISION CARDS ===== */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Mission */}
        <div className="glass rounded-3xl p-8 card-hover border border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To provide a beautiful, modern, and intuitive platform where cinema enthusiasts can effortlessly discover their next favorite film. We believe that finding a great movie should be as enjoyable as watching it.
          </p>
        </div>

        {/* Vision */}
        <div className="glass rounded-3xl p-8 card-hover border border-white/5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            To become the world's most trusted and visually stunning movie database, empowering users with smart recommendations, detailed insights, and a seamless browsing experience across all devices.
          </p>
        </div>
      </div>

      {/* ===== CORE FEATURES ===== */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">MovieHub?</span>
          </h2>
          <p className="text-gray-400">Packed with features designed for the ultimate movie experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="glass rounded-2xl p-6 card-hover group border border-transparent hover:border-purple-500/30">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Vast Library</h3>
            <p className="text-sm text-gray-400">Explore thousands of movies spanning across all genres and eras.</p>
          </div>

          {/* Feature 2 */}
          <div className="glass rounded-2xl p-6 card-hover group border border-transparent hover:border-pink-500/30">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Search</h3>
            <p className="text-sm text-gray-400">Instantly find movies by title, genre, director, or cast members.</p>
          </div>

          {/* Feature 3 */}
          <div className="glass rounded-2xl p-6 card-hover group border border-transparent hover:border-cyan-500/30">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Detailed Insights</h3>
            <p className="text-sm text-gray-400">Access comprehensive ratings, reviews, and behind-the-scenes info.</p>
          </div>

          {/* Feature 4 */}
          <div className="glass rounded-2xl p-6 card-hover group border border-transparent hover:border-green-500/30">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Filtering</h3>
            <p className="text-sm text-gray-400">Easily filter and sort content to match your exact mood and preferences.</p>
          </div>
        </div>
      </div>

      {/* ===== TECH STACK ===== */}
      <div className="glass rounded-3xl p-8 md:p-12 mb-16 border border-white/5">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Powered by Modern <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Built with performance, scalability, and beautiful design in mind.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["React JS", "Vite", "Tailwind CSS", "React Router", "JSON", "localStorage"].map((tech) => (
            <span 
              key={tech} 
              className="glass px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ===== CALL TO ACTION (CTA) ===== */}
      <div className="text-center">
        <div className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden border border-purple-500/20">
          {/* Background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
            Ready to start your <span className="gradient-text">cinema journey?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
            Explore our vast collection of movies and find your next favorite film today.
          </p>
          <Link 
            to="/movies" 
            className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-bold btn-glow text-lg hover:scale-105 transition-transform"
          >
            Browse Movies Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}