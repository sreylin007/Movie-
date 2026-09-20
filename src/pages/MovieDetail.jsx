import { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import moviesData from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // 1. Get current user from AuthContext

  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const found = moviesData.find((m) => m.id === Number(id));
    setMovie(found);

    // Find related movies (same genre, excluding current movie)
    if (found) {
      const related = moviesData
        .filter((m) => m.genre === found.genre && m.id !== found.id)
        .slice(0, 4); // Show max 4 related movies
      setRelatedMovies(related);
    }
  }, [id]);

  // 2. Handle Watch Now click with authentication check
  const handleWatchNow = () => {
    if (!user) {
      // Not logged in → redirect to login, but remember the watch URL
      navigate("/login", { state: { from: `/watch/${id}` } });
    } else {
      // Logged in → go directly to the watch page
      navigate(`/watch/${id}`);
    }
  };

  if (!movie) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="glass rounded-3xl p-12">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-3xl font-bold mb-4">Movie not found</h2>
          <p className="text-gray-400 mb-6">The movie you're looking for doesn't exist.</p>
          <Link to="/movies" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold btn-glow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  // Parse cast into array
  const castArray = movie.cast ? movie.cast.split(',').slice(0, 4) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <Link
        to="/movies"
        className="mb-8 inline-flex items-center gap-2 glass px-4 py-2 rounded-xl hover:bg-white/10 transition group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span className="text-gray-300 group-hover:text-white transition-colors">Back to Movies</span>
      </Link>

      {/* Main Movie Detail Card */}
      <div className="glass rounded-3xl overflow-hidden mb-12">
        {/* Hero Banner (Background Image with Overlay) */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1920x400?text=Movie+Banner";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative -mt-48 md:-mt-64 p-6 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="md:col-span-1">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl glow-purple"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x600?text=No+Image";
                  }}
                />
                {/* Play Button Overlay */}
                <button 
                  onClick={handleWatchNow} // 3. Added onClick here too for the poster overlay!
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform glow-purple">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-sm font-semibold">
                  {movie.genre}
                </span>
                <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-bold">{movie.rating}</span>
                  <span className="text-gray-400">/ 10</span>
                </span>
                <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="font-semibold">{movie.year}</span>
                </span>
                <span className="glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="font-semibold">{movie.duration}</span>
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-2 leading-tight">
                  {movie.title}
                </h1>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-sm text-gray-400">Director</span>
                  </div>
                  <p className="font-semibold text-white">{movie.director}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <span className="text-sm text-gray-400">Cast</span>
                  </div>
                  <p className="font-semibold text-white text-sm">{movie.cast}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Synopsis
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {movie.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* 4. UPDATED WATCH NOW BUTTON WITH onClick */}
                <button 
                  onClick={handleWatchNow}
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl font-bold btn-glow flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Now
                </button>
                
                <button className="glass px-6 py-4 rounded-xl hover:bg-white/10 transition flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  Add to Watchlist
                </button>
                <button className="glass px-6 py-4 rounded-xl hover:bg-white/10 transition flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      {castArray.length > 0 && (
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Cast & Crew
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {castArray.map((actor, index) => (
              <div key={index} className="glass rounded-xl p-4 text-center card-hover">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">
                    {actor.trim().charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-sm">{actor.trim()}</p>
                <p className="text-xs text-gray-400 mt-1">Actor</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Movies Section */}
      {relatedMovies.length > 0 && (
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-sm text-purple-400 font-semibold mb-2">🎬 YOU MAY ALSO LIKE</div>
              <h2 className="text-3xl font-black">
                Related <span className="gradient-text">Movies</span>
              </h2>
            </div>
            <Link to="/movies" className="glass px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedMovies.map((relatedMovie) => (
              <MovieCard key={relatedMovie.id} movie={relatedMovie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}