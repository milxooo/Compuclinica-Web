/**
 * carousel.js — Carrusel horizontal de la sección Servicios
 */
export function initCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.service-track');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getStep() {
    const card = track.querySelector('.service-card');
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
