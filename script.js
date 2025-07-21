 // Menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('show');
});



const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollAmount = 0;
const scrollPerClick = 220; // Width of one product-card + margin





//Scroll Reveal

ScrollReveal().reveal('.hero-content h1', {
  duration: 3000,
  distance: '1000px'
});

ScrollReveal().reveal('.hero-content p', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.hero-image img', {
  duration: 4000,
  distance: '1000px',
  origin: 'right'
});

ScrollReveal().reveal('.hero-image .hero1', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.skin-glow-section h2', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.card-container', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefits-content', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefit-list li', {
  duration: 3000,
  distance: '200px',
  origin: 'left',
  reset: true
});

ScrollReveal().reveal('.benefit-image', {
  duration: 3000,
  distance: '200px',
  origin: 'right',
  reset: true
});



ScrollReveal().reveal('.article-section h1', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.footer-section', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});
const buttons = document.querySelectorAll('.category-btn');
  const products = document.querySelectorAll('.product-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.category-btn.active').classList.remove('active');
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');

      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

  // AOS init
  AOS.init({
    duration: 800,
    once: true
  });