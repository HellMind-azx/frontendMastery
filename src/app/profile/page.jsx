'use client';

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import '@/styles/_profile.scss';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <section className="profile-hero">
        <div className="profile-hero__content">
          <h1 className="profile-hero__title">PROFILE</h1>
          <div className="profile-hero__subtitle">USER CONTROL PANEL</div>
        </div>
      </section>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-card__header">
            <h2>USER INFO</h2>
            <button onClick={handleLogout} className="profile-card__logout">
              LOGOUT →
            </button>
          </div>
          
          <div className="profile-card__content">
            <div className="profile-info">
              <div className="profile-info__item">
                <span className="profile-info__label">EMAIL</span>
                <span className="profile-info__value">{user.email}</span>
              </div>
              <div className="profile-info__item">
                <span className="profile-info__label">MEMBER SINCE</span>
                <span className="profile-info__value">
                  {new Date(user.metadata.creationTime).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stats-card">
            <h3>COURSES</h3>
            <span className="stats-card__number">0</span>
            <span className="stats-card__label">COMPLETED</span>
          </div>
          <div className="stats-card">
            <h3>PROJECTS</h3>
            <span className="stats-card__number">0</span>
            <span className="stats-card__label">FINISHED</span>
          </div>
        </div>
      </div>
    </div>
  );
}