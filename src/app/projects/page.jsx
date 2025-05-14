'use client';

import React from 'react';
import '@/styles/_projects.scss';

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__content">
          <h1 className="projects-hero__title">PROJECTS</h1>
          <div className="projects-hero__subtitle">DIGITAL BRUTALISM IN ACTION</div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="projects-grid__container">
          <div className="project-card">
            <div className="project-card__header">
              <h2>CYBER PUNK</h2>
              <span className="project-card__tag">FRONTEND</span>
            </div>
            <div className="project-card__content">
              <p>A brutalist e-commerce platform with glitch aesthetics</p>
              <div className="project-card__tech">
                <span>React</span>
                <span>SCSS</span>
                <span>Node.js</span>
              </div>
              <a href="#" className="project-card__link">VIEW PROJECT →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__header">
              <h2>DIGITAL CHAOS</h2>
              <span className="project-card__tag">FULLSTACK</span>
            </div>
            <div className="project-card__content">
              <p>Social media platform with brutalist design principles</p>
              <div className="project-card__tech">
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <a href="#" className="project-card__link">VIEW PROJECT →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__header">
              <h2>RAW DATA</h2>
              <span className="project-card__tag">UI/UX</span>
            </div>
            <div className="project-card__content">
              <p>Data visualization with brutalist aesthetics</p>
              <div className="project-card__tech">
                <span>D3.js</span>
                <span>SVG</span>
                <span>Canvas</span>
              </div>
              <a href="#" className="project-card__link">VIEW PROJECT →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}