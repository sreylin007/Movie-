import React, { useState } from 'react';
import movieData from '../../../movie.json';

export default function MovieManage() {
  const [movies, setMovies] = useState(movieData);

  const handleDelete = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Movies</h1>
      <table className="w-full text-left bg-zinc-900 rounded-lg overflow-hidden">
        <thead className="bg-zinc-800 text-gray-400 text-xs uppercase">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Rating</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800 text-sm">
          {movies.map((m) => (
            <tr key={m.id}>
              <td className="p-4">{m.title}</td>
              <td className="p-4">{m.category}</td>
              <td className="p-4 text-yellow-400">★ {m.rating}</td>
              <td className="p-4 flex gap-2">
                <button className="text-blue-400 hover:underline">Edit</button>
                <button 
                  onClick={() => handleDelete(m.id)} 
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}