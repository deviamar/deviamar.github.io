import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research Projects', path: '/research' },
    { name: 'Outreach', path: '/outreach' },
    { name: 'Awards', path: '/awards' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/30 z-40 py-1.5">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-8">
        <Link to="/" className="text-xl font-bold text-gray-500">
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
                    : 'text-slate-500 hover:text-blue-500'
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

