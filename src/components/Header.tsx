'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = 'px-3 py-2 text-sm font-medium transition-colors';
    const activeClasses = 'text-primary-600 bg-primary-50 rounded-lg';
    const inactiveClasses = 'text-gray-700 hover:text-primary-600';

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = 'block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded-lg';
    const activeClasses = 'text-primary-600 bg-primary-50';
    const inactiveClasses = 'text-gray-700 hover:text-primary-600';

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  useEffect(() => {
    if (pathname !== '/') {
      setIsVisible(true);
      setIsMenuOpen(false);
      return;
    }

    const hero = document.getElementById('home');
    if (!hero) return;

    lastScrollYRef.current = window.scrollY;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const isPastHero = currentScrollY > heroBottom - 96;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;

      setIsVisible(!isPastHero || isScrollingUp);
      lastScrollYRef.current = currentScrollY;
    };

    updateHeaderVisibility();
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderVisibility);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">DashCrafters</h1>
            </div>
          </div>

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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
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
