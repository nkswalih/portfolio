import React from 'react';
import { ExternalLink } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md border-b border-white/5 bg-black/20">
      {/* Logo */}
      <div className="group cursor-pointer">
        <div className="text-2xl font-bold border border-white/20 w-10 h-10 flex items-center justify-center rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out font-mono">
          <img src='./src/assets/profile_photo_2.jpg' className=' rounded-md h-9 w-9'/>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 text-[13px] uppercase tracking-widest opacity-60">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:opacity-100 hover:tracking-[0.3em] transition-all duration-300 ease-out relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
          </a>
        ))}
      </div>

      {/* Resume Button */}
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button
        className="flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full text-xs hover:bg-white hover:text-black transition-all duration-300 group">
          Resume <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </a>
    </nav>
  );
};

export default Navbar;