'use client';

import React, { useState } from 'react';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/_register.scss';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h1 className="register-header__title">CREATE ACCOUNT</h1>
        </div>
        
        <form className="register-form" onSubmit={handleSubmit}>
          {error && <div className="register-form__error">{error}</div>}
          
          <div className="register-form__group">
            <label htmlFor="email" className="register-form__label">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              className="register-form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="register-form__group">
            <label htmlFor="password" className="register-form__label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="register-form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="register-form__group">
            <label htmlFor="confirm-password" className="register-form__label">
              CONFIRM PASSWORD
            </label>
            <input
              id="confirm-password"
              type="password"
              className="register-form__input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-form__button">
            CREATE →
          </button>
        </form>

        <div className="register-footer">
          <Link href="/auth/login" className="register-footer__link">
            ALREADY HAVE AN ACCOUNT? LOGIN →
          </Link>
        </div>
      </div>
    </div>
  );
}