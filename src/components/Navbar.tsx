import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, User, Lock } from 'lucide-react';

function AuthModal({ isOpen, onClose, type }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'signup') {
      // Validate password match for signup
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // Signup logic here
      console.log('Signup submitted', formData);
    } else {
      // Login logic here
      console.log('Login submitted', formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === 'signup' ? 'Create Account' : 'Log In'}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {type === 'signup' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {type === 'signup' ? 'Create Account' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile menu state
  const [activeModal, setActiveModal] = useState(null); // Track active modal
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

  const openModal = (type) => {
    setActiveModal(type);
    setIsProfileOpen(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleNavigation = (path) => {
    // Replace with your actual navigation logic
    window.location.href = path;
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
    <>
      <nav className="bg-white shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation('/')} 
                className="flex items-center space-x-2 focus:outline-none"
              >
                <Code2 className="h-8 w-8 text-indigo-600" />
                <span className="font-bold text-xl text-gray-900">DevLearn</span>
              </button>
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
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
                src="https://jsfxqnu1jzqjbn1l.public.blob.vercel-storage.com/Personal/VishnuPhoto-wYC790Oe3AYWhOAGhKPx7z8hm5cMXs.jpeg"
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-300"
                onClick={handleProfileClick}
                onError={(e) => {
                  e.target.src ="https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain"; 
                }}
              />

              {isProfileOpen && (
                <div
                  ref={profileMenuRef}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20 border border-gray-200"
                  style={{ top: '100%' }}
                >
                  <div className="px-4 py-2 text-gray-900 font-semibold">Vishnu Kumar</div>
                  <button 
                    onClick={() => window.open('https://vishnukrchy.github.io/Portfolio/#home', '_blank')}
                    className="w-full text-left block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Portfolio
                  </button>
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="w-full text-left block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => openModal('signup')}
                    className="w-full text-left block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Create Account
                  </button>
                  <button 
                    onClick={() => openModal('login')}
                    className="w-full text-left block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Log In
                  </button>
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
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Authentication Modals */}
      <AuthModal 
        isOpen={activeModal === 'signup'} 
        onClose={closeModal} 
        type="signup" 
      />
      <AuthModal 
        isOpen={activeModal === 'login'} 
        onClose={closeModal} 
        type="login" 
      />
    </>
  );
}

export default Navbar;