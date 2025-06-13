import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
      const confirm = window.confirm("Are you sure you want to logout?");
  if (!confirm) return;
    localStorage.removeItem("adminLoggedIn");
      toast.success("Logged out successfully");

    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white flex flex-col justify-between p-4">
        <div>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

          <nav className="flex flex-col gap-2 border-b border-gray-700 pb-4">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="text-left px-2 py-1 hover:bg-gray-800 rounded"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/admin/create")}
              className="text-left px-2 py-1 hover:bg-gray-800 rounded"
            >
              Create Post
            </button>
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full bg-gray-600 hover:bg-gray-600 text-white py-2 px-3 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
