import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moviesData from "../data/movies.json";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unique = [...new Set(moviesData.map((m) => m.genre).filter(Boolean))];
    setGenres(unique);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Professional SVG Icons with rich styling
  const genreInfo = {
    Action: { 
      color: "text-red-400", bg: "bg-red-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    Comedy: { 
      color: "text-yellow-400", bg: "bg-yellow-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    Drama: { 
      color: "text-purple-400", bg: "bg-purple-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    },
    Horror: { 
      color: "text-green-400", bg: "bg-green-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3 6v4h10v-4c1.5-1.5 3-3.5 3-6 0-4.5-3.5-8-8-8z" />
    },
    Romance: { 
      color: "text-pink-400", bg: "bg-pink-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    },
    Animation: { 
      color: "text-blue-400", bg: "bg-blue-500/20", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    },
    "Sci-Fi": { 
      color: "text-cyan-400", bg: "bg-cyan-500/20", 
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
    },
  };

  const defaultInfo = {
    color: "text-gray-400", bg: "bg-gray-500/20",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
  };

  // Find the most popular genre for the spotlight
  const spotlightGenre = genres.reduce((a, b) => 
    moviesData.filter(m => m.genre === a).length > moviesData.filter(m => m.genre === b).length ? a : b
  , genres[0] || "Action");

  const spotlightMovies = moviesData.filter(m => m.genre === spotlightGenre).slice(0, 3);

  return (
    <div className="relative min-h-screen px-4 py-20 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-6 border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            <span className="text-sm text-pink-300 font-bold tracking-widest uppercase">Explore Categories</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Browse by <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Genre</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Dive into curated collections. Whether you crave adrenaline, laughter, or tears, we have the perfect category for your mood.
          </p>
        </div>

        {/* Featured Genre Spotlight */}
        {spotlightGenre && (
          <div className={`mb-20 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group glass rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-xl scale-110 group-hover:scale-105 transition-transform duration-1000"
                style={{ backgroundImage: `url(${spotlightMovies[0]?.poster})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/90 to-[#05050a]/60" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-bold border border-purple-500/20 backdrop-blur-md">
                    🔥 MOST POPULAR THIS WEEK
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black leading-tight text-white">
                    The Best of <span className="text-purple-400">{spotlightGenre}</span>
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                    Discover the highest-rated {spotlightGenre.toLowerCase()} films hand-picked by our community. From mind-bending plots to edge-of-your-seat thrills.
                  </p>
                  <Link 
                    to={`/movies?genre=${spotlightGenre}`} 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3.5 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Explore {spotlightGenre}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
                
                {/* Mini Poster Stack */}
                <div className="hidden md:flex justify-center items-center gap-4 perspective-1000">
                  {spotlightMovies.map((movie, idx) => (
                    <div 
                      key={movie.id} 
                      className="w-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:scale-105"
                      style={{ 
                        transform: `rotate(${(idx - 1) * 6}deg) translateY(${idx * 10}px)`,
                        zIndex: 3 - idx 
                      }}
                    >
                      <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Genre Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((g, index) => {
            const info = genreInfo[g] || defaultInfo;
            const count = moviesData.filter((m) => String(m.genre).includes(g)).length;
            // Dynamically fetch a poster from this genre for the background
            const bgMovie = moviesData.find((m) => String(m.genre).includes(g));
            
            return (
              <Link
                key={g}
                to={`/movies?genre=${g}`}
                className={`group relative h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-up`}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Dynamic Background Image */}
                {bgMovie?.poster && (
                  <img 
                    src={bgMovie.poster} 
                    alt={g} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/40 to-transparent group-hover:via-[#05050a]/20 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                  <div className={`w-16 h-16 rounded-2xl ${info.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 backdrop-blur-md border border-white/10 shadow-lg`}>
                    <svg className={`w-8 h-8 ${info.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.icon}
                    </svg>
                  </div>
                  
                  <h3 className="font-black text-2xl text-white mb-2 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {g}
                  </h3>
                  
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-200">{count} Titles</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr ${g === 'Action' ? 'from-red-500/20' : g === 'Sci-Fi' ? 'from-cyan-500/20' : 'from-purple-500/20'} to-transparent`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-24 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-3xl p-10 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              Can't Decide What to Watch?
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10 text-lg">
              Let our smart algorithm pick the perfect movie for your current mood.
            </p>
            <Link 
              to="/movies" 
              className="relative z-10 inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-black hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              Surprise Me
            </Link>
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }
        .animate-fade-up { animation: fade-up 0.6s ease-out both; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}