// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg.webp'; // Your logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-12  left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="bg-white/20 backdrop-blur-lg px-12 py-4 rounded-full flex items-center justify-between text-white text-base shadow-xl border border-white/30">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="LightOS Logo" className="h-8 w-8" />
          <span className="font-bold tracking-wide">LightOS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-9">
          <a href="#home" className="hover:text-lime-400 transition-colors">Home</a>
          <a href="#what-you-do" className="hover:text-lime-400 transition-colors">What You Do</a>
          <a href="#how-it-works" className="hover:text-lime-400 transition-colors">How It Works</a>
          <a href="#dashboard" className="hover:text-lime-400 transition-colors">Dashboard</a>
          <a href="#impact" className="hover:text-lime-400 transition-colors">Impact</a>
          <a href="#cta" className="hover:text-lime-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-4 space-y-4 text-white">
          <a href="#home" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#what-you-do" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>What You Do</a>
          <a href="#how-it-works" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#dashboard" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>Dashboard</a>
          <a href="#impact" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#cta" className="block hover:text-lime-400" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
