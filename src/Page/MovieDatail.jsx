import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movieData from '../../movie.json';

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movieData.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div className="text-white p-12">Movie not found.</div>;
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-20 px-12">
      <Link to="/" className="text-sm text-red-500 hover:underline">← Back to Home</Link>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <img src={movie.poster} alt={movie.title} className="w-64 h-96 object-cover rounded-lg" />
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{movie.year}</span>
            <span>{movie.category}</span>
            <span>{movie.duration}</span>
            <span className="text-yellow-400">★ {movie.rating}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{movie.description}</p>
          <button className="bg-red-600 px-6 py-2 rounded text-white font-bold hover:bg-red-700">
            ▶ Watch Full Movie
          </button>
        </div>
      </div>
    </div>
  );
}