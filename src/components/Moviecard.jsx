import { Link } from "react-router-dom";

// MovieCard - shows one movie as a glass card
export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="glass rounded-2xl overflow-hidden poster-overlay card-hover cursor-pointer">
        {/* Movie poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
          }}
        />

        {/* Movie info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.genre} • {movie.year}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400">⭐</span>
            <span className="font-semibold">{movie.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}