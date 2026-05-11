import { Link } from 'react-router-dom'

const links = {
  Product: ['Features', 'Pricing', 'Dashboard', 'Security'],
  Company: ['About', 'Contact', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-xl font-bold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              FinPay
            </Link>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Smart, fast, and secure banking for the modern world.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-semibold text-sm mb-4">{category}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <span className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 FinPay. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">Built with security and privacy in mind.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
