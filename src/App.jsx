import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";

// User pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Genres from "./pages/Genres";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageMovies from "./pages/admin/ManageMovies";
import AddMovie from "./pages/admin/AddMovie";
import EditMovie from "./pages/admin/EditMovie";
import AdminGenres from "./pages/admin/Genres";
import Users from "./pages/admin/Users";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* Animated background */}
        <AuroraBackground />

        <div className="relative z-10">
          <Routes>
            {/* ===== USER ROUTES ===== */}
            <Route path="/" element={<><Header /><Home /><Footer /></>} />
            <Route path="/movies" element={<><Header /><Movies /><Footer /></>} />
            <Route path="/movies/:id" element={<><Header /><MovieDetail /><Footer /></>} />
            <Route path="/genres" element={<><Header /><Genres /><Footer /></>} />
            <Route path="/about" element={<><Header /><About /><Footer /></>} />
            
            {/* Auth pages */}
            <Route path="/login" element={<><Header /><Login /><Footer /></>} />
            <Route path="/register" element={<><Header /><Register /><Footer /></>} />
            
            {/* Watch page (protected inside the component) */}
            <Route path="/watch/:id" element={<><Header /><Watch /><Footer /></>} />

            {/* ===== ADMIN ROUTES ===== */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="movies" element={<ManageMovies />} />
              <Route path="movies/add" element={<AddMovie />} />
              <Route path="movies/edit/:id" element={<EditMovie />} />
              <Route path="genres" element={<AdminGenres />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}