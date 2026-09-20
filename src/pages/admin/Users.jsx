export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "User", status: "Pending" },
    { id: 4, name: "Lisa Park", email: "lisa@example.com", role: "User", status: "Active" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">👥 Manage Users</h2>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-gray-400 text-sm">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((u) => (
              <tr key={u.id} className="border-t border-white/5 hover:bg-white/5 transition">
                <td className="p-4">{u.id}</td>
                <td className="p-4 font-semibold">{u.name}</td>
                <td className="p-4 text-gray-400">{u.email}</td>
                <td className="p-4">
                  <span className={`glass px-2 py-1 rounded-lg text-xs ${u.role === "Admin" ? "bg-purple-500/20 text-purple-400" : ""}`}>
                    {u.role}
                  </span>
                </td>
                <td className="p-4">
                  <span className={u.status === "Active" ? "text-green-400" : "text-yellow-400"}>
                    ● {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}