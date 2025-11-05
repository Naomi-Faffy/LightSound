
import { useExquisiteCarsInteractions } from './script.js';
export default function App() {
  useExquisiteCarsInteractions();

  return (
    <div className="App">
      {/* WhatsApp Floating Chat */}
// ... existing code
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
// ... existing code
            <p className="hero-subtitle" style={{opacity: 1, animation: 'none'}}>Experience the world's most exclusive collection of luxury automobiles</p>
            <div className="hero-buttons" style={{opacity: 1, animation: 'none'}}>
              <a href="#contact" className="cta-button primary">Book a Viewing</a>
              <a href="#gallery" className="cta-button secondary">Explore Fleet</a>
            </div>
          </div>
        </div>

// ... existing code
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">A glimpse into our world of automotive excellence</p>
          </div>
          <div className="gallery-grid">
            {Array.from({ length: 20 }, (_, i) => (
              <div className="gallery-item" key={i}>
                <img src={`/gallery-images/event${i + 1}.jpg`} alt={`Event ${i + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Trust & Prestige */}
      <section className="trust">
// ... existing code
