/**
 * form.js — Gestión de validación y envío de solicitud de servicio técnico vía WhatsApp
 */
export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreEl = document.getElementById('nombre');
    const telefonoEl = document.getElementById('telefono');
    const equipoEl = document.getElementById('equipo');
    const empresaEl = document.getElementById('empresa');
    const mensajeEl = document.getElementById('mensaje');

    const nombre = nombreEl ? nombreEl.value.trim() : '';
    const telefono = telefonoEl ? telefonoEl.value.trim() : '';
    const equipo = equipoEl ? equipoEl.value.trim() : '';
    const empresa = empresaEl ? empresaEl.value.trim() : '';
    const mensaje = mensajeEl ? mensajeEl.value.trim() : '';

    if (!nombre || !telefono || !mensaje) {
      alert('Por favor complete los campos obligatorios: Nombre, teléfono y detalle de la falla.');
      return;
    }

    const texto = [
      '¡Hola Compuclinica!. Quiero solicitar servicio técnico especializado.',
      '',
      `• Nombre: ${nombre}`,
      `• Teléfono de contacto: ${telefono}`,
      `• Equipo / modelo: ${equipo || 'No especificado'}`,
      `• Empresa: ${empresa || 'Particular'}`,
      `• Detalle de la falla: ${mensaje}`,
    ].join('\n');

    // Obtener el número de WhatsApp desde el atributo data del formulario o fallback
    const targetPhone = form.getAttribute('data-whatsapp') || '57XXXXXXXXXX';
    const cleanNumber = targetPhone.replace(/\D/g, '');

    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(texto)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}
