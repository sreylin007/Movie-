import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    poster: "",
    genre: "",
    year: "",
    rating: "",
    duration: "",
    director: "",
    description: "",
    cast: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = localStorage.getItem("movies");
    const movies = saved ? JSON.parse(saved) : [];

    const newMovie = {
      ...form,
      id: movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1,
      year: Number(form.year),
      rating: Number(form.rating),
    };

    const updated = [...movies, newMovie];
    localStorage.setItem("movies", JSON.stringify(updated));

    alert("Movie added successfully! ✅");
    navigate("/admin/movies");
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white";

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-8">➕ Add New Movie</h2>

      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Movie Title</label>
          <input name="title" value={form.title} onChange={handleChange} required className={inputClass} placeholder="Enter movie title" />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Poster URL</label>
          <input name="poster" value={form.poster} onChange={handleChange} required className={inputClass} placeholder="https://..." />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Genre</label>
            <input name="genre" value={form.genre} onChange={handleChange} required className={inputClass} placeholder="Action" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Year</label>
            <input name="year" type="number" value={form.year} onChange={handleChange} required className={inputClass} placeholder="2024" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Rating (0-10)</label>
            <input name="rating" type="number" step="0.1" max="10" value={form.rating} onChange={handleChange} required className={inputClass} placeholder="8.5" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Duration</label>
            <input name="duration" value={form.duration} onChange={handleChange} required className={inputClass} placeholder="120 min" />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Director</label>
          <input name="director" value={form.director} onChange={handleChange} required className={inputClass} placeholder="Director name" />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Cast</label>
          <input name="cast" value={form.cast} onChange={handleChange} className={inputClass} placeholder="Actor 1, Actor 2, ..." />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" required className={inputClass} placeholder="Movie description..."></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-semibold btn-glow">
            Save Movie
          </button>
          <button type="button" onClick={() => navigate("/admin/movies")} className="px-6 py-3 rounded-xl glass hover:bg-white/10 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}