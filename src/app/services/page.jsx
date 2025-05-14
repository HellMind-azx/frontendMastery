'use client';

import '@/styles/_services.scss'

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <h1 className="services-hero__title">Наши Услуги</h1>
          <p className="services-hero__description">
            Комплексные решения для вашего бизнеса
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="services-grid__container">
          <h2 className="services-grid__title">Что мы предлагаем</h2>
          <div className="services-grid__items">
            <div className="service-card">
              <div className="service-card__icon">💻</div>
              <h3 className="service-card__title">Веб-разработка</h3>
              <p className="service-card__description">
                Создание современных и функциональных веб-приложений с использованием передовых технологий
              </p>
              <a href="#" className="service-card__link">Подробнее →</a>
            </div>

            <div className="service-card">
              <div className="service-card__icon">📱</div>
              <h3 className="service-card__title">Мобильные приложения</h3>
              <p className="service-card__description">
                Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android
              </p>
              <a href="#" className="service-card__link">Подробнее →</a>
            </div>

            <div className="service-card">
              <div className="service-card__icon">🎨</div>
              <h3 className="service-card__title">UI/UX Дизайн</h3>
              <p className="service-card__description">
                Создание интуитивных и привлекательных пользовательских интерфейсов
              </p>
              <a href="#" className="service-card__link">Подробнее →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta__content">
          <h2 className="services-cta__title">Готовы начать проект?</h2>
          <p className="services-cta__text">
            Свяжитесь с нами для обсуждения вашего следующего проекта
          </p>
          <button className="services-cta__button">
            Связаться с нами
          </button>
        </div>
      </section>
    </main>
  );
}