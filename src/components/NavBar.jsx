import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Certifications',
    'Achievements',
    'Contact',
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name with green gradient */}
        <h1 className="text-2xl font-bold text-white hover:text-green-400 transition duration-300">
          Nehanjali Bangaru
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a href={`#${item.toLowerCase()}`} className="py-1">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-md transition duration-200">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-green-400 py-1"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
