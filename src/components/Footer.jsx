import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10 px-8 border-t border-zinc-800 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-red-600">NEXUS</h2>
          <p className="text-xs text-gray-500 mt-1">Stream unlimited movies and TV series.</p>
        </div>
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Help Center</a>
        </div>
      </div>
    </footer>
  );
}