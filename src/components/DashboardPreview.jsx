import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { month: 'Jan', balance: 820000 },
  { month: 'Feb', balance: 950000 },
  { month: 'Mar', balance: 880000 },
  { month: 'Apr', balance: 1100000 },
  { month: 'May', balance: 1050000 },
  { month: 'Jun', balance: 1250000 },
]

const transactions = [
  { name: 'Salary', amount: '+₦250,000', type: 'credit', icon: '💼' },
  { name: 'Netflix', amount: '-₦5,000', type: 'debit', icon: '🎬' },
  { name: 'Uber Ride', amount: '-₦3,500', type: 'debit', icon: '🚗' },
  { name: 'Transfer In', amount: '+₦80,000', type: 'credit', icon: '↙️' },
]

export default function DashboardPreview() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Dashboard</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full visibility of your finances
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A powerful dashboard that gives you a complete picture of your money in real time.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="bg-[#0d1120] border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-gray-500 text-xs">FinPay Dashboard</span>
          </div>

          <div className="p-6 grid md:grid-cols-3 gap-6">
            {/* Left: Stats */}
            <div className="md:col-span-2 space-y-6">
              {/* Balance */}
              <div className="bg-linear-to-br from-purple-600/30 to-indigo-600/20 border border-purple-500/20 rounded-xl p-5">
                <p className="text-gray-400 text-sm mb-1">Total Balance</p>
                <p className="text-white text-3xl font-bold">₦ 1,250,000</p>
                <div className="flex gap-6 mt-3">
                  <div>
                    <p className="text-gray-400 text-xs">Income</p>
                    <p className="text-green-400 font-semibold">+₦500,000</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Expenses</p>
                    <p className="text-red-400 font-semibold">-₦200,000</p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/3 border border-white/8 rounded-xl p-4">
                <p className="text-white text-sm font-medium mb-4">Balance Overview</p>
                <ResponsiveContainer width="100%" height={140}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{ background: '#1e2035', border: '1px solid #374151', borderRadius: 8, color: '#fff', fontSize: 12 }}
                      formatter={v => [`₦${v.toLocaleString()}`, 'Balance']}
                    />
                    <Area type="monotone" dataKey="balance" stroke="#7c3aed" strokeWidth={2} fill="url(#balanceGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right: Transactions */}
            <div className="bg-white/3 border border-white/8 rounded-xl p-4">
              <p className="text-white text-sm font-medium mb-4">Recent Transactions</p>
              <div className="space-y-3">
                {transactions.map((t, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{t.icon}</span>
                      <span className="text-gray-300 text-sm">{t.name}</span>
                    </div>
                    <span className={`text-sm font-medium ${t.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                      {t.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
