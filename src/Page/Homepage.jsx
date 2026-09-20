import React, { useState, useEffect } from 'react';
import movieData from '../../movie.json';
import Moviecard from '../components/Moviecard';

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  const heroMovie = movies[0];

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      {/* Hero Banner Section */}
      {heroMovie && (
        <div 
          className="relative h-[80vh] bg-cover bg-center flex items-end p-12" 
          style={{ backgroundImage: `linear-gradient(to top, rgba(9, 9, 11, 1), transparent), url(${heroMovie.banner})` }}
        >
          <div className="max-w-2xl space-y-4">
            <span className="bg-red-600 text-xs font-semibold px-2 py-1 rounded uppercase">
              Nexus Original Series
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight">{heroMovie.title}</h1>
            <p className="text-gray-300 text-sm line-clamp-3">{heroMovie.description}</p>
            <div className="flex gap-4 pt-2">
              <button className="bg-white text-black font-bold px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-200">
                ▶ Play
              </button>
              <button className="bg-gray-700/80 text-white font-bold px-6 py-2 rounded hover:bg-gray-600">
                + My List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="px-12 py-8 space-y-10">
        {/* Trending Now */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* New Releases */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">New Releases</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.filter(m => m.isNewRelease).map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}