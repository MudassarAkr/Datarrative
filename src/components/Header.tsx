'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors";
    const activeClasses = "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-lg";
    const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded-lg";
    const activeClasses = "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20";
    const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">DashCrafters</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link href="/" className={getLinkClasses('/')}>Home</Link>
              <Link href="/services" className={getLinkClasses('/services')}>Services</Link>
              <Link href="/portfolio" className={getLinkClasses('/portfolio')}>Portfolio</Link>
              <Link href="/about" className={getLinkClasses('/about')}>About</Link>
              <Link href="/contact" className={getLinkClasses('/contact')}>Contact</Link>
              <Link href="/blog" className={getLinkClasses('/blog')}>Blog</Link>
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <Link href="/" onClick={closeMenu} className={getMobileLinkClasses('/')}>Home</Link>
              <Link href="/services" onClick={closeMenu} className={getMobileLinkClasses('/services')}>Services</Link>
              <Link href="/portfolio" onClick={closeMenu} className={getMobileLinkClasses('/portfolio')}>Portfolio</Link>
              <Link href="/about" onClick={closeMenu} className={getMobileLinkClasses('/about')}>About</Link>
              <Link href="/contact" onClick={closeMenu} className={getMobileLinkClasses('/contact')}>Contact</Link>
              <Link href="/blog" onClick={closeMenu} className={getMobileLinkClasses('/blog')}>Blog</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

