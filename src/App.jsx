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
        <a href="https://wa.me/263772636157" target="_blank" aria-label="WhatsApp Chat" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/gallery-images/logoo.png" alt="Sound Light" style={{height: 'clamp(60px, 12vw, 220px)'}} />
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
            <h1 className="hero-title" style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
              <span className="hero-line-1" style={{opacity: 1, animation: 'none'}}>Premium Sound.</span>
              <span className="hero-line-2" style={{opacity: 1, animation: 'none'}}>World-Class Lighting.</span>
            </h1>
            <p className="hero-subtitle" style={{opacity: 1, animation: 'none'}}>Cutting-edge lighting and premium sound for every event</p>
            <div className="hero-buttons" style={{opacity: 1, animation: 'none'}}>
              <a href="#contact" className="cta-button primary" style={{borderColor: '#2A4CFF'}}>Book Your Event</a>
              <Link to="/gallery" className="cta-button secondary" style={{borderColor: '#2A4CFF'}}>View Our Work</Link>
            </div>
          </div>
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
      <footer className="footer" style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0e1f 50%, #000000 100%)",
        padding: "3rem 2rem",
        borderTop: "none",
        margin: 0,
        maxWidth: "100%",
        borderRadius: 0
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            padding: "1.5rem 3rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            textAlign: "center"
          }}>
            <p style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.9rem",
              margin: 0,
              fontWeight: "400"
            }}>
              &copy; 2024 Sound Light by Mediatainment.zw™️. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
