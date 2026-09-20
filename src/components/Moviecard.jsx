import React from 'react';
import { Link } from 'react-router-dom';

export default function Moviecard({ movie }) {
  return (
    <div className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition duration-300">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-white font-bold text-sm truncate">{movie.title}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
          <span>{movie.category}</span>
          <span>•</span>
          <span>{movie.duration}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-yellow-400 font-semibold">★ {movie.rating}</span>
          <Link 
            to={`/movie/${movie.id}`} 
            className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
          >
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}