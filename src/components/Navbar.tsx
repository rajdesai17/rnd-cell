import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);

  const menuItems = [
    'Home',
    'Achievements',
    { 
      name: 'Committee',
      subItems: ['Student', 'Teacher']
    },
    'Useful Links',
    'Incubation Center',
    'Contact Us',
  ];

  const handleCommitteeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCommitteeOpen(!isCommitteeOpen);
  };

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
            {menuItems.map((item, index) => (
              typeof item === 'string' ? (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    item === 'Incubation Center'
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ) : (
                <div key={item.name} className="relative">
                  <button
                    onClick={handleCommitteeClick}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {item.name}
                  </button>
                  {isCommitteeOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem}
                            to={subItem === 'Teacher' ? '/teacher' : subItem === 'Student' ? '/student' : '#'}
                            className="block px-4 py-2 text-sm text-white bg-gray-600 hover:bg-gray-500 my-1 mx-2 rounded"
                            role="menuitem"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
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
              typeof item === 'string' ? (
                <a
                  key={item}
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    item === 'Incubation Center'
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ) : (
                <div key={item.name}>
                  <button
                    onClick={handleCommitteeClick}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white flex items-center justify-between"
                  >
                    {item.name}
                  </button>
                  {isCommitteeOpen && (
                    <div className="pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={subItem === 'Teacher' ? '/teacher' : subItem === 'Student' ? '/student' : '#'}
                          className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;