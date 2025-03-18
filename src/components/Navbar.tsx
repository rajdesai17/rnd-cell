import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Committee', path: '#' },
    { name: 'Useful Links', path: '#' },
    { name: 'Incubation Center', path: '#' },
    { name: 'Contact Us', path: '#' },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-3"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-3 text-base font-medium transition-colors ${
                  item.name === 'Incubation Center'
                    ? 'text-blue-400 hover:text-blue-300'
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
                className="flex items-center px-5 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                Achievements
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg z-50 overflow-hidden">
                  <Link
                    to="/achievements/student"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
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
                className={`block px-5 py-3 rounded-md text-base font-medium ${
                  item.name === 'Incubation Center'
                    ? 'text-blue-400 hover:text-blue-300'
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
                className="block w-full text-left px-5 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none"
              >
                Achievements
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    to="/achievements/student"
                    className="block px-5 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-5 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
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