import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="glass sticky top-4 mx-4 mt-4 rounded-2xl px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
          </svg>
        </div>
        <span className="text-xl font-bold gradient-text">MovieHub</span>
      </Link>

      {/* Navigation links */}
      <nav className="flex items-center gap-1">
        <Link to="/" className={`px-4 py-2 rounded-xl transition ${isActive("/") ? "bg-white/10" : "hover:bg-white/10"}`}>
          Home
        </Link>
        <Link to="/movies" className={`px-4 py-2 rounded-xl transition ${isActive("/movies") ? "bg-white/10" : "hover:bg-white/10"}`}>
          Movies
        </Link>
        <Link to="/genres" className={`px-4 py-2 rounded-xl transition ${isActive("/genres") ? "bg-white/10" : "hover:bg-white/10"}`}>
          Genres
        </Link>
        <Link to="/about" className={`px-4 py-2 rounded-xl transition ${isActive("/about") ? "bg-white/10" : "hover:bg-white/10"}`}>
          About
        </Link>

        {/* Auth button - changes based on login status */}
        {user ? (
          <div className="flex items-center gap-2 ml-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl glass hover:bg-white/10 transition text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 btn-glow">
            Login ✨
          </Link>
        )}
      </nav>
    </header>
  );
}