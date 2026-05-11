import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  { name: 'Adewale Okon', role: 'CEO & Co-founder', emoji: '👨🏾‍💼' },
  { name: 'Chisom Eze', role: 'CTO & Co-founder', emoji: '👩🏾‍💻' },
  { name: 'Tunde Balogun', role: 'Head of Product', emoji: '👨🏾‍🎨' },
  { name: 'Amaka Nwosu', role: 'Head of Security', emoji: '👩🏾‍🔬' },
]

const stats = [
  { value: '50,000+', label: 'Active Users' },
  { value: '₦2B+', label: 'Processed Monthly' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.8★', label: 'App Store Rating' },
]

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#080b14]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">About</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Built for Africans,
            <br />
            <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              built for the world
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            FinPay was founded in 2023 with one mission: make financial services fast,
            affordable, and accessible to everyone — starting from Nigeria.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-white text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Financial freedom for the next billion
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We believe everyone deserves access to world-class financial tools,
              regardless of where they live or how much they earn. We're breaking
              down barriers one transfer at a time.
            </p>
            <p className="text-gray-400 leading-relaxed">
              FinPay is licensed by the Central Bank of Nigeria (CBN) and complies
              with all relevant financial regulations to keep your money safe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Licensed & Regulated', icon: '🏛️', desc: 'CBN licensed with full compliance' },
              { title: 'Instant Settlement', icon: '⚡', desc: 'Real-time payment infrastructure' },
              { title: 'Local & Global', icon: '🌍', desc: 'Nigeria-first, but built for the world' },
              { title: 'Community-driven', icon: '🤝', desc: 'Shaped by our users every step' },
            ].map((item) => (
              <div key={item.title} className="bg-white/3 border border-white/8 rounded-xl p-5">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Team</p>
            <h2 className="text-3xl font-bold text-white">The people behind FinPay</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <p className="text-white font-semibold text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Contact</p>
            <h2 className="text-3xl font-bold text-white">Get in touch</h2>
            <p className="text-gray-400 mt-3">We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          </div>

          {sent ? (
            <div className="text-center bg-purple-600/10 border border-purple-500/20 rounded-2xl p-10">
              <p className="text-4xl mb-4">✅</p>
              <p className="text-white font-semibold text-lg">Message sent!</p>
              <p className="text-gray-400 mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
