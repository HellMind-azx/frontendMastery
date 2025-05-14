'use client';

import React, { useState } from 'react';
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import '@/styles/_login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (error) {
      setError('Failed to sign in with Google.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-header__title">LOGIN</h1>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="login-form__error">{error}</div>}
          
          <div className="login-form__group">
            <label htmlFor="email" className="login-form__label">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              className="login-form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-form__group">
            <label htmlFor="password" className="login-form__label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="login-form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-form__button">
            ENTER →
          </button>

          <button 
            type="button" 
            className="login-form__google-button"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle /> SIGN IN WITH GOOGLE
          </button>
        </form>

        <div className="login-footer">
          <Link href="/auth/register" className="login-footer__link">
            NO ACCOUNT? CREATE ONE →
          </Link>
        </div>
      </div>
    </div>
  );
}