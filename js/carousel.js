/**
 * carousel.js — Carruseles horizontales (Servicios y Cómo trabajamos)
 */
export function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach(setupCarousel);
}

function setupCarousel(carousel) {
  const track = carousel.querySelector('.service-track, .steps-grid');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getStep() {
    const card = track.querySelector('.service-card, .step');
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function scrollByCards(direction) {
    track.scrollBy({
      left: direction * getStep(),
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  }

  function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 1;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
    // Solo es foco de teclado cuando realmente se puede desplazar (p. ej. "Cómo trabajamos" en escritorio no)
    track.tabIndex = maxScroll > 1 ? 0 : -1;
  }

  prevBtn.addEventListener('click', () => scrollByCards(-1));
  nextBtn.addEventListener('click', () => scrollByCards(1));

  track.addEventListener('keydown', (event) => {
    if (event.target !== track) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByCards(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByCards(1);
    }
  });

  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
}
