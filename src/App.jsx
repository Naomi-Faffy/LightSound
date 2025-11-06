import React from 'react';
import { Link } from 'react-router-dom';
import { useExquisiteCarsInteractions } from './script.js';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  useExquisiteCarsInteractions();

  return (
    <div className="App">
      {/* WhatsApp Floating Chat */}
      <div className="whatsapp-chat">
        <a href="https://wa.me/1234567890" target="_blank" aria-label="WhatsApp Chat" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/gallery-images/logoo.png" alt="Exquisite Cars" style={{height: '180px'}} />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/gallery-images/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content" style={{opacity: 1, transform: 'none'}}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-line-1" style={{opacity: 1, animation: 'none'}}>Drive Prestige.</span>
              <span className="hero-line-2" style={{opacity: 1, animation: 'none'}}>Live Exquisite.</span>
            </h1>
            <p className="hero-subtitle" style={{opacity: 1, animation: 'none'}}>Experience the world's most exclusive collection of luxury automobiles</p>
            <div className="hero-buttons" style={{opacity: 1, animation: 'none'}}>
              <a href="#contact" className="cta-button primary">Book a Viewing</a>
              <Link to="/gallery" className="cta-button secondary">Explore Gallery</Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/gallery-images/logoo.png" alt="Exquisite Cars" style={{height: '110px'}} />
            </div>

            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer-social">
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Exquisite Cars. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
