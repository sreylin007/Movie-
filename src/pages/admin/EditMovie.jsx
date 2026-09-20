import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      const movies = JSON.parse(saved);
      const found = movies.find((m) => m.id === Number(id));
      setForm(found);
    }
  }, [id]);

  if (!form) return <p className="text-gray-400">Loading...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("movies"));
    const updated = saved.map((m) =>
      m.id === Number(id)
        ? { ...form, year: Number(form.year), rating: Number(form.rating) }
        : m
    );
    localStorage.setItem("movies", JSON.stringify(updated));
    alert("Movie updated! ✅");
    navigate("/admin/movies");
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white";

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-8">✏️ Edit Movie</h2>

      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Movie Title</label>
          <input name="title" value={form.title} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Poster URL</label>
          <input name="poster" value={form.poster} onChange={handleChange} className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Genre</label>
            <input name="genre" value={form.genre} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Year</label>
            <input name="year" type="number" value={form.year} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Rating</label>
            <input name="rating" type="number" step="0.1" max="10" value={form.rating} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Duration</label>
            <input name="duration" value={form.duration} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Director</label>
          <input name="director" value={form.director} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Cast</label>
          <input name="cast" value={form.cast} onChange={handleChange} className={inputClass} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className={inputClass}></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-semibold btn-glow">
            Update Movie
          </button>
          <button type="button" onClick={() => navigate("/admin/movies")} className="px-6 py-3 rounded-xl glass hover:bg-white/10 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}