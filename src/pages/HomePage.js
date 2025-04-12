import React from 'react';
import './HomePage.css';
import HPimg from '../SAKOOL/boy-new-first-page.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1>Apna <span className="highlight">Academy</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur. Suspendisse ut sed tincidunt porttitor consequat eleifend nibh a.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={HPimg} alt="Students" />
        </div>
      </section>

      <section className="news">
        <h3>Latest News</h3>
        <ul>
          <li>📌 Lorem ipsum dolor sit amet consectetur.</li>
          <li>📌 Suspendisse ut sed tincidunt porttitor.</li>
          <li>📌 Consequat eleifend nibh a lorem.</li>
        </ul>
      </section>

      <footer className="footer-banner">
        Admission Open for 2025–26 Batch. Offering CBSE Board Education with latest Education Policy from Nursery to Class XII with innovative Learning.
      </footer>
    </div>
  );
};

export default HomePage;
