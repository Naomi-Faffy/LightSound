// Exquisite Cars - Interactive Features
import React, { useEffect } from 'react';

export const useExquisiteCarsInteractions = () => {
  useEffect(() => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    const handleHamburgerClick = () => {
      if (!hamburger || !navMenu) return;
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');

      const spans = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', handleHamburgerClick);
    }

    const linkClickHandlers = [];
    document.querySelectorAll('.nav-menu a').forEach(link => {
      const handler = () => {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      };
      link.addEventListener('click', handler);
      linkClickHandlers.push({ link, handler });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (navbar) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth Scrolling for Navigation Links
    const smoothScrollHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const handler = (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      };
      anchor.addEventListener('click', handler);
      smoothScrollHandlers.push({ anchor, handler });
    });

    // Intersection Observer for Animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.glass-card, .car-card, .partner-glass-card, .testimonial-glass-card, .contact-info-glass, .contact-form-glass');
    animatedElements.forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

    // Car Collection Hover Effects
    const carCards = document.querySelectorAll('.car-card');
    const carCardHandlers = [];
    carCards.forEach(card => {
      const overlay = card.querySelector('.car-overlay');
      const button = card.querySelector('.view-details');

      const enterHandler = () => { if (overlay && button) { overlay.style.opacity = '1'; button.style.transform = 'scale(1.05)'; } };
      const leaveHandler = () => { if (overlay && button) { overlay.style.opacity = '0'; button.style.transform = 'scale(1)'; } };
      card.addEventListener('mouseenter', enterHandler);
      card.addEventListener('mouseleave', leaveHandler);
      carCardHandlers.push({ card, enterHandler, leaveHandler });

      if (button) {
        const detailsHandler = () => {
          const modelEl = card.querySelector('.car-model');
          const carModel = modelEl ? modelEl.textContent : 'this car';
          showCarDetails(carModel);
        };
        button.addEventListener('click', detailsHandler);
        carCardHandlers.push({ card: button, detailsHandler });
      }

      const testDriveBtn = card.querySelector('.car-action');
      if (testDriveBtn) {
        const testHandler = () => {
          const modelEl = card.querySelector('.car-model');
          const carModel = modelEl ? modelEl.textContent : 'this car';
          scheduleTestDrive(carModel);
        };
        testDriveBtn.addEventListener('click', testHandler);
        carCardHandlers.push({ card: testDriveBtn, testHandler });
      }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    let formSubmitHandler;
    if (contactForm) {
      formSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        if (validateForm(data)) {
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Sending...';
          submitBtn.disabled = true;
          setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }
      };
      contactForm.addEventListener('submit', formSubmitHandler);
    }

    // Form Validation
    function validateForm(data) {
      const errors = [];
      if (!data.name || data.name.length < 2) errors.push('Name must be at least 2 characters long');
      if (!data.email || !isValidEmail(data.email)) errors.push('Please enter a valid email address');
      if (!data.interest) errors.push('Please select your service interest');
      if (errors.length > 0) { showErrorMessage(errors); return false; }
      return true;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Success and Error Messages
    function showSuccessMessage() {
      const message = createMessage('Thank you for your inquiry! Our luxury concierge will contact you within 24 hours.', 'success');
      showMessage(message);
    }

    function showErrorMessage(errors) {
      const message = createMessage(`Please correct the following errors:\n• ${errors.join('\n• ')}`, 'error');
      showMessage(message);
    }

    function createMessage(text, type) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${type}`;
      messageDiv.style.cssText = `position: fixed; top: 100px; right: 30px; background: ${type === 'success' ? '#D4AF37' : '#dc3545'}; color: ${type === 'success' ? '#0A0A0A' : '#fff'}; padding: 20px 30px; border-radius: 0; z-index: 1001; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transform: translateX(400px); opacity: 0; transition: all 0.3s ease; max-width: 350px; white-space: pre-line; font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 0.5px;`;
      messageDiv.textContent = text;
      return messageDiv;
    }

    function showMessage(messageDiv) {
      document.body.appendChild(messageDiv);
      setTimeout(() => { messageDiv.style.transform = 'translateX(0)'; messageDiv.style.opacity = '1'; }, 100);
      setTimeout(() => {
        messageDiv.style.transform = 'translateX(400px)';
        messageDiv.style.opacity = '0';
        setTimeout(() => { if (messageDiv.parentNode) messageDiv.parentNode.removeChild(messageDiv); }, 300);
      }, 4000);
    }

    function showCarDetails(carModel) { alert(`Detailed information about ${carModel} would be displayed in a luxury modal. This is a demonstration.`); }
    function scheduleTestDrive(carModel) { alert(`Scheduling a private test drive for ${carModel}. In a real implementation, this would open a booking system.`); }

    // Preloader
    const handleLoad = () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.remove(); }, 500);
      }
      const elements = document.querySelectorAll('.hero-content, .section-title, .car-card, .glass-card, .partner-glass-card, .testimonial-glass-card, .contact-info-glass, .contact-form-glass');
      elements.forEach((el, index) => { el.classList.add('loading'); el.style.animationDelay = `${index * 0.1}s`; });

      // Graceful hero video fallback if missing or fails to load
      const heroVideo = document.querySelector('.hero-video');
      if (heroVideo) {
        const videoErrorHandler = () => {
          const container = document.querySelector('.hero-video-container');
          if (container) container.style.background = "url('/aston-martin-db11.jpg') center/cover no-repeat";
          heroVideo.style.display = 'none';
        };
        heroVideo.addEventListener('error', videoErrorHandler);
      } else {
        const container = document.querySelector('.hero-video-container');
        if (container) container.style.background = "url('/aston-martin-db11.jpg') center/cover no-repeat";
      }
    };

    window.addEventListener('load', handleLoad);

    // Glass Cards Hover Animation
    const glassCards = document.querySelectorAll('.glass-card');
    const glassCardHoverHandlers = [];
    glassCards.forEach(card => {
      const enter = () => { card.style.transform = 'translateY(-10px) scale(1.02)'; card.style.boxShadow = '0 35px 70px rgba(0, 0, 0, 0.4)'; };
      const leave = () => { card.style.transform = 'translateY(0) scale(1)'; card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)'; };
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      glassCardHoverHandlers.push({ card, enter, leave });
    });

    // Partner Glass Cards Setup
    const partnerGlassCards = document.querySelectorAll('.partner-glass-card');
    partnerGlassCards.forEach((card, index) => {
      card.style.animationDelay = `${(index * 0.15) + 0.8}s`;
      card.style.animation = 'glassCardAppear 1s ease-out forwards';
      card.style.opacity = '0';
      const enter = () => { card.style.transform = 'translateY(-8px) scale(1.02)'; card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4)'; };
      const leave = () => { card.style.transform = 'translateY(0) scale(1)'; card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)'; };
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      glassCardHoverHandlers.push({ card, enter, leave });
    });

    // Testimonial Glass Cards Setup
    const testimonialGlassCards = document.querySelectorAll('.testimonial-glass-card');
    testimonialGlassCards.forEach((card, index) => {
      card.style.animationDelay = `${(index * 0.2) + 1.3}s`;
      card.style.animation = 'glassCardAppear 1.2s ease-out forwards';
      card.style.opacity = '0';
      const enter = () => { card.style.transform = 'translateY(-10px) scale(1.02)'; card.style.boxShadow = '0 35px 70px rgba(0, 0, 0, 0.4)'; };
      const leave = () => { card.style.transform = 'translateY(0) scale(1)'; card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)'; };
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      glassCardHoverHandlers.push({ card, enter, leave });
    });

    // Testimonial Cards Rotation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    const rotateTestimonialsGlass = () => {
      testimonialGlassCards.forEach((card, index) => {
        if (index === currentTestimonial) {
          card.style.transform = 'translateY(-5px) scale(1.01)';
          card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.35)';
        } else {
          card.style.transform = 'translateY(0) scale(1)';
          card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
        }
      });
      currentTestimonial = (currentTestimonial + 1) % testimonialGlassCards.length;
    };

    let testimonialIntervalId;
    if (testimonialGlassCards.length > 1) {
      testimonialIntervalId = setInterval(rotateTestimonialsGlass, 5000);
      setTimeout(rotateTestimonialsGlass, 2000);
    }

    // Contact Glass Cards Setup
    const contactGlassCards = document.querySelectorAll('.contact-info-glass, .contact-form-glass');
    const contactCardHoverHandlers = [];
    contactGlassCards.forEach((card, index) => {
      card.style.animationDelay = `${(index * 0.3) + 2.0}s`;
      const enter = () => { card.style.transform = 'translateY(-12px) scale(1.02)'; card.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4)'; };
      const leave = () => { card.style.transform = 'translateY(0) scale(1)'; card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)'; };
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      contactCardHoverHandlers.push({ card, enter, leave });
    });

    // Glass Form Input Focus Effects
    const glassInputs = document.querySelectorAll('.form-group-glass input, .form-group-glass select, .form-group-glass textarea');
    const focusHandlers = [];
    const blurHandlers = [];
    glassInputs.forEach(input => {
      const focusHandler = () => {
        const icon = input.parentElement?.querySelector('.input-icon');
        if (icon) { icon.style.color = '#60a5fa'; icon.style.transform = 'scale(1.1)'; }
      };
      const blurHandler = () => {
        const icon = input.parentElement?.querySelector('.input-icon');
        if (icon) { icon.style.color = '#2eaa5f'; icon.style.transform = 'scale(1)'; }
      };
      input.addEventListener('focus', focusHandler);
      input.addEventListener('blur', blurHandler);
      focusHandlers.push({ input, focusHandler });
      blurHandlers.push({ input, blurHandler });
    });

    // Social Glass Links Animation
    const socialGlassLinks = document.querySelectorAll('.social-glass-link');
    socialGlassLinks.forEach((link, index) => {
      link.style.animationDelay = `${2.5 + (index * 0.1)}s`;
      link.style.animation = 'glassCardAppear 0.8s ease-out forwards';
      link.style.opacity = '0';
    });

    // Performance Optimization
    let ticking = false;
    const updateOnScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { ticking = false; });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateOnScroll);

    // Accessibility Enhancements
    const keydownHandler = (e) => {
      if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active') && hamburger) {
        handleHamburgerClick();
      }
      if (e.key === 'Enter' && e.target instanceof Element && e.target.classList.contains('car-action')) {
        e.target.click();
      }
    };
    document.addEventListener('keydown', keydownHandler);

    // Initialize loading animations
    const initLoadingTimeoutId = setTimeout(() => {
      const loadingElements = document.querySelectorAll('.loading');
      loadingElements.forEach(el => { el.classList.add('visible'); });
    }, 100);

    console.log('Exquisite Cars - Luxury experience initialized');

    // Cleanup function
    return () => {
      if (hamburger) hamburger.removeEventListener('click', handleHamburgerClick);
      linkClickHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateOnScroll);
      if (observer) observer.disconnect();
      carCardHandlers.forEach(({ card, enterHandler, leaveHandler, detailsHandler, testHandler }) => {
        if (enterHandler) card.removeEventListener('mouseenter', enterHandler);
        if (leaveHandler) card.removeEventListener('mouseleave', leaveHandler);
        if (detailsHandler) card.removeEventListener('click', detailsHandler);
        if (testHandler) card.removeEventListener('click', testHandler);
      });
      if (contactForm && formSubmitHandler) contactForm.removeEventListener('submit', formSubmitHandler);
      glassCardHoverHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      });
      contactCardHoverHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      });
      focusHandlers.forEach(({ input, focusHandler }) => input.removeEventListener('focus', focusHandler));
      blurHandlers.forEach(({ input, blurHandler }) => input.removeEventListener('blur', blurHandler));
      document.removeEventListener('keydown', keydownHandler);
      clearTimeout(initLoadingTimeoutId);
      if (testimonialIntervalId) clearInterval(testimonialIntervalId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);
};

// Additional Mobile Navigation Styles
const mobileStyles = `
  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 80px;
      flex-direction: column;
      background-color: rgba(10, 10, 10, 0.98);
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(20px);
      padding: 40px 0;
      gap: 30px !important;
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-menu li {
      margin: 0;
    }

    .nav-menu a {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mobileStyles;
  document.head.appendChild(styleSheet);
}
