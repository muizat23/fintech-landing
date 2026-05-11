import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080b14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          FinPay
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-gray-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-sm bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-gray-400"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1120] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
