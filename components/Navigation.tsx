'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="nav h-20">
      <div className="container-custom flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#1A1A1A]">
          Not Dreamstate
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#F5F5F5] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container-custom py-6 space-y-4">
            <Link 
              href="/" 
              className="block text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#666666] hover:text-[#95E1D3] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}