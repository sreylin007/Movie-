import { useState, useEffect } from "react";
import moviesData from "../../data/movies.json";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const unique = [...new Set(moviesData.map((m) => m.genre))];
    setGenres(unique);
  }, []);

  const emoji = {
    Action: "💥", Comedy: "😂", Drama: "🎭", Horror: "👻",
    Romance: "💖", Animation: "🎨", "Sci-Fi": "🚀",
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">🎭 Manage Genres</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {genres.map((g) => (
          <div key={g} className="glass rounded-2xl p-6 flex justify-between items-center card-hover">
            <div>
              <div className="text-2xl mb-2">{emoji[g] || "🎬"}</div>
              <div className="font-bold">{g}</div>
              <div className="text-sm text-gray-400">
                {moviesData.filter((m) => m.genre === g).length} movies
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 flex items-center justify-center transition">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}