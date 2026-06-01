"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-medium transition-colors ${
      pathname === href || pathname.startsWith(href + "/")
        ? "text-primary font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-secondary-dark/70 backdrop-blur-lg border-b border-white/5 py-4 transition-all">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Premium Brand Logo */}
        <Link href="/" className="text-3xl font-sans font-black text-white flex items-center tracking-tighter transition-opacity hover:opacity-90">
          <span className="text-primary mr-1">Dhaka</span>Founders
        </Link>

        <div className="hidden md:flex space-x-8 items-center font-body">
          <Link href="/directory" className={linkClass("/directory")}>
            Directory
          </Link>
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>

          {/* Auth Controls */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-gray-300 hover:text-white font-medium transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-primary hover:bg-primary-light text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,123,255,0.4)]">
                Join
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              My Dashboard
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-9 h-9',
                },
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-300 hover:text-white transition-colors">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}
