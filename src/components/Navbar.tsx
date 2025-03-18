import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAchievementsDropdownOpen, setIsAchievementsDropdownOpen] = useState(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Useful Links', path: '/useful-links' },
    { name: 'Incubation Center', path: '/incubation-center' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 relative z-10">
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
          <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-3 text-base font-medium transition-colors rounded-md ${
                  location.pathname === item.path
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Achievements Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAchievementsDropdownOpen(!isAchievementsDropdownOpen)}
                className={`px-5 py-3 text-base font-medium transition-colors rounded-md ${
                  location.pathname.startsWith('/achievements')
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Achievements
              </button>
              {isAchievementsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg z-50">
                  <Link
                    to="/achievements/student"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={() => setIsAchievementsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={() => setIsAchievementsDropdownOpen(false)}
                  >
                    Staff
                  </Link>
                </div>
              )}
            </div>

            {/* Committee Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCommitteeDropdownOpen(!isCommitteeDropdownOpen)}
                className={`px-5 py-3 text-base font-medium transition-colors rounded-md ${
                  location.pathname.startsWith('/committee')
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Committee
              </button>
              {isCommitteeDropdownOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg z-50">
                  <Link
                    to="/teacher"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={() => setIsCommitteeDropdownOpen(false)}
                  >
                    Teacher
                  </Link>
                  <Link
                    to="/student"
                    className="block px-5 py-3 text-base text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={() => setIsCommitteeDropdownOpen(false)}
                  >
                    Student
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
                onClick={() => setIsAchievementsDropdownOpen(!isAchievementsDropdownOpen)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname.startsWith('/achievements')
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active dropdown
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Achievements
              </button>
              {isAchievementsDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    to="/achievements/student"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsAchievementsDropdownOpen(false)}
                  >
                    Student
                  </Link>
                  <Link
                    to="/achievements/staff"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsAchievementsDropdownOpen(false)}
                  >
                    Staff
                  </Link>
                </div>
              )}
            </div>

            {/* Committee Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsCommitteeDropdownOpen(!isCommitteeDropdownOpen)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname.startsWith('/committee')
                    ? 'text-blue-400 hover:text-blue-300' // Highlight active dropdown
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Committee
              </button>
              {isCommitteeDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    to="/teacher"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsCommitteeDropdownOpen(false)}
                  >
                    Teacher
                  </Link>
                  <Link
                    to="/student"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-600 hover:text-white"
                    onClick={() => setIsCommitteeDropdownOpen(false)}
                  >
                    Student
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