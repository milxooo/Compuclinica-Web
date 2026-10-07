/**
 * menu.js — Navegación móvil y accesibilidad de menús
 */
export function initMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  function toggleMenu(forceState) {
    const isCurrentlyOpen = navLinks.classList.contains('open');
    const newState = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    navLinks.classList.toggle('open', newState);
    menuBtn.setAttribute('aria-expanded', newState ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', newState ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');

    if (newState) {
      const firstLink = navLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  // Cerrar el menú al presionar una opción
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Accesibilidad: cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggleMenu(false);
      menuBtn.focus();
    }
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });
}
