import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ManageMovies() {
  const [movies, setMovies] = useState([]);

  // Load movies from localStorage OR default JSON
  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      setMovies(JSON.parse(saved));
    } else {
      import("../../data/movies.json").then((data) => {
        localStorage.setItem("movies", JSON.stringify(data.default));
        setMovies(data.default);
      });
    }
  }, []);

  // Delete movie
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      const updated = movies.filter((m) => m.id !== id);
      setMovies(updated);
      localStorage.setItem("movies", JSON.stringify(updated));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">🎬 Manage Movies</h2>
        <Link
          to="/admin/movies/add"
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-xl text-sm font-semibold btn-glow"
        >
          + Add New
        </Link>
      </div>

      <div className="glass rounded-2xl p-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b border-white/10">
              <th className="pb-3">Movie</th>
              <th className="pb-3">Genre</th>
              <th className="pb-3">Year</th>
              <th className="pb-3">Rating</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {movies.map((m) => (
              <tr key={m.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={m.poster}
                      alt={m.title}
                      className="w-12 h-16 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/60x80?text=N/A";
                      }}
                    />
                    <div>
                      <div className="font-semibold">{m.title}</div>
                      <div className="text-xs text-gray-400">{m.genre} • {m.duration}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="glass px-2 py-1 rounded-lg text-xs">{m.genre}</span>
                </td>
                <td className="py-4 text-gray-300">{m.year}</td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{m.rating}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/movies/edit/${m.id}`}
                      className="w-8 h-8 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 flex items-center justify-center transition"
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition"
                    >
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}