import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const areaData = [
  { month: 'Jan', income: 420000, expenses: 180000 },
  { month: 'Feb', income: 510000, expenses: 220000 },
  { month: 'Mar', income: 480000, expenses: 195000 },
  { month: 'Apr', income: 620000, expenses: 240000 },
  { month: 'May', income: 590000, expenses: 210000 },
  { month: 'Jun', income: 750000, expenses: 280000 },
]

const transactions = [
  { name: 'Salary Credit', category: 'Income', amount: '+₦500,000', type: 'credit', date: 'Jun 1', icon: '💼' },
  { name: 'Netflix Subscription', category: 'Entertainment', amount: '-₦5,000', type: 'debit', date: 'Jun 3', icon: '🎬' },
  { name: 'Uber Ride', category: 'Transport', amount: '-₦3,500', type: 'debit', date: 'Jun 5', icon: '🚗' },
  { name: 'Grocery Shopping', category: 'Food', amount: '-₦28,000', type: 'debit', date: 'Jun 7', icon: '🛒' },
  { name: 'Freelance Payment', category: 'Income', amount: '+₦120,000', type: 'credit', date: 'Jun 10', icon: '💻' },
  { name: 'Electricity Bill', category: 'Utilities', amount: '-₦15,000', type: 'debit', date: 'Jun 12', icon: '⚡' },
]

const navItems = [
  { label: 'Overview', icon: '⬛', active: true },
  { label: 'Transactions', icon: '↔️', active: false },
  { label: 'Analytics', icon: '📊', active: false },
  { label: 'Cards', icon: '💳', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Overview')

  return (
    <div className="min-h-screen bg-[#080b14] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-[#0d1120] border-r border-white/5 p-6 fixed h-full">
        <Link to="/" className="text-xl font-bold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-10">
          FinPay
        </Link>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-colors ${
                activeNav === item.label
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/20'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/3'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="bg-linear-to-br from-purple-600/20 to-indigo-600/10 border border-purple-500/20 rounded-xl p-4">
          <p className="text-white text-sm font-medium mb-1">Upgrade to Pro</p>
          <p className="text-gray-400 text-xs mb-3">Unlock advanced analytics and more.</p>
          <Link to="/pricing" className="block text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white text-xs py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Upgrade
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-60 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Good morning 👋</h1>
            <p className="text-gray-500 text-sm mt-1">Here's what's happening with your money.</p>
          </div>
          <Link to="/" className="text-sm text-gray-400 border border-white/10 px-4 py-2 rounded-lg hover:text-white hover:border-white/20 transition-colors">
            ← Home
          </Link>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Balance', value: '₦1,250,000', change: '+8.2%', up: true },
            { label: 'Monthly Income', value: '₦500,000', change: '+12%', up: true },
            { label: 'Monthly Expenses', value: '₦200,000', change: '-3.1%', up: false },
            { label: 'Savings', value: '₦300,000', change: '+5.4%', up: true },
          ].map((stat, i) => (
            <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-5">
              <p className="text-gray-400 text-xs mb-2">{stat.label}</p>
              <p className="text-white text-xl font-bold mb-1">{stat.value}</p>
              <p className={`text-xs ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change} this month
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Area chart */}
          <div className="md:col-span-2 bg-white/3 border border-white/8 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold">Income vs Expenses</h2>
              <span className="text-gray-500 text-xs">Last 6 months</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ background: '#1e2035', border: '1px solid #374151', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  formatter={v => `₦${v.toLocaleString()}`}
                />
                <Area type="monotone" dataKey="income" stroke="#7c3aed" strokeWidth={2} fill="url(#incomeGrad)" name="Income" />
                <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} fill="url(#expenseGrad)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bar chart */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold">Spending</h2>
              <span className="text-gray-500 text-xs">By category</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[
                { name: 'Food', value: 28000 },
                { name: 'Bills', value: 15000 },
                { name: 'Travel', value: 8500 },
                { name: 'Fun', value: 5000 },
              ]} barSize={24}>
                <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ background: '#1e2035', border: '1px solid #374151', borderRadius: 8, color: '#fff', fontSize: 12 }}
                  formatter={v => `₦${v.toLocaleString()}`}
                />
                <Bar dataKey="value" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold">Recent Transactions</h2>
            <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">View all</button>
          </div>
          <div className="space-y-1">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/8 rounded-xl flex items-center justify-center text-lg">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.category} · {t.date}</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold ${t.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
