import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Outreach', path: '/outreach' },
    { name: 'Awards', path: '/awards' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
        <Link to="/" className="text-xl font-bold text-slate-700">
          Devi Amarsaikhan
        </Link>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-medium transition-colors capitalize ${
                  location.pathname === item.path
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

