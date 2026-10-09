/**
 * main.js — Script principal de la aplicación Compuclinica
 */
import { initMenu } from './menu.js';
import { initContactForm } from './form.js';
import { initCarousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes
  initMenu();
  initContactForm();
  initCarousel();

  // Actualización dinámica del año para copyright
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Elevación de barra de navegación en scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Resaltado de enlaces de navegación activos en scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length > 0 && navLinks.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${id}` || href === `/#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
