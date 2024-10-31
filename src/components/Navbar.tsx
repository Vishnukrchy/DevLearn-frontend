// Navbar Component
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile menu state
  const profileMenuRef = useRef(null); // Reference for the profile menu

  const navItems = [
    { path: '/frontend', label: 'Frontend' },
    { path: '/backend', label: 'Backend' },
    { path: '/database', label: 'Database' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
  };

  // Close only the profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg relative z-10"> {/* Set relative positioning for header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">DevLearn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Profile Menu */}
          <div className="relative flex items-center">
            <img
             src="src/assets/pesonal/pesonalImage.jpeg"
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-300"
              onClick={handleProfileClick}
            />
            {isProfileOpen && (
              <div
                ref={profileMenuRef}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20 border border-gray-200"
                style={{ top: '100%' }} // Positioning it below the profile image
              >
                <div className="px-4 py-2 text-gray-900 font-semibold">Vishnu Kumar</div>
                <Link to="https://vishnukrchy.github.io/Portfolio/#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Portfolio
                </Link>
                <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                  About
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
