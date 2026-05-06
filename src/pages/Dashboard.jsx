export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="text-gray-600">
          Welcome back 👋
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg mb-8">
        <p className="text-sm opacity-80">Total Balance</p>
        <h2 className="text-4xl font-bold mt-2">₦ 1,250,000</h2>

        <div className="mt-4 flex space-x-6 text-sm">
          <div>
            <p className="opacity-70">Income</p>
            <p className="font-semibold">₦ 500,000</p>
          </div>

          <div>
            <p className="opacity-70">Expenses</p>
            <p className="font-semibold">₦ 200,000</p>
          </div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Savings</p>
          <h3 className="text-xl font-bold">₦ 300,000</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Investments</p>
          <h3 className="text-xl font-bold">₦ 150,000</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Pending</p>
          <h3 className="text-xl font-bold">₦ 50,000</h3>
        </div>

      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="font-bold text-lg mb-4">Recent Transactions</h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <p>Netflix Subscription</p>
            <p className="text-red-500">-₦5,000</p>
          </div>

          <div className="flex justify-between border-b pb-3">
            <p>Salary</p>
            <p className="text-green-500">+₦250,000</p>
          </div>

          <div className="flex justify-between">
            <p>Uber Ride</p>
            <p className="text-red-500">-₦3,500</p>
          </div>

        </div>

      </div>

    </div>
  );
}