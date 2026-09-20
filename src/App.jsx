import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './Page/Homepage';
import Movies from './Page/Movies';
import Genres from './Page/Genres';
import Aboutpage from './Page/Aboutpage';
import MovieDetail from './Page/MovieDatail';

import AdminLayout from './Page/Admin/AdminLayout';
import Dashboard from './Page/Admin/Dashboard';
import MovieManage from './Page/Admin/MovieManage';
import AddMovie from './Page/Admin/AddMovie';
import EditMovie from './Page/Admin/EditMovie';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="movies" element={<MovieManage />} />
          <Route path="add" element={<AddMovie />} />
          <Route path="edit/:id" element={<EditMovie />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}