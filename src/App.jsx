import React from 'react';
import './styles.css';
import { useExquisiteCarsInteractions } from './script.js';

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
            <img src="/logo.jpg" alt="Exquisite Cars" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
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
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-line-1">Drive Prestige.</span>
              <span className="hero-line-2">Live Exquisite.</span>
            </h1>
            <p className="hero-subtitle">Experience the world's most exclusive collection of luxury automobiles</p>
            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary">Book a Viewing</a>
              <a href="#collection" className="cta-button secondary">Explore Fleet</a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Elite Collection */}
      <section id="collection" className="collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Current Inventory</h2>
            <p className="section-subtitle">Fresh arrivals and premium vehicles available at Exquisite Cars</p>
          </div>

          <div className="collection-grid">
            <div className="car-card">
              <div className="car-image">
                <img src="/aston-martin-db11.jpg" alt="2022 Aston Martin DB11" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2022 Aston Martin DB11</h3>
                <p className="car-class">Sports Car Excellence</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/toyota-prado-vx-r.jpg" alt="2024 Toyota Land Cruiser Prado VX-R" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2024 Toyota Land Cruiser Prado VX-R</h3>
                <p className="car-class">Luxury Mid-Size SUV</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event12.jpg" alt="2023 Ford Ranger Raptor" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2023 Ford Ranger Raptor</h3>
                <p className="car-class">Performance Off-Road</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event9.jpg" alt="2024 Range Rover HSE D350" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2024 Range Rover HSE D350</h3>
                <p className="car-class">Luxury & Power</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event18.jpg" alt="2024 Toyota Land Cruiser 79 Series" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2024 Toyota Land Cruiser 79 Series</h3>
                <p className="car-class">Ultimate Off-Road</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event11.jpg" alt="2024 Mercedes-Benz G63 AMG" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2024 Mercedes-Benz G63 AMG</h3>
                <p className="car-class">Magno Black Edition</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event7.jpg" alt="Premium Luxury SUV" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">Premium Luxury SUV</h3>
                <p className="car-class">Elite Performance</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event3.jpg" alt="2024 Toyota Hilux GR-Sport" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">2024 Toyota Hilux GR-Sport</h3>
                <p className="car-class">Rugged & Stylish</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>

            <div className="car-card">
              <div className="car-image">
                <img src="/gallery-images/event6.jpg" alt="Toyota Land Cruiser Prado" loading="lazy" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">Toyota Land Cruiser Prado</h3>
                <p className="car-class">Versatile Luxury</p>
                <div className="car-price">Available on Request</div>
                <button className="car-action">Schedule Test Drive</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Trust & Prestige */}
      <section className="trust">
        <div className="trust-overlay">
          <div className="trust-header">
            <h2 className="trust-main-title">TRUSTED EXCELLENCE</h2>
            <p className="trust-subtitle">Endorsed by the world's most prestigious publications and elite clientele</p>
          </div>

          {/* Media Partners Glass Cards */}
          <div className="media-partners-glass">
            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="partner-title">FORBES</h3>
              <p className="partner-description">"Setting the standard for luxury automotive excellence"</p>
            </div>

            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3 className="partner-title">BLOOMBERG</h3>
              <p className="partner-description">"The pinnacle of premium dealership experience"</p>
            </div>

            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="partner-title">ROBB REPORT</h3>
              <p className="partner-description">"Curating the world's most exceptional vehicles"</p>
            </div>
          </div>

          {/* Testimonials Glass Cards */}
          <div className="testimonials-glass-grid">
            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"Exquisite Cars transformed my vision into reality. The attention to detail and personalized service exceeded my expectations. Truly a world-class experience."</p>
              <div className="testimonial-author">
                <strong>Alexander Rothschild</strong>
                <span>Private Equity Executive</span>
              </div>
            </div>

            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"From selection to delivery, every moment was flawless. The team's expertise and dedication to excellence is unmatched in the luxury automotive industry."</p>
              <div className="testimonial-author">
                <strong>Victoria Pemberton</strong>
                <span>Luxury Real Estate Developer</span>
              </div>
            </div>

            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"Having worked with many luxury dealers worldwide, Exquisite Cars stands alone. Their curated collection and white-glove service are simply extraordinary."</p>
              <div className="testimonial-author">
                <strong>Marcus Wellington</strong>
                <span>Investment Banker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Glass Morphism */}
      <section id="contact" className="contact">
        <div className="contact-overlay">
          <div className="contact-header">
            <h2 className="contact-main-title">BEGIN YOUR JOURNEY</h2>
            <p className="contact-subtitle">Experience the pinnacle of automotive luxury with personalized service</p>
          </div>

          <div className="contact-glass-grid">
            {/* Contact Information Glass Card */}
            <div className="contact-info-glass">
              <div className="contact-glass-header">
                <div className="contact-icon">
                  <i className="fas fa-concierge-bell"></i>
                </div>
                <h3 className="contact-glass-title">LUXURY CONCIERGE SERVICE</h3>
                <p className="contact-glass-description">Our dedicated team provides white-glove service tailored to your discerning preferences</p>
              </div>

              <div className="contact-details-glass">
                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Exclusive Hotline</span>
                    <span className="contact-value">+1 (555) 123-LUXURY</span>
                  </div>
                </div>

                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Private Email</span>
                    <span className="contact-value">concierge@exquisitecars.com</span>
                  </div>
                </div>

                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Premier Location</span>
                    <span className="contact-value">Beverly Hills, California</span>
                  </div>
                </div>

                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Available Hours</span>
                    <span className="contact-value">Mon-Sat: 9AM-7PM | Sun: By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="social-links-glass">
                <a href="#" aria-label="Instagram" className="social-glass-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-glass-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="YouTube" className="social-glass-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="Twitter" className="social-glass-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* Contact Form Glass Card */}
            <div className="contact-form-glass">
              <div className="form-glass-header">
                <div className="form-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3 className="form-glass-title">PRIVATE CONSULTATION REQUEST</h3>
                <p className="form-glass-description">Share your vision and we'll curate the perfect luxury automotive experience</p>
              </div>

              <form className="contact-form" id="contactForm">
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-user input-icon"></i>
                    <input type="text" id="name" name="name" placeholder="Full Name" required />
                  </div>
                </div>

                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-envelope input-icon"></i>
                    <input type="email" id="email" name="email" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-car input-icon"></i>
                    <select id="interest" name="interest" required>
                      <option value="">Service Interest</option>
                      <option value="purchase">Luxury Vehicle Purchase</option>
                      <option value="lease">Premium Lease Program</option>
                      <option value="consultation">Private Consultation</option>
                      <option value="testdrive">Exclusive Test Drive Experience</option>
                      <option value="collection">Private Collection Viewing</option>
                      <option value="customization">Bespoke Customization</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-comment-dots input-icon"></i>
                    <textarea id="message" name="message" placeholder="Tell us about your luxury automotive vision..." rows="4"></textarea>
                  </div>
                </div>

                <button type="submit" className="glass-submit-button">
                  <i className="fas fa-paper-plane"></i>
                  <span>SUBMIT EXCLUSIVE INQUIRY</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="Exquisite Cars" style={{height: '30px'}} />
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
