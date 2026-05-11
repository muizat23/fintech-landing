import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-linear-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to take control?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join over 50,000 users who manage their finances smarter with FinPay.
              Set up your account in minutes — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
              >
                Create Free Account
              </Link>
              <Link
                to="/about"
                className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">No credit card required &bull; Free forever plan available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
