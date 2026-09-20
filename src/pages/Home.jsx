import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import moviesData from "../data/movies.json";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  const popular = [...filtered].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const featuredMovie = movies[8]; // Interstellar as featured

  return (
    <div>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></span>
              <span className="text-sm text-gray-300">Trending Now • 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Discover <span className="gradient-text">Cinema</span><br />
              Like Never Before
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Experience the future of movie discovery. Immersive, beautiful, and powered by smart recommendations.
            </p>

            <div className="max-w-md mb-10">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies, genres, actors..."
              />
            </div>

            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-gray-400">Movies</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-400">Genres</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">2M+</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
            </div>
          </div>

          {/* Floating Posters */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute top-0 left-0 w-48 h-72 rounded-2xl overflow-hidden float card-hover glow-purple">
              <img src={movies[0]?.poster} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="absolute top-20 right-0 w-56 h-80 rounded-2xl overflow-hidden float card-hover glow-pink" style={{ animationDelay: "-1s" }}>
              <img src={movies[1]?.poster} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="absolute bottom-0 left-20 w-48 h-72 rounded-2xl overflow-hidden float card-hover glow-cyan" style={{ animationDelay: "-2s" }}>
              <img src={movies[2]?.poster} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. FEATURED MOVIE BANNER ===== */}
      {featuredMovie && (
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="glass rounded-3xl overflow-hidden relative border border-white/10">
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm scale-105"
              style={{ backgroundImage: `url(${featuredMovie.poster})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/80 to-transparent" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-500/30">
                  ⭐ Featured Movie of the Week
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  {featuredMovie.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  {featuredMovie.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={`/movies/${featuredMovie.id}`} 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-bold btn-glow flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Watch Now
                  </Link>
                  <Link 
                    to={`/movies/${featuredMovie.id}`} 
                    className="glass px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2"
                  >
                    More Details
                  </Link>
                </div>
              </div>
              {/* Featured Poster */}
              <div className="hidden md:flex justify-center">
                <div className="relative w-64 rounded-2xl overflow-hidden shadow-2xl glow-purple card-hover">
                  <img src={featuredMovie.poster} alt="Featured" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== 3. POPULAR MOVIES ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-purple-400 font-semibold mb-2">🔥 TRENDING</div>
            <h2 className="text-5xl font-black">
              Popular <span className="gradient-text">Movies</span>
            </h2>
          </div>
          <Link to="/movies" className="glass px-6 py-3 rounded-xl hover:bg-white/10 transition">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* ===== 4. QUICK GENRE PREVIEW ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-cyan-400 font-semibold mb-2">🎭 CATEGORIES</div>
            <h2 className="text-4xl font-black">Explore by <span className="gradient-text">Genre</span></h2>
          </div>
          <Link to="/genres" className="glass px-6 py-3 rounded-xl hover:bg-white/10 transition">
            View All Genres →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              name: "Action", 
              color: "text-red-400 bg-red-500/10", 
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /> 
            },
            { 
              name: "Sci-Fi", 
              color: "text-cyan-400 bg-cyan-500/10", 
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </>
              )
            },
            { 
              name: "Drama", 
              color: "text-purple-400 bg-purple-500/10", 
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01M9 15h6" />
                </>
              )
            },
            { 
              name: "Horror", 
              color: "text-green-400 bg-green-500/10", 
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3 6v4h10v-4c1.5-1.5 3-3.5 3-6 0-4.5-3.5-8-8-8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01" />
                </>
              )
            }
          ].map((genre, idx) => {
            const count = moviesData.filter(m => m.genre === genre.name).length;
            return (
              <Link key={genre.name} to="/movies" className="glass rounded-2xl p-6 card-hover border border-transparent hover:border-white/20 group">
                <div className={`w-12 h-12 rounded-xl ${genre.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {genre.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                <p className="text-sm text-gray-400">{count} Movies</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== 5. TOP RATED MOVIES ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm text-yellow-400 font-semibold mb-2">🏆 HIGHEST RATED</div>
            <h2 className="text-4xl font-black">Top Rated <span className="gradient-text">Movies</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRated.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* ===== 6. WHY CHOOSE US ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Why Choose <span className="gradient-text">MovieHub?</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide the best tools to help you find your next favorite movie.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-8 text-center card-hover border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast Search</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Find any movie, actor, or genre in milliseconds with our optimized search engine.</p>
          </div>
          <div className="glass rounded-2xl p-8 text-center card-hover border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Curated Collections</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Hand-picked lists and smart recommendations tailored to your unique taste.</p>
          </div>
          <div className="glass rounded-2xl p-8 text-center card-hover border border-white/5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Fully Responsive</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Enjoy a seamless, beautiful experience on your desktop, tablet, or mobile phone.</p>
          </div>
        </div>
      </section>

      {/* ===== 7. NEWSLETTER CTA ===== */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-purple-500/20">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
            Never Miss a <span className="gradient-text">New Release</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
            Subscribe to our newsletter and get weekly updates on the latest movies, exclusive reviews, and hidden gems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-bold btn-glow whitespace-nowrap hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}