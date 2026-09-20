import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-2xl font-bold tracking-wider text-red-600">NEXUS</Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/movies" className="hover:text-white transition">Series</Link>
          <Link to="/movies" className="hover:text-white transition">Movies</Link>
          <Link to="/genres" className="hover:text-white transition">Genres</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4 text-white">
        <button className="p-2 hover:bg-white/10 rounded-full">🔍</button>
        <button className="p-2 hover:bg-white/10 rounded-full">🔔</button>
        <Link to="/admin" className="px-3 py-1 bg-red-600 text-xs rounded hover:bg-red-700">Admin</Link>
      </div>
    </header>
  );
}