'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/_courses.scss';

export default function Courses() {
  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero__content">
          <h1 className="courses-hero__title">FRONTEND COURSES</h1>
          <p className="courses-hero__subtitle">MASTER THE CRAFT OF WEB DEVELOPMENT</p>
        </div>
      </section>

      <section className="courses-grid">
        <article className="course-card">
          <div className="course-card__header">
            <h2>HTML MASTERY</h2>
            <div className="course-card__level">BEGINNER</div>
          </div>
          <div className="course-card__content">
            <ul className="course-card__list">
              <li>Semantic HTML5</li>
              <li>Forms & Validation</li>
              <li>SEO Basics</li>
              <li>Accessibility</li>
            </ul>
            <Link href="/courses/html" className="course-card__button">
              START COURSE →
            </Link>
          </div>
        </article>

        <article className="course-card">
          <div className="course-card__header">
            <h2>CSS WIZARDRY</h2>
            <div className="course-card__level">INTERMEDIATE</div>
          </div>
          <div className="course-card__content">
            <ul className="course-card__list">
              <li>Flexbox & Grid</li>
              <li>Animations</li>
              <li>Responsive Design</li>
              <li>CSS Architecture</li>
            </ul>
            <Link href="/courses/css" className="course-card__button">
              START COURSE →
            </Link>
          </div>
        </article>

        <article className="course-card">
          <div className="course-card__header">
            <h2>JAVASCRIPT PRO</h2>
            <div className="course-card__level">ADVANCED</div>
          </div>
          <div className="course-card__content">
            <ul className="course-card__list">
              <li>Modern ES6+</li>
              <li>DOM Manipulation</li>
              <li>Async Programming</li>
              <li>Web APIs</li>
            </ul>
            <Link href="/courses/javascript" className="course-card__button">
              START COURSE →
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}