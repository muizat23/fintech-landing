import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for getting started with personal finance.',
    features: [
      '1 bank account',
      'Up to ₦500,000 monthly transfers',
      'Basic analytics',
      'Virtual card',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₦4,900',
    period: 'per month',
    description: 'For individuals who want full control of their finances.',
    features: [
      '5 bank accounts',
      'Unlimited transfers',
      'Advanced analytics & reports',
      '3 virtual cards',
      'Multi-currency wallet',
      'Priority support',
      'Savings goals',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Business',
    price: '₦19,900',
    period: 'per month',
    description: 'Built for teams and growing businesses.',
    features: [
      'Unlimited accounts',
      'Bulk payments',
      'Team access controls',
      'API access',
      'Custom analytics',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#080b14]">
      <Navbar />

      <section className="pt-32 pb-24 px-6 relative">
        {/* Glow */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium mb-3 uppercase tracking-widest">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Start for free. Upgrade when you need more. No hidden fees, ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border ${
                  plan.highlight
                    ? 'bg-linear-to-br from-purple-900/50 to-indigo-900/30 border-purple-500/40 shadow-xl shadow-purple-500/15'
                    : 'bg-white/3 border-white/8'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <p className="text-gray-400 text-sm mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-white text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Free' && (
                    <span className="text-gray-500 text-sm mb-1">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

                <Link
                  to="/dashboard"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${
                    plan.highlight
                      ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-10">
            All plans include 256-bit encryption, 24/7 uptime, and Nigerian bank compliance.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
