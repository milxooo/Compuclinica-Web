/**
 * flyer.js — Visor ampliable del flyer de centros de servicio EPSON (FAQ)
 */
const MAX_NATURAL_WIDTH = 2450;
const ZOOM_LEVELS = [1, 1.5, 2, 2.5];

export function initFlyerViewer() {
  const dialog = document.getElementById('flyerViewer');
  const openBtn = document.querySelector('[data-flyer-open]');
  if (!dialog || !openBtn || typeof dialog.showModal !== 'function') return;

  const body = dialog.querySelector('.flyer-viewer-body');
  const img = body.querySelector('img');
  const zoomIn = dialog.querySelector('[data-flyer-zoom="in"]');
  const zoomOut = dialog.querySelector('[data-flyer-zoom="out"]');
  const closeBtn = dialog.querySelector('[data-flyer-close]');
  let levels = ZOOM_LEVELS;
  let current = 0;

  function applyZoom(index) {
    // Conserva el punto que el usuario está mirando al cambiar de zoom
    const before = img.offsetWidth || 1;
    const cx = (body.scrollLeft + body.clientWidth / 2) / before;
    const cy = (body.scrollTop + body.clientHeight / 2) / (img.offsetHeight || 1);
    current = index;
    dialog.style.setProperty('--flyer-zoom', levels[current]);
    body.scrollLeft = cx * img.offsetWidth - body.clientWidth / 2;
    body.scrollTop = cy * img.offsetHeight - body.clientHeight / 2;
    zoomOut.disabled = current === 0;
    zoomIn.disabled = current === levels.length - 1;
  }

  function computeLevels() {
    // No ampliar por encima de la resolución real de la imagen (evita borrosidad)
    dialog.style.setProperty('--flyer-zoom', 1);
    const base = img.offsetWidth || 1;
    const allowed = ZOOM_LEVELS.filter((z) => base * z <= MAX_NATURAL_WIDTH);
    levels = allowed.length ? allowed : [1];
  }

  openBtn.addEventListener('click', () => {
    if (!img.getAttribute('src')) img.src = img.dataset.src; // se descarga solo al abrir
    dialog.showModal();
    computeLevels();
    applyZoom(0);
    body.scrollTop = 0;
    body.scrollLeft = 0;
    body.focus();
  });

  zoomIn.addEventListener('click', () => applyZoom(Math.min(current + 1, levels.length - 1)));
  zoomOut.addEventListener('click', () => applyZoom(Math.max(current - 1, 0)));
  closeBtn.addEventListener('click', () => dialog.close());
  window.addEventListener('resize', () => {
    if (dialog.open) {
      computeLevels();
      applyZoom(Math.min(current, levels.length - 1));
    }
  });
}
