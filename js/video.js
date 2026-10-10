/**
 * video.js — Carga diferida de videos de YouTube (miniatura + clic)
 */
export function initVideoEmbeds() {
  document.querySelectorAll('.video-embed[data-video-id]').forEach((box) => {
    const id = box.getAttribute('data-video-id');
    const button = box.querySelector('.video-play');
    if (!button || !/^[\w-]{11}$/.test(id)) return;

    button.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.className = 'video-frame';
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      iframe.title = box.getAttribute('data-video-title') || 'Video de YouTube';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      box.replaceChildren(iframe);
      iframe.focus();
    });
  });
}
