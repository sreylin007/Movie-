import React from 'react';
import { Film, Search, Star, Heart, Shield, CheckCircle } from 'lucide-react';

export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-[#2d0003] text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black text-white tracking-widest">
            ABOUT <span className="text-red-600">KDRAMAHUB</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Your ultimate destination for Asian Dramas, Movies, and Entertainment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1c0002] border border-red-900/40 p-6 rounded-2xl space-y-3">
            <Film className="w-8 h-8 text-red-500" />
            <h3 className="font-bold text-lg text-white">Huge Drama Collection</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Stream thousands of Korean, Chinese, and Asian dramas in high quality with multi-language subtitles.
            </p>
          </div>

          <div className="bg-[#1c0002] border border-red-900/40 p-6 rounded-2xl space-y-3">
            <Search className="w-8 h-8 text-red-500" />
            <h3 className="font-bold text-lg text-white">Fast & Smart Search</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Find your favorite actors, genres, and trending shows easily with our advanced filtering system.
            </p>
          </div>

          <div className="bg-[#1c0002] border border-red-900/40 p-6 rounded-2xl space-y-3">
            <Star className="w-8 h-8 text-red-500" />
            <h3 className="font-bold text-lg text-white">Ratings & Reviews</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get reliable ratings from AsianWiki and community reviews before starting a new series.
            </p>
          </div>

          <div className="bg-[#1c0002] border border-red-900/40 p-6 rounded-2xl space-y-3">
            <Heart className="w-8 h-8 text-red-500" />
            <h3 className="font-bold text-lg text-white">Personal Watchlist</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Save favorite dramas, keep track of watched episodes, and never miss new episode releases.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#180002] border border-red-900/60 p-8 rounded-3xl text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-xs md:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            KDramaHub is created to connect fans worldwide with top-tier Asian entertainment. We aim to bring you seamless streaming, accurate character guides, and an active community.
          </p>
        </div>

      </div>
    </div>
  );
}