/**
 * form.js — Gestión de validación y envío de solicitud de servicio técnico o cotización vía WhatsApp
 */
export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const tipoSelect = document.getElementById('tipo_solicitud');
  const labelEquipo = document.getElementById('labelEquipo');
  const equipoInput = document.getElementById('equipo');
  const labelMensaje = document.getElementById('labelMensaje');
  const mensajeInput = document.getElementById('mensaje');
  const btnSubmit = document.getElementById('btnSubmit');
  const formNote = document.getElementById('formNote');

  function updateFormState(tipo) {
    if (tipo === 'cotizacion') {
      if (labelEquipo) labelEquipo.textContent = 'Equipo o modelo de referencia';
      if (equipoInput) equipoInput.placeholder = 'Ej: Epson L3210, EcoTank L8180, etc.';
      if (labelMensaje) labelMensaje.textContent = '¿Qué repuestos, partes o suministros requiere cotizar? *';
      if (mensajeInput) mensajeInput.placeholder = 'Indica el repuesto (cabezal, rodillo, tarjeta, etc.) o suministros (tintas, consumibles) y cantidad requerida...';
      if (btnSubmit) btnSubmit.textContent = 'Enviar solicitud de cotización vía WhatsApp';
      if (formNote) formNote.textContent = 'Tu solicitud de cotización se enviará directamente a nuestro canal de atención y ventas por WhatsApp.';
    } else {
      if (labelEquipo) labelEquipo.textContent = 'Equipo y modelo';
      if (equipoInput) equipoInput.placeholder = 'Ej: Epson L3150, Plotter T3170, Portátil Lenovo...';
      if (labelMensaje) labelMensaje.textContent = '¿Qué falla o síntoma presenta su equipo? *';
      if (mensajeInput) mensajeInput.placeholder = 'Describe la falla, códigos de error en pantalla o ruidos del equipo...';
      if (btnSubmit) btnSubmit.textContent = 'Enviar solicitud técnica vía WhatsApp';
      if (formNote) formNote.textContent = 'Tu información se enviará directamente a nuestro canal de soporte técnico por WhatsApp.';
    }
  }

  if (tipoSelect) {
    tipoSelect.addEventListener('change', () => {
      updateFormState(tipoSelect.value);
    });
    updateFormState(tipoSelect.value);
  }

  // Preseleccionar tipo y equipo al hacer clic en los botones de las tarjetas
  document.querySelectorAll('a[data-tipo]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetTipo = link.getAttribute('data-tipo');
      if (tipoSelect && targetTipo) {
        tipoSelect.value = targetTipo;
        updateFormState(targetTipo);
      }
      const dataEquipo = link.getAttribute('data-equipo');
      if (dataEquipo && equipoInput) {
        equipoInput.value = dataEquipo;
      } else if (targetTipo === 'cotizacion' && equipoInput && (equipoInput.value.includes('EPSON') || equipoInput.value.includes('Computador') || equipoInput.value.includes('Pantalla'))) {
        equipoInput.value = '';
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tipo = tipoSelect ? tipoSelect.value : 'servicio';
    const isCotizacion = tipo === 'cotizacion';

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
      if (isCotizacion) {
        alert('Por favor complete los campos obligatorios: Nombre, teléfono o celular y el detalle de los repuestos o suministros que requiere cotizar.');
      } else {
        alert('Por favor complete los campos obligatorios: Nombre, teléfono o celular y detalle de la falla del equipo.');
      }
      return;
    }

    let texto = '';
    if (isCotizacion) {
      texto = [
        '¡Hola Compuclinica!. Quiero solicitar una cotización de repuestos y suministros.',
        '',
        '• Tipo de requerimiento: Cotización de repuestos y suministros',
        `• Nombre: ${nombre}`,
        `• Teléfono o Celular: ${telefono}`,
        `• Equipo / modelo de referencia: ${equipo || 'No especificado'}`,
        `• Empresa: ${empresa || 'Particular'}`,
        `• Repuestos o suministros solicitados: ${mensaje}`,
      ].join('\n');
    } else {
      texto = [
        '¡Hola Compuclinica!. Quiero solicitar servicio técnico especializado.',
        '',
        '• Tipo de requerimiento: Servicio técnico y mantenimiento',
        `• Nombre: ${nombre}`,
        `• Teléfono o Celular: ${telefono}`,
        `• Equipo / modelo: ${equipo || 'No especificado'}`,
        `• Empresa: ${empresa || 'Particular'}`,
        `• Detalle de la falla o síntoma: ${mensaje}`,
      ].join('\n');
    }

    // Obtener el número de WhatsApp desde el atributo data del formulario o fallback
    const targetPhone = form.getAttribute('data-whatsapp') || '+573102427364';
    const cleanNumber = targetPhone.replace(/\D/g, '');

    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(texto)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}
