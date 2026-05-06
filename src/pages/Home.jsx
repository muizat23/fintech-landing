export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          FintechX
        </h1>

        <div className="hidden md:flex space-x-8 text-gray-600">
          <a className="hover:text-blue-600 transition">Home</a>
          <a className="hover:text-blue-600 transition">Features</a>
          <a className="hover:text-blue-600 transition">Pricing</a>
          <a className="hover:text-blue-600 transition">About</a>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm mb-6">
          🚀 Next-gen digital banking
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Smart, Fast & Secure <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Financial Control
          </span>
        </h1>

        <p className="text-gray-500 mt-6 max-w-xl text-lg">
          Manage money, send payments, and track your finances with a modern
          fintech experience built for speed and simplicity.
        </p>

        <div className="mt-8 flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-full hover:border-gray-500 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-16">

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-blue-600 text-2xl mb-3">⚡</div>
          <h2 className="font-semibold text-lg mb-2">Instant Transfers</h2>
          <p className="text-gray-500">
            Send and receive money instantly without delays or hidden fees.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-indigo-600 text-2xl mb-3">🔒</div>
          <h2 className="font-semibold text-lg mb-2">Bank-Level Security</h2>
          <p className="text-gray-500">
            Your data is encrypted and protected with enterprise-grade security.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="text-purple-600 text-2xl mb-3">📊</div>
          <h2 className="font-semibold text-lg mb-2">Smart Analytics</h2>
          <p className="text-gray-500">
            Track spending and understand your financial habits easily.
          </p>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take control of your finances?
        </h2>

        <p className="opacity-80 mb-6">
          Join thousands of users already using FintechX.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Create Free Account
        </button>
      </section>

    </div>
  );
}