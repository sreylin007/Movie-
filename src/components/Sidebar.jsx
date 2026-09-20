import { Link, useLocation } from "react-router-dom";

// Sidebar - admin navigation
export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/admin", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { to: "/admin/movies", label: "Movies", icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" },
    { to: "/admin/movies/add", label: "Add Movie", icon: "M12 4v16m8-8H4" },
    { to: "/admin/genres", label: "Genres", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
    { to: "/admin/users", label: "Users", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <aside className="w-64 glass-strong p-6 min-h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div>
          <div className="font-bold">Admin Panel</div>
          <div className="text-xs text-gray-400">Pro Account</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30"
                  : "hover:bg-white/5"
              }`}
            >
              <svg className={`w-5 h-5 ${active ? "text-purple-400" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}/>
              </svg>
              <span className={active ? "font-medium" : "text-gray-300"}>
                {link.label}
              </span>
            </Link>
          );
        })}

        {/* Back to user site */}
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition mt-8"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span className="text-gray-300">← Back to Site</span>
        </Link>
      </nav>
    </aside>
  );
}