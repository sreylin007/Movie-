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

      {/* ===== OUR STORY SECTION ===== */}
      <div className="mb-20">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-500/20">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-purple-300 font-semibold text-sm">OUR JOURNEY</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                From Passion to <span className="gradient-text">Platform</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  MovieHub was born from a simple yet powerful idea: <span className="text-purple-400 font-semibold">movie discovery should be as exciting as watching the films themselves.</span>
                </p>
                <p>
                  What started as a personal project to organize our favorite films quickly evolved into a comprehensive platform designed to help cinema enthusiasts worldwide find their next great watch.
                </p>
                <p>
                  We spent countless hours curating content, designing intuitive interfaces, and implementing smart features—all with one goal in mind: <span className="text-pink-400 font-semibold">making your movie experience unforgettable.</span>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold gradient-text">2026</div>
                  <div className="text-xs text-gray-400 mt-1">Founded</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold gradient-text">10K+</div>
                  <div className="text-xs text-gray-400 mt-1">Movies</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold gradient-text">2M+</div>
                  <div className="text-xs text-gray-400 mt-1">Users</div>
                </div>
              </div>
            </div>

            {/* Team Photo Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                {/* Replace this with your actual image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                 
                  </div>
                </div>
                {/* If you have the actual image, use this instead: */}
                {/* <img src="/path-to-your-team-photo.jpg" alt="MovieHub Team" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-purple-500/30 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎬</span>
                  <span className="font-bold text-sm">Made with ❤️</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-pink-500/30 shadow-xl animate-float animation-delay-1000">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="font-bold text-sm">For Movie Lovers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MEET THE CREATORS ===== */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet The <span className="gradient-text">Creators</span>
          </h2>
          <p className="text-gray-400">The passionate minds behind MovieHub</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Creator 1 */}
          <div className="glass rounded-3xl p-8 border border-white/10 card-hover group text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center border-4 border-[#05050a]">
                <span className="text-4xl font-black text-white">A</span>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-4 border-[#05050a] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Creator & Developer</h3>
            <p className="text-purple-400 text-sm mb-4">Full Stack Developer</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating beautiful, user-friendly experiences. Loves cinema, coding, and bringing ideas to life.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Creator 2 */}
          <div className="glass rounded-3xl p-8 border border-white/10 card-hover group text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center border-4 border-[#05050a]">
                <span className="text-4xl font-black text-white">B</span>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-4 border-[#05050a] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Co-Founder & Designer</h3>
            <p className="text-cyan-400 text-sm mb-4">UI/UX Designer</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to crafting intuitive and beautiful interfaces. Believes great design makes great products.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
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

      {/* Inline styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-float { animation: float 4s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 4s infinite ease-in-out; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}