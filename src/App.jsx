import React from 'react';

export default function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.jpg" alt="Exquisite Motors Logo" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#trust">Trust</a></li>
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
          <video className="hero-video" autoPlay muted loop>
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-line-1">Drive Prestige.</span>
            <span className="hero-line-2">Live Exquisite.</span>
          </h1>
          <p className="hero-subtitle">Experience the world's most exclusive luxury automobiles</p>
          <div className="hero-buttons">
            <a href="#collection" className="cta-button primary">Explore Collection</a>
            <a href="#contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Collection</h2>
            <p className="section-subtitle">Discover the pinnacle of automotive excellence</p>
          </div>
          <div className="collection-grid">
            <div className="car-card">
              <div className="car-image">
                <img src="/aston-martin-db11.jpg" alt="Aston Martin DB11" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">Aston Martin DB11</h3>
                <p className="car-class">Grand Tourer</p>
                <p className="car-price">From $225,000</p>
                <button className="car-action">Inquire Now</button>
              </div>
            </div>
            <div className="car-card">
              <div className="car-image">
                <img src="/landcruiser-lc300-showroom1.jpg" alt="Toyota Land Cruiser LC300" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">Toyota Land Cruiser LC300</h3>
                <p className="car-class">SUV</p>
                <p className="car-price">From $90,000</p>
                <button className="car-action">Inquire Now</button>
              </div>
            </div>
            <div className="car-card">
              <div className="car-image">
                <img src="/toyota-prado-vx-r.jpg" alt="Toyota Prado VX-R" />
                <div className="car-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="car-info">
                <h3 className="car-model">Toyota Prado VX-R</h3>
                <p className="car-class">SUV</p>
                <p className="car-price">From $75,000</p>
                <button className="car-action">Inquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-overlay">
          <div className="services-header">
            <h2 className="services-main-title">Exquisite Services</h2>
            <p className="services-subtitle">Tailored experiences for discerning clients</p>
          </div>
          <div className="services-grid">
            <div className="glass-card">
              <div className="glass-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3 className="glass-card-title">Vehicle Acquisition</h3>
              <p className="glass-card-description">Personalized sourcing and procurement of your dream vehicle from global markets.</p>
            </div>
            <div className="glass-card">
              <div className="glass-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="glass-card-title">Maintenance & Care</h3>
              <p className="glass-card-description">Comprehensive maintenance services to keep your vehicle in pristine condition.</p>
            </div>
            <div className="glass-card">
              <div className="glass-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="glass-card-title">Insurance Solutions</h3>
              <p className="glass-card-description">Premium insurance coverage tailored to your luxury lifestyle and vehicle needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="trust">
        <div className="trust-overlay">
          <div className="trust-header">
            <h2 className="trust-main-title">Trusted By Excellence</h2>
            <p className="trust-subtitle">Partnerships that define prestige</p>
          </div>
          <div className="media-partners-glass">
            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3 className="partner-title">Media Partners</h3>
              <p className="partner-description">Featured in leading automotive publications worldwide.</p>
            </div>
            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="partner-title">Awards & Recognition</h3>
              <p className="partner-description">Multiple industry accolades for service excellence.</p>
            </div>
            <div className="partner-glass-card">
              <div className="partner-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="partner-title">Client Testimonials</h3>
              <p className="partner-description">Hear from our satisfied clientele across the globe.</p>
            </div>
          </div>
          <div className="testimonials-glass-grid">
            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"Exquisite Motors provided an unparalleled experience. Their attention to detail and commitment to excellence is unmatched."</p>
              <div className="testimonial-author">
                <strong>John Smith</strong><br />
                <span>CEO, Tech Innovations</span>
              </div>
            </div>
            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"From selection to delivery, every step was handled with the utmost professionalism. Highly recommended."</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong><br />
                <span>Entrepreneur</span>
              </div>
            </div>
            <div className="testimonial-glass-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">"The team's expertise in luxury vehicles is evident. They made my dream car a reality."</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong><br />
                <span>Business Executive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-overlay">
          <div className="contact-header">
            <h2 className="contact-main-title">Get In Touch</h2>
            <p className="contact-subtitle">Let's discuss your automotive aspirations</p>
          </div>
          <div className="contact-glass-grid">
            <div className="contact-info-glass">
              <div className="contact-glass-header">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact-glass-title">Visit Our Showroom</h3>
                <p className="contact-glass-description">Experience luxury firsthand at our exclusive location.</p>
              </div>
              <div className="contact-details-glass">
                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">info@exquisitemotors.com</span>
                  </div>
                </div>
                <div className="contact-item-glass">
                  <div className="contact-item-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Hours</span>
                    <span className="contact-value">Mon-Sat: 9AM-7PM</span>
                  </div>
                </div>
              </div>
              <div className="social-links-glass">
                <a href="#" className="social-glass-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-glass-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-glass-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-glass-link"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="contact-form-glass">
              <div className="form-glass-header">
                <div className="form-icon">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <h3 className="form-glass-title">Send Us a Message</h3>
                <p className="form-glass-description">We'll respond within 24 hours to discuss your inquiry.</p>
              </div>
              <form>
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-user input-icon"></i>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                </div>
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-envelope input-icon"></i>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-phone input-icon"></i>
                    <input type="tel" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-car input-icon"></i>
                    <select required>
                      <option value="">Select Interest</option>
                      <option value="purchase">Vehicle Purchase</option>
                      <option value="service">Service Inquiry</option>
                      <option value="trade">Trade-In</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group-glass">
                  <div className="input-glass-container">
                    <i className="fas fa-comment input-icon"></i>
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                  </div>
                </div>
                <button type="submit" className="glass-submit-button">
                  Send Message <i className="fas fa-paper-plane"></i>
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
              <img src="/logo.jpg" alt="Exquisite Motors Logo" />
            </div>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#collection">Collection</a>
              <a href="#services">Services</a>
              <a href="#trust">Trust</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Exquisite Motors. All rights reserved. | Drive Prestige. Live Exquisite.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Widget */}
      <div className="whatsapp-chat">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}
