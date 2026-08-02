// ============================================
// MAIN.JS — navbar active state, mobile menu
// ============================================

(function () {
  // Set active navbar link based on current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.navbar__link').forEach((link) => {
    const linkPage = link.getAttribute('href');
    const isHome = (currentPage === '' || currentPage === 'index.html') &&
                   (linkPage === 'index.html' || linkPage === './' || linkPage === '/');
    const isMatch = linkPage === currentPage;

    if (isHome || isMatch) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });

  // Mobile menu toggle
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('is-open');
      toggle.classList.toggle('is-active');
    });
  }
})();