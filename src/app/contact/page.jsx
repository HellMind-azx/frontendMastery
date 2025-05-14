'use client';

import React from 'react';

import '@/styles/_contact.scss';

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Свяжитесь с нами</h1>
          <p className="contact-hero__description">
            Мы всегда готовы помочь вам с вашим проектом
          </p>
        </div>
      </section>

      <section className="contact-form">
        <div className="contact-form__container">
          <h2 className="contact-form__title">Отправить сообщение</h2>
          <form>
            <div className="contact-form__group">
              <label className="contact-form__label">Ваше имя</label>
              <input 
                type="text" 
                className="contact-form__input" 
                placeholder="Введите ваше имя"
                required 
              />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label">Email</label>
              <input 
                type="email" 
                className="contact-form__input" 
                placeholder="Введите ваш email"
                required 
              />
            </div>
            <div className="contact-form__group">
              <label className="contact-form__label">Сообщение</label>
              <textarea 
                className="contact-form__textarea" 
                placeholder="Введите ваше сообщение"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-form__button">
              Отправить
            </button>
          </form>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-info__container">
          <div className="contact-info__grid">
            <div className="contact-info__item">
              <div className="contact-info__icon">📍</div>
              <h3 className="contact-info__title">Адрес</h3>
              <p className="contact-info__text">
                ул. Примерная, 123<br />
                Город, 123456
              </p>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">📞</div>
              <h3 className="contact-info__title">Телефон</h3>
              <p className="contact-info__text">
                +7 (999) 123-45-67<br />
                +7 (999) 765-43-21
              </p>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">✉️</div>
              <h3 className="contact-info__title">Email</h3>
              <p className="contact-info__text">
                info@example.com<br />
                support@example.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__container">
          {/* Here you can integrate your map component */}
        </div>
      </section>
    </main>
  );
}