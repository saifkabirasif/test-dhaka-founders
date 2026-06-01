import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-secondary-dark border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-sans font-bold text-white flex items-center gap-2">
          <span className="text-primary">Dhaka</span>Founders
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/directory" className="text-gray-300 hover:text-white transition-colors">Directory</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
          <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition-colors">
            Sign In
          </button>
        </div>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
