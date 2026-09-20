import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moviesData from "../../data/movies.json";

export default function Dashboard() {
  const [stats, setStats] = useState({ movies: 0, genres: 0, users: 0 });

  useEffect(() => {
    const genres = [...new Set(moviesData.map((m) => m.genre))].length;
    setStats({
      movies: moviesData.length,
      genres: genres,
      users: 125,
    });
  }, []);

  const cards = [
    {
      title: "Total Movies",
      value: stats.movies,
      icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
      gradient: "from-purple-500 to-pink-500",
      glow: "glow-purple",
      change: "+12%",
    },
    {
      title: "Total Genres",
      value: stats.genres,
      icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
      gradient: "from-cyan-500 to-blue-500",
      glow: "glow-cyan",
      change: "+5%",
    },
    {
      title: "Total Users",
      value: stats.users,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      gradient: "from-pink-500 to-orange-500",
      glow: "glow-pink",
      change: "+24%",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">📊 Dashboard Overview</h2>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-6 card-hover relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center ${c.glow}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={c.icon}/>
                  </svg>
                </div>
                <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                  {c.change}
                </span>
              </div>
              <div className="text-3xl font-bold">{c.value}</div>
              <div className="text-sm text-gray-400">{c.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="glass rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/admin/movies/add" className="glass p-4 rounded-xl text-center hover:bg-white/10 transition">
            <div className="text-3xl mb-2">➕</div>
            <div className="text-sm font-semibold">Add Movie</div>
          </Link>
          <Link to="/admin/movies" className="glass p-4 rounded-xl text-center hover:bg-white/10 transition">
            <div className="text-3xl mb-2">🎬</div>
            <div className="text-sm font-semibold">Manage Movies</div>
          </Link>
          <Link to="/admin/genres" className="glass p-4 rounded-xl text-center hover:bg-white/10 transition">
            <div className="text-3xl mb-2">🎭</div>
            <div className="text-sm font-semibold">Manage Genres</div>
          </Link>
          <Link to="/admin/users" className="glass p-4 rounded-xl text-center hover:bg-white/10 transition">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-sm font-semibold">Manage Users</div>
          </Link>
        </div>
      </div>
    </div>
  );
}