import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moviesData from "../data/movies.json";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const unique = [...new Set(moviesData.map((m) => m.genre))];
    setGenres(unique);
  }, []);

  // Professional SVG Icons (No extra installation needed!)
  const genreInfo = {
    Action: { 
      color: "text-red-400", 
      bg: "bg-red-500/10", 
      border: "hover:border-red-500/50 hover:bg-red-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    Comedy: { 
      color: "text-yellow-400", 
      bg: "bg-yellow-500/10", 
      border: "hover:border-yellow-500/50 hover:bg-yellow-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    Drama: { 
      color: "text-purple-400", 
      bg: "bg-purple-500/10", 
      border: "hover:border-purple-500/50 hover:bg-purple-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01M9 15h6" />
        </svg>
      )
    },
    Horror: { 
      color: "text-green-400", 
      bg: "bg-green-500/10", 
      border: "hover:border-green-500/50 hover:bg-green-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3 6v4h10v-4c1.5-1.5 3-3.5 3-6 0-4.5-3.5-8-8-8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01" />
        </svg>
      )
    },
    Romance: { 
      color: "text-pink-400", 
      bg: "bg-pink-500/10", 
      border: "hover:border-pink-500/50 hover:bg-pink-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    Animation: { 
      color: "text-blue-400", 
      bg: "bg-blue-500/10", 
      border: "hover:border-blue-500/50 hover:bg-blue-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    "Sci-Fi": { 
      color: "text-cyan-400", 
      bg: "bg-cyan-500/10", 
      border: "hover:border-cyan-500/50 hover:bg-cyan-500/20",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-pink-400 pulse-dot"></span>
          <span className="text-sm text-pink-400 font-semibold tracking-wide">EXPLORE CATEGORIES</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black">
          Browse by <span className="gradient-text">Genre</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Find your next favorite movie by exploring our curated collections.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {genres.map((g) => {
          // Fallback for any unknown genre
          const info = genreInfo[g] || { 
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
              </svg>
            ), 
            color: "text-gray-400", 
            bg: "bg-gray-500/10", 
            border: "hover:border-gray-500/50 hover:bg-gray-500/20" 
          };
          
          const count = moviesData.filter((m) => m.genre === g).length;

          return (
            <Link
              key={g}
              to={`/movies`}
              className={`glass rounded-2xl p-6 text-center card-hover cursor-pointer border border-transparent transition-all duration-300 group ${info.border}`}
            >
              {/* Icon Container with colored background */}
              <div className={`w-16 h-16 mx-auto rounded-2xl ${info.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`${info.color} icon-glow`}>
                  {info.icon}
                </div>
              </div>
              
              {/* Text Info */}
              <h3 className="font-bold text-lg mb-1 group-hover:text-white transition-colors">{g}</h3>
              <p className="text-xs text-gray-400 font-medium">
                {count} {count === 1 ? "Movie" : "Movies"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}