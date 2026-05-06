// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="font-bold text-xl">Fintech</h1>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}