export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 p-6">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        FintechX
      </h1>

      {/* Menu */}
      <div className="space-y-6 text-gray-600">

        <p className="hover:text-blue-600 cursor-pointer">🏠 Dashboard</p>
        <p className="hover:text-blue-600 cursor-pointer">💳 Wallet</p>
        <p className="hover:text-blue-600 cursor-pointer">📊 Analytics</p>
        <p className="hover:text-blue-600 cursor-pointer">📜 Transactions</p>
        <p className="hover:text-blue-600 cursor-pointer">⚙️ Settings</p>

      </div>

    </div>
  );
}