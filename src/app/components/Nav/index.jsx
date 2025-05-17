'use client';

import '@/styles/_nav.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { removeSessionCookie } from '@/utils/cookies';
import { signOut } from 'firebase/auth';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      removeSessionCookie();
      setIsAuthenticated(false);
      router.push('/auth/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link href="/" className="nav__logo">
          FRONTEND<span className="nav__logo-glitch">MASTERY</span>
        </Link>

        <button className="nav__toggle" onClick={toggleMenu}>
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
        </button>

        <ul className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
          {isAuthenticated ? (
            <>
              <li className="nav__item">
                <Link href="/courses" className="nav__link">Courses</Link>
              </li>
              <li className="nav__item">
                <Link href="/users" className="nav__link">Users</Link>
              </li>
              <li className="nav__item">
                <Link href="/projects" className="nav__link">Projects</Link>
              </li>
              <li className="nav__item">
                <Link href="/about" className="nav__link">About</Link>
              </li>
              <li className="nav__item">
                <Link href="/profile" className="nav__link">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item">
                <Link href="/about" className="nav__link">About</Link>
              </li>
              <li className="nav__item">
                <Link href="/auth/login" className="nav__link nav__link--cta">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
