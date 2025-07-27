// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles
  initParticles();
  
  // Initialize animations
  initAnimations();
  
  // Initialize scroll indicator
  initScrollIndicator();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize notification system
  initNotifications();
});

// Particle System
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particleCount = Math.floor(window.innerWidth / 10);
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = opacity;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random color variation
    const hue = 180 + Math.random() * 60;
    particle.style.backgroundColor = `hsla(${hue}, 100%, 70%, ${opacity})`;
    
    particlesContainer.appendChild(particle);
  }
}

// Animations with GSAP
function initAnimations() {
  // Hero section animations
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });
  
  gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
  });
  
  // Section animations
  const sections = document.querySelectorAll('section:not(.hero)');
  
  sections.forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });
    
    gsap.from(section.querySelectorAll('.section-header, .feature-card, .fact-card, .blog-card, .testimonial-card'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });
  
  // Founder image animation
  gsap.from('.image-wrapper', {
    scrollTrigger: {
      trigger: '.founder',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  });
}

// Scroll Indicator
function initScrollIndicator() {
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (!scrollIndicator) return;
  
  window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (scrollPosition > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (!menuBtn || !navLinks) return;
  
  menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close menu when clicking on a link
  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

// Notification System
function initNotifications() {
  const notificationBell = document.getElementById('notificationBell');
  const notificationPanel = document.getElementById('notificationPanel');
  
  if (!notificationBell || !notificationPanel) return;
  
  // Bell animation
  let ringCount = 0;
  const ringBell = () => {
    ringCount++;
    if (ringCount <= 3) {
      notificationBell.style.animation = 'none';
      void notificationBell.offsetWidth; // Trigger reflow
      notificationBell.style.animation = 'ring 0.5s ease-in-out';
      setTimeout(ringBell, 2000);
    }
  };
  
  // Start ringing after 5 seconds
  setTimeout(ringBell, 5000);
  
  // Keyframes for bell animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ring {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(15deg); }
      50% { transform: rotate(-15deg); }
      75% { transform: rotate(10deg); }
      100% { transform: rotate(0deg); }
    }
  `;
  document.head.appendChild(style);
}

// Window resize handler
window.addEventListener('resize', function() {
  // Reinitialize particles on resize
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    particlesContainer.innerHTML = '';
    initParticles();
  }
});
