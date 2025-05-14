'use client';

import '@/styles/_nav.scss';
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { registeredLinks, nonRegisteredLinks } from '@/store';
import { removeSessionCookie } from '@/utils/cookies';
import { signOut } from 'firebase/auth';

const Nav = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = async (e) => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
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
          <li className="nav__item">
            <Link href="/courses" className="nav__link">
              Courses
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/projects" className="nav__link">
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/auth/login" className="nav__link nav__link--cta">
              Login
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="nav__link nav__link--logout" id='logout-button'>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;