import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

// AdminLayout - wraps all admin pages
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}