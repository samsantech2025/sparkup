"use client";
import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '../constants/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[SITE_CONFIG.PRIMARY_COLOR]">
              {SITE_CONFIG.COMPANY_NAME}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-[SITE_CONFIG.PRIMARY_COLOR] hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}