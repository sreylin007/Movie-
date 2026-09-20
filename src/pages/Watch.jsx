import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import moviesData from "../data/movies.json";

export default function Watch() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // 1. ពិនិត្យមើលថាតើ User Login ហើយឬនៅ?
    if (!user) {
      // បើមិនទាន់ Login ទេ បញ្ជូនទៅ Login Page ហើយចងចាំ URL ដែលគេចង់ទៅ
      navigate("/login", { state: { from: `/watch/${id}` } });
      return;
    }

    // 2. រក Movie តាម ID
    const found = moviesData.find((m) => m.id === Number(id));
    setMovie(found);
    window.scrollTo(0, 0);
  }, [id, user, navigate]);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading movie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050a]">
      {/* Top Navigation Bar for Watch Page */}
      <div className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/10">
        <Link
          to={`/movies/${movie.id}`}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="font-medium">Back to Details</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="text-sm text-gray-300 hidden sm:block">{user?.name}</span>
        </div>
      </div>

      {/* Main Video Player Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Video Container (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl glow-purple border border-white/10">
          {/* YouTube Embed (Demo Trailer) */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&mute=1" 
            title="Movie Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Custom Overlay Badge */}
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE STREAM
          </div>
        </div>

        {/* Movie Info Below Player */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Left: Movie Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2">{movie.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="glass px-3 py-1 rounded-full">{movie.year}</span>
                <span className="glass px-3 py-1 rounded-full">{movie.genre}</span>
                <span className="glass px-3 py-1 rounded-full">{movie.duration}</span>
                <span className="glass px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {movie.rating}/10
                </span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Synopsis
              </h3>
              <p className="text-gray-300 leading-relaxed">{movie.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Director</p>
                <p className="font-semibold">{movie.director}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Cast</p>
                <p className="font-semibold text-sm">{movie.cast}</p>
              </div>
            </div>
          </div>

          {/* Right: Quality & Actions */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Stream Quality</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-purple-600/20 border border-purple-500/50 text-purple-300">
                  <span className="font-semibold">1080p Full HD</span>
                  <span className="text-xs bg-purple-500 px-2 py-1 rounded text-white">Active</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl glass hover:bg-white/5 transition text-gray-400">
                  <span className="font-semibold">720p HD</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl glass hover:bg-white/5 transition text-gray-400">
                  <span className="font-semibold">480p SD</span>
                </button>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full glass py-3 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  Add to Watchlist
                </button>
                <button className="w-full glass py-3 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  Share Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}