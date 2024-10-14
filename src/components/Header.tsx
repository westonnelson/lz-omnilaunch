import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Rocket } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-accent flex items-center">
            <Rocket size={32} className="mr-2 text-accent" />
            <span className="text-black dark:text-white">OmniLaunch</span>
          </Link>
          <div className="flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-4">
              {theme === 'light' ? <Moon size={24} className="text-black" /> : <Sun size={24} className="text-white" />}
            </button>
            <button className="md:hidden text-black dark:text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="md:flex md:space-x-4 md:justify-end">
            <li><Link to="/" className="block py-2 text-black dark:text-white hover:text-accent" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block py-2 text-black dark:text-white hover:text-accent" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/ola-token" className="block py-2 text-black dark:text-white hover:text-accent" onClick={toggleMenu}>OLA Token</Link></li>
            <li><Link to="/dashboard" className="block py-2 text-black dark:text-white hover:text-accent" onClick={toggleMenu}>Dashboard</Link></li>
            <li>
              <button className="w-full md:w-auto bg-accent text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors mt-2 md:mt-0">
                Buy OLA
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;