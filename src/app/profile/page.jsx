'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import '@/styles/_profile.scss';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/auth/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="profile-loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header__avatar">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" />
            ) : (
              <div className="profile-header__avatar-placeholder">
                {user?.email?.[0].toUpperCase()}
              </div>
            )}
          </div>
          <h1 className="profile-header__title">
            {user?.displayName || 'User Profile'}
          </h1>
          <p className="profile-header__email">{user?.email}</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2 className="profile-section__title">Personal Information</h2>
            <div className="profile-info">
              <div className="profile-info__group">
                <label className="profile-info__label">Email</label>
                <p className="profile-info__value">{user?.email}</p>
              </div>
              <div className="profile-info__group">
                <label className="profile-info__label">Account Created</label>
                <p className="profile-info__value">
                  {user?.metadata.creationTime}
                </p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section__title">Account Settings</h2>
            <div className="profile-actions">
            
              <button className="profile-actions__button">
                Change Password
              </button>
              <button className="profile-actions__button profile-actions__button--danger">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}