import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import moviesData from "../data/movies.json";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMovies(moviesData);
    // Trigger entrance animations after a brief delay
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Extract unique genres safely (filter out undefined/null)
  const genres = ["All", ...new Set(movies.map((m) => m.genre).filter(Boolean))];

  const filtered = movies.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genreFilter === "All" || m.genre === genreFilter;
    return matchSearch && matchGenre;
  });

  return (
    <div className="relative min-h-screen px-4 py-20 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Explore <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Cinema</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dive into our extensive collection. Search by title or filter by your favorite genre.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className={`glass rounded-2xl p-6 mb-10 border border-white/10 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Input with Glow Wrapper */}
            <div className="flex-1 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <SearchBar
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search movies, directors, or keywords..."
                />
              </div>
            </div>

            {/* Active Filter Clear Button (Shows only when a genre is selected) */}
            {genreFilter !== "All" && (
              <button 
                onClick={() => setGenreFilter("All")}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all font-semibold whitespace-nowrap shrink-0"
              >
                <span>Clear: {genreFilter}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
          </div>

          {/* Genre Chips (Horizontal Scroll on Mobile) */}
          <div className="mt-6 flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setGenreFilter(genre)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  genreFilter === genre
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-2">
          <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Showing <span className="text-white font-bold">{filtered.length}</span> {filtered.length === 1 ? 'movie' : 'movies'}
          </p>
        </div>

        {/* Movie Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((movie, index) => (
            <div 
              key={movie.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Beautiful Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 animate-fade-up">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 animate-float">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No movies found</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              We couldn't find any movies matching <span className="text-purple-400 font-semibold">"{search}"</span> in the <span className="text-purple-400 font-semibold">{genreFilter}</span> genre.
            </p>
            <button 
              onClick={() => { setSearch(""); setGenreFilter("All"); }}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all font-semibold flex items-center gap-2 mx-auto group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Clear all filters
            </button>
          </div>
        )}
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }
        .animate-fade-up { animation: fade-up 0.6s ease-out both; }
        .animate-float { animation: float 4s infinite ease-in-out; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}