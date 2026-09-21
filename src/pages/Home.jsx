import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import moviesData from "../data/movies.json";

// Custom hook for scroll-triggered animations
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setMovies(moviesData);
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  const popular = [...filtered].sort((a, b) => b.rating - a.rating).slice(0, 12);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const featuredMovie = movies[8] || movies[0];

  // Scroll animation wrapper component
  const Reveal = ({ children, className = "", delay = 0 }) => {
    const [ref, isInView] = useInView();
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="relative bg-[#05050a] text-white overflow-x-hidden scroll-smooth">
      {/* Global Animated Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* ===== SLIDE 1: CINEMATIC HERO ===== */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-gray-200 tracking-wide">TRENDING NOW • 2026</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                Discover <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Cinema
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                Experience the future of movie discovery. Immersive, beautiful, and powered by intelligent recommendations tailored to your unique taste.
              </p>

              <div className="max-w-xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative">
                  <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search movies, genres, actors..."
                  />
                </div>
              </div>

              <div className="flex gap-10 pt-4 border-t border-white/10">
                {[
                  { value: "10K+", label: "Movies" },
                  { value: "500+", label: "Genres" },
                  { value: "2M+", label: "Users" }
                ].map((stat, i) => (
                  <div key={i} className="group/stat cursor-default">
                    <div className="text-4xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent group-hover/stat:from-purple-400 group-hover/stat:to-pink-400 transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Posters Parallax */}
            <div className={`relative h-[600px] hidden md:block transition-all duration-1000 delay-300 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full animate-pulse-slow" />
              
              <div className="absolute top-0 left-0 w-52 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/50 animate-float card-hover border border-white/10 z-10">
                <img src={movies[0]?.poster} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Movie 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-bold text-sm">{movies[0]?.title}</span>
                </div>
              </div>
              
              <div className="absolute top-24 right-0 w-60 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-pink-900/50 animate-float animation-delay-1000 card-hover border border-white/10 z-20">
                <img src={movies[1]?.poster} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Movie 2" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded-md">9.8</div>
              </div>
              
              <div className="absolute bottom-0 left-24 w-52 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/50 animate-float animation-delay-2000 card-hover border border-white/10 z-10">
                <img src={movies[2]?.poster} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Movie 3" />
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to Explore</span>
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </div>
        </section>

        {/* ===== SLIDE 2: FEATURED SPOTLIGHT ===== */}
        {featuredMovie && (
          <section className="relative py-20 px-4">
            <Reveal>
              <div className="max-w-7xl mx-auto group relative glass rounded-[2rem] overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-110 group-hover:scale-105 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${featuredMovie.poster})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/95 to-[#05050a]/60" />
                
                <div className="relative z-10 grid md:grid-cols-5 gap-8 p-8 md:p-16 items-center">
                  <div className="md:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold border border-yellow-500/20 backdrop-blur-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      EDITOR'S CHOICE • MOVIE OF THE WEEK
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                      {featuredMovie.title}
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl line-clamp-3">
                      {featuredMovie.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link to={`/movies/${featuredMovie.id}`} className="group/btn relative bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        <span className="relative flex items-center gap-3 text-lg">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          Watch Trailer
                        </span>
                      </Link>
                      <Link to={`/movies/${featuredMovie.id}`} className="glass px-10 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/30 border border-white/10 transition-all duration-300 flex items-center gap-3 text-lg group/details">
                        More Details
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/details:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 hidden md:flex justify-center perspective-1000">
                    <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 card-hover group/poster border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                      <img src={featuredMovie.poster} alt="Featured" className="w-full h-auto object-cover transition-transform duration-700 group-hover/poster:scale-110" />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <div className="flex items-center gap-2 text-yellow-400 font-bold">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          {featuredMovie.rating} / 10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* ===== SLIDE 3: HORIZONTAL SLIDING TRENDING ===== */}
        <section className="py-20 px-4 border-t border-white/5">
          <Reveal>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                <div>
                  <div className="text-sm text-purple-400 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    Trending Now
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black">
                    Popular <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Movies</span>
                  </h2>
                </div>
                <Link to="/movies" className="glass px-6 py-3 rounded-xl hover:bg-white/10 hover:border-purple-500/30 border border-white/10 transition-all duration-300 flex items-center gap-2 group font-semibold">
                  View All 
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
              </div>

              {/* Horizontal Scroll Container (Slide to Slide) */}
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth">
                  {popular.map((movie, index) => (
                    <div key={movie.id} className="snap-center shrink-0 w-[280px] md:w-[320px] animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
                {/* Fade edges for scroll indication */}
                <div className="absolute top-0 right-0 bottom-8 w-32 bg-gradient-to-l from-[#05050a] to-transparent pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SLIDE 4: DEEP DIVE GENRES ===== */}
        <section className="py-20 px-4">
          <Reveal>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-sm text-cyan-400 font-bold mb-2 uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  Curated Categories
                </div>
                <h2 className="text-4xl md:text-6xl font-black">
                  Explore by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Genre</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "Action", color: "text-red-400", bg: "bg-red-500/10", border: "group-hover:border-red-500/50", shadow: "group-hover:shadow-red-500/20", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { name: "Sci-Fi", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "group-hover:border-cyan-500/50", shadow: "group-hover:shadow-cyan-500/20", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" },
                  { name: "Drama", color: "text-purple-400", bg: "bg-purple-500/10", border: "group-hover:border-purple-500/50", shadow: "group-hover:shadow-purple-500/20", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" },
                  { name: "Horror", color: "text-green-400", bg: "bg-green-500/10", border: "group-hover:border-green-500/50", shadow: "group-hover:shadow-green-500/20", icon: "M12 2C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3 6v4h10v-4c1.5-1.5 3-3.5 3-6 0-4.5-3.5-8-8-8z" },
                  { name: "Comedy", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "group-hover:border-yellow-500/50", shadow: "group-hover:shadow-yellow-500/20", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { name: "Romance", color: "text-pink-400", bg: "bg-pink-500/10", border: "group-hover:border-pink-500/50", shadow: "group-hover:shadow-pink-500/20", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
                ].map((genre, idx) => {
                  const count = moviesData.filter(m => m.genre && m.genre.includes(genre.name)).length;
                  return (
                    <Link key={genre.name} to="/movies" className={`group glass rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${genre.border} ${genre.shadow}`}>
                      <div className={`w-14 h-14 rounded-xl ${genre.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <svg className={`w-7 h-7 ${genre.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={genre.icon} />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-white">{genre.name}</h3>
                      <p className="text-sm text-gray-400">{count} Titles</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SLIDE 5: THE EXPERIENCE (Why Choose Us) ===== */}
        <section className="py-20 px-4 border-t border-white/5">
          <Reveal>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6">
                  The <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">MovieHub</span> Experience
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-xl">We don't just list movies. We craft an immersive journey from discovery to your screen.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                
                {[
                  { 
                    step: "01",
                    title: "Intelligent Discovery", 
                    desc: "Our advanced algorithm learns your taste, surfacing hidden gems and blockbuster hits you'll actually love.",
                    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                    color: "text-purple-400",
                    bg: "bg-purple-500/10"
                  },
                  { 
                    step: "02",
                    title: "Curated Collections", 
                    desc: "Hand-picked lists by cinematic experts. From 'Mind-Bending Sci-Fi' to 'Feel-Good Classics', we have a mood for you.",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    color: "text-pink-400",
                    bg: "bg-pink-500/10"
                  },
                  { 
                    step: "03",
                    title: "Seamless Viewing", 
                    desc: "Track your watchlist, rate movies, and get personalized stats. Your cinematic journey, perfectly organized.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group relative glass rounded-3xl p-8 text-center border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#05050a] border border-white/10 flex items-center justify-center text-xs font-black text-gray-400 group-hover:text-white group-hover:border-purple-500 transition-colors">
                      {feature.step}
                    </div>
                    <div className={`w-20 h-20 mx-auto rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <svg className={`w-10 h-10 ${feature.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SLIDE 6: TOP RATED & COMMUNITY ===== */}
        <section className="py-20 px-4">
          <Reveal>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Top Rated Column */}
              <div className="lg:col-span2">
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <div className="text-sm text-yellow-400 font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                      Critically Acclaimed
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black">
                      Top Rated <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Movies</span>
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {topRated.map((movie, index) => (
                    <div key={movie.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Community/Testimonial Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    Community Love
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "Sarah J.", role: "Film Enthusiast", text: "MovieHub completely changed how I find movies. The recommendations are scarily accurate!", avatar: "SJ" },
                      { name: "Marcus T.", role: "Casual Viewer", text: "The UI is absolutely gorgeous. It feels like a premium streaming service, but for discovery.", avatar: "MT" },
                      { name: "Elena R.", role: "Cinephile", text: "Finally, a platform that respects my time and helps me dive deep into specific genres.", avatar: "ER" }
                    ].map((review, i) => (
                      <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                            {review.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-sm">{review.name}</div>
                            <div className="text-xs text-gray-400">{review.role}</div>
                          </div>
                          <div className="ml-auto flex text-yellow-400 text-xs">★★★★★</div>
                        </div>
                        <p className="text-gray-300 text-sm italic">"{review.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SLIDE 7: IMMERSIVE NEWSLETTER CTA ===== */}
        <section className="py-32 px-4 mb-10">
          <Reveal>
            <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-700">
              {/* Animated Background glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-sm font-semibold text-gray-300">Join 50,000+ Movie Lovers</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  Never Miss a <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">New Release</span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                  Subscribe to our weekly newsletter. Get curated picks, exclusive reviews, and early access to new features.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/10 outline-none text-white placeholder-gray-500 transition-all duration-300 text-lg"
                  />
                  <button className="group/btn relative bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap text-lg">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    <span className="relative flex items-center justify-center gap-2">
                      Subscribe Now
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-6">No spam, ever. Unsubscribe at any time.</p>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* Global Custom Animations */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, 0) scale(1.1); }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }
        .animate-fade-up { animation: fade-up 0.8s ease-out both; }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s infinite ease-in-out; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}