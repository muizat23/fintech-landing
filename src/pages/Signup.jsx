import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirm: '', agreed: false })
  const [showPassword, setShowPassword] = useState(false)

  const passwordStrength = () => {
    const p = form.password
    if (p.length === 0) return null
    if (p.length < 6) return { label: 'Weak', color: 'bg-red-500', width: 'w-1/4' }
    if (p.length < 10) return { label: 'Fair', color: 'bg-yellow-500', width: 'w-2/4' }
    if (!/[A-Z]/.test(p) || !/[0-9]/.test(p)) return { label: 'Good', color: 'bg-blue-500', width: 'w-3/4' }
    return { label: 'Strong', color: 'bg-green-500', width: 'w-full' }
  }

  function handleStep1(e) {
    e.preventDefault()
    setStep(2)
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  const strength = passwordStrength()

  return (
    <div className="min-h-screen bg-[#080b14] flex items-center justify-center px-6 py-12 relative">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            FinPay
          </Link>
          <h1 className="text-white text-2xl font-bold mt-6 mb-2">Create your account</h1>
          <p className="text-gray-400 text-sm">Join 50,000+ users managing money smarter</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-1 rounded-full bg-linear-to-r from-purple-600 to-indigo-600" />
          <div className={`flex-1 h-1 rounded-full transition-all duration-500 ${step === 2 ? 'bg-linear-to-r from-purple-600 to-indigo-600' : 'bg-white/10'}`} />
        </div>
        <p className="text-gray-500 text-xs mb-6 text-center">Step {step} of 2</p>

        <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
          {step === 1 ? (
            <form onSubmit={handleStep1} className="space-y-5">
              <div>
                <label className="text-gray-400 text-sm block mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Continue
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-400 text-sm">Password</label>
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/60 transition-colors"
                  placeholder="At least 8 characters"
                />
                {strength && (
                  <div className="mt-2">
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div className={`h-1 rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{strength.label} password</p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-2">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={form.confirm}
                  onChange={e => setForm({ ...form, confirm: e.target.value })}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition-colors ${
                    form.confirm && form.confirm !== form.password
                      ? 'border-red-500/60'
                      : 'border-white/10 focus:border-purple-500/60'
                  }`}
                  placeholder="Repeat your password"
                />
                {form.confirm && form.confirm !== form.password && (
                  <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  checked={form.agreed}
                  onChange={e => setForm({ ...form, agreed: e.target.checked })}
                  className="w-4 h-4 mt-0.5 accent-purple-500 shrink-0"
                />
                <label htmlFor="terms" className="text-gray-400 text-sm leading-relaxed">
                  I agree to FinPay's{' '}
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer">Terms of Service</span>{' '}
                  and{' '}
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={form.confirm !== form.password || !form.agreed}
                  className="flex-1 bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
