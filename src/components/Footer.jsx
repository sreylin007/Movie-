import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mx-4 mb-4 mt-20 overflow-hidden rounded-3xl glass p-8 md:p-12">
      
      {/* Animated Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-pink-600/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30 animate-float"
            style={{
              left: `${(i + 1) * 15}%`,
              top: `${(i * 17) % 80 + 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4 animate-fade-up">
            <div className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                <svg className="relative w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                MovieHub
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ultimate destination for movie lovers. Discover, explore, and manage your favorite films in one beautiful place.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="group relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="group relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="group relative w-10 h-10 rounded-full glass flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-up animation-delay-200">
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home", icon: "🏠" },
                { to: "/movies", label: "All Movies", icon: "🎬" },
                { to: "/genres", label: "Browse Genres", icon: "🎭" },
                { to: "/about", label: "About Us", icon: "✨" },
                { to: "/admin", label: "Admin Dashboard", icon: "🔐", accent: "pink" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className={`group flex items-center gap-2 text-gray-400 hover:text-${link.accent || "purple"}-400 transition-all duration-300 hover:translate-x-1`}
                  >
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      {link.icon}
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Genres */}
          <div className="animate-fade-up animation-delay-400">
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              Top Genres
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Action", emoji: "💥" },
                { label: "Sci-Fi", emoji: "🚀" },
                { label: "Drama", emoji: "🎭" },
                { label: "Horror", emoji: "👻" },
                { label: "Comedy", emoji: "😂" },
              ].map((genre, i) => (
                <li key={i}>
                  <Link
                    to="/movies"
                    className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                      {genre.emoji}
                    </span>
                    <span className="relative">
                      {genre.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="animate-fade-up animation-delay-600">
            <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest movie releases and news directly to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none text-white text-sm placeholder-gray-500 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <button className="group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-2">
                  Subscribe
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative h-px my-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-slide-x" />
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            © 2026 <span className="gradient-text font-semibold">MovieHub</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            {["Privacy Policy", "Terms of Service", "Contact"].map((label, i) => (
              <a
                key={i}
                href="#"
                className="group relative hover:text-white transition-colors duration-300"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes slide-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animate-fade-up { animation: fade-up 0.8s ease-out both; }
        .animate-float { animation: float 5s infinite ease-in-out; }
        .animate-slide-x { animation: slide-x 3s infinite linear; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%; 
          animation: gradient-x 3s ease infinite; 
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </footer>
  );
}