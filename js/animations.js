// ============================================
// ANIMATIONS.JS — scroll reveal + carousel nav
// ============================================

(function () {
  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Projects carousel: manual scroll via dots + arrow buttons ----
  const carousel = document.querySelector('.projects__carousel');
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  const dotsWrap = document.querySelector('.projects__dots');
  const prevBtn = document.querySelector('.projects__arrow--prev');
  const nextBtn = document.querySelector('.projects__arrow--next');
  let dots = [];

  if (dotsWrap) {
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'projects__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
      dot.addEventListener('click', () => scrollToCard(i));
      dotsWrap.appendChild(dot);
    });
    dots = Array.from(dotsWrap.children);
  }

  let activeIndex = 0;

  function cardWidth() {
    return cards[0].getBoundingClientRect().width + 24; // + gap
  }

  function scrollToCard(index) {
    activeIndex = Math.max(0, Math.min(cards.length - 1, index));
    carousel.scrollTo({
      left: activeIndex * cardWidth(),
      behavior: 'smooth',
    });
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => scrollToCard(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollToCard(activeIndex + 1));

  // Sync active dot when user manually scrolls/drags
  let scrollTimeout;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const newIndex = Math.round(carousel.scrollLeft / cardWidth());
      activeIndex = Math.max(0, Math.min(cards.length - 1, newIndex));
      updateDots();
    }, 100);
  });
})();

// ---- Hero rotating word ("A Passion for Design / Data / Innovation / Impact") ----
(function () {
  const el = document.getElementById('hero-rotate');
  if (!el) return;

  const words = ['Design', 'Data', 'Innovation', 'Impact'];
  let index = 0;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  setInterval(() => {
    el.classList.add('is-fading');
    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
      el.classList.remove('is-fading');
    }, 250);
  }, 2200);
})();