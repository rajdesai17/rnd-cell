import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Committee', path: '/committee' },
    { name: 'Useful Links', path: '/useful-links' },
    { name: 'Incubation Center', path: '/incubation-center' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active page
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Achievements Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/achievements')
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active dropdown
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Achievements
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg">
                  <Link
                    to="/achievements/student"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Staff
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active page
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Achievements Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname.startsWith('/achievements')
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active dropdown
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Achievements
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    to="/achievements/student"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Staff
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;