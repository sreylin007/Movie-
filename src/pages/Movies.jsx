import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import moviesData from "../data/movies.json";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  const filtered = movies.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genreFilter === "All" || m.genre === genreFilter;
    return matchSearch && matchGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-black mb-10">
        🎬 All <span className="gradient-text">Movies</span>
      </h1>

      {/* Search + Filter */}
      <div className="glass rounded-2xl p-4 mb-10 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
          />
        </div>

        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white"
        >
          {genres.map((g) => (
            <option key={g} value={g} className="bg-gray-900">{g}</option>
          ))}
        </select>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">No movies found 😢</p>
        </div>
      )}
    </div>
  );
}