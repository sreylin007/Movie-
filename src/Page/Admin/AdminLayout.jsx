import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white">
      <Sidebar />
      <main className="flex-1 p-8 bg-zinc-950">
        <Outlet />
      </main>
    </div>
  );
}