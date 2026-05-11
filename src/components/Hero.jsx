import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-purple-400 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Next-generation digital banking
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Banking Built for
          <br />
          <span className="bg-linear-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            the Future
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Send money instantly, track your spending, and grow your wealth — all
          in one beautifully designed platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pricing"
            className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            Start for Free
          </Link>
          <Link
            to="/dashboard"
            className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            View Dashboard
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No monthly fees
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Bank-level security
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Instant transfers
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            50k+ active users
          </div>
        </div>
      </div>
    </section>
  )
}
