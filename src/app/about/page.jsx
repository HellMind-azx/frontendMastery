'use client';

import React from 'react';
import '@/styles/_about.scss';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__title">ABOUT US</h1>
          <div className="about-hero__subtitle">BREAKING THE FRONTEND MATRIX</div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h2 className="about-card__title">MISSION</h2>
            <p className="about-card__text">
              We're here to deconstruct frontend development. No sugar coating.
              Raw knowledge. Pure skills. Breaking conventional learning patterns.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card__title">APPROACH</h2>
            <p className="about-card__text">
              Brutalist education: stripped down to essentials.
              Learn by breaking things. Rebuild stronger.
              Master the chaos of modern web development.
            </p>
          </div>

          <div className="about-card about-card--full">
            <h2 className="about-card__title">MANIFESTO</h2>
            <ul className="about-card__list">
              <li>CODE IS RAW</li>
              <li>DESIGN IS HONEST</li>
              <li>FUNCTION OVER FORM</li>
              <li>EMBRACE THE GLITCH</li>
            </ul>
          </div>
        </div>

        <div className="about-feature">
          <div className="about-feature__content">
            <h2 className="about-feature__title">JOIN THE REVOLUTION</h2>
            <p className="about-feature__text">
              Break free from traditional learning.
              Master frontend development through
              raw, unfiltered knowledge transfer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}