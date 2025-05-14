'use client';

import React from 'react';
import '@/styles/_home.scss';

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero__glitch-container">
          <h1 className="hero__title">FRONTEND<br />MASTERY</h1>
          <div className="hero__glitch">FRONTEND<br />MASTERY</div>
          <div className="hero__glitch">FRONTEND<br />MASTERY</div>
        </div>
        <p className="hero__subtitle">LEARN. CODE. BREAK. REBUILD.</p>
      </section>

      <section className="learning-paths">
        <h2 className="section-title">LEARNING PATHS</h2>
        <div className="learning-paths__grid">
          <div className="learning-card">
            <div className="learning-card__header">HTML</div>
            <div className="learning-card__content">
              <p>Structure is everything</p>
              <div className="learning-card__tag">BEGINNER</div>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-card__header">CSS</div>
            <div className="learning-card__content">
              <p>Style with attitude</p>
              <div className="learning-card__tag">INTERMEDIATE</div>
            </div>
          </div>

          <div className="learning-card">
            <div className="learning-card__header">JAVASCRIPT</div>
            <div className="learning-card__content">
              <p>Make it interactive</p>
              <div className="learning-card__tag">ADVANCED</div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">FEATURED LESSONS</h2>
        <div className="featured__container">
          <article className="featured-card">
            <div className="featured-card__noise"></div>
            <h3>GRID SYSTEMS</h3>
            <p>Master CSS Grid Layout</p>
            <div className="featured-card__cta">START →</div>
          </article>

          <article className="featured-card">
            <div className="featured-card__noise"></div>
            <h3>ANIMATIONS</h3>
            <p>Create dynamic interfaces</p>
            <div className="featured-card__cta">START →</div>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__content">
          <h2>START LEARNING NOW</h2>
          <div className="cta-section__buttons">
            <button className="cta-button">JOIN FREE</button>
            <button className="cta-button cta-button--outline">EXPLORE</button>
          </div>
        </div>
      </section>
    </main>
  );
}