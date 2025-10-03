// Fade-in hero elements
window.addEventListener('load', () => {
  const heroEls = document.querySelectorAll('.hero h1, .hero p, .hero .btn');
  heroEls.forEach(el => el.classList.add('fade-in'));
});

// Product filter with fade-in
function filterProducts(category) {
  const cards = document.querySelectorAll('#productGrid .card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.classList.add('fade-in-card');
    } else {
      card.style.display = 'none';
      card.classList.remove('fade-in-card');
    }
  });
}

// Navbar active link highlight
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active-link');
});
