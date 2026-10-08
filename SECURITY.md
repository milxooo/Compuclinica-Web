# Política de Seguridad — Compuclinica

En **Compuclinica** nos tomamos en serio la seguridad de nuestra presencia web y la privacidad de nuestros usuarios y clientes. Agradecemos la colaboración de la comunidad de seguridad y de los investigadores independientes para reportar de forma responsable cualquier vulnerabilidad potencial.

---

## 1. Versiones con Soporte de Seguridad

Este repositorio aloja el sitio web estático oficial de Compuclinica. Solo la rama de producción activa recibe actualizaciones y parches de seguridad:

| Rama / Versión | Estado de Soporte |
| :--- | :---: |
| `master` / `main` (Producción) | :white_check_mark: Con soporte |
| Ramas de desarrollo / forks | :x: Sin soporte |

---

## 2. Cómo Reportar una Vulnerabilidad (Divulgación Responsable)

**Por favor, NO abras un Issue público en GitHub para reportar vulnerabilidades de seguridad.** La divulgación pública prematura pone en riesgo la integridad del sitio y a los visitantes.

### Reporte Privado en GitHub (Private Vulnerability Reporting)
Si la opción está habilitada en este repositorio:
1. Dirígete a la pestaña **Security** en la parte superior del repositorio.
2. Haz clic en **Advisories** (o **Report a vulnerability**).
3. Haz clic en el botón verde **"Report a vulnerability"** para abrir un borrador de asesoría privado y confidencial.
4. Describe detalladamente el problema y adjunta la información requerida.

---

## 3. Información a Incluir en el Reporte

Para evaluar y reproducir el hallazgo con agilidad, incluye:
1. **Tipo y descripción de la vulnerabilidad:** (ej. XSS, bypass de Content Security Policy, Clickjacking, redirección abierta, sanitización de entradas en JavaScript).
2. **Pasos detallados para reproducir:** Instrucciones paso a paso o script de prueba de concepto (PoC).
3. **Impacto potencial:** Qué podría lograr un atacante si la vulnerabilidad es explotada.
4. **Entorno de prueba:** Navegador, versión, sistema operativo y resolución utilizada.
5. **Propuesta de solución o mitigación (opcional):** Recomendaciones técnicas para corregir la falla.

---

## 4. Nuestro Compromiso y Tiempos de Respuesta

* **Confirmación de recepción:** Acusaremos recibo de tu reporte en un plazo máximo de **24 a 48 horas hábiles**.
* **Evaluación y triaje:** Evaluaremos la severidad y el impacto del reporte en un plazo no mayor a **5 días hábiles**.
* **Resolución y parche:** Si el reporte es válido, aplicaremos la solución en el código y desplegaremos la actualización en el menor tiempo técnicamente posible.
* **Coordinación de divulgación:** Solicitamos un período de divulgación coordinada (máximo 90 días o hasta que el parche esté en producción) antes de cualquier publicación externa.
* **Reconocimiento:** Si lo deseas, podemos incluir una mención de agradecimiento en las notas de la versión.

---

## 5. Contexto Arquitectónico y Alcance del Sitio

Compuclinica es un sitio web **estático** alojado en la infraestructura de **GitHub Pages**:
* **Sin backend propio ni bases de datos:** No gestionamos servidores propios de aplicaciones ni bases de datos SQL/NoSQL en este repositorio.
* **Sin almacenamiento de credenciales ni sesiones:** No existen inicios de sesión, tokens JWT, cuentas de usuario ni procesamiento directo de pagos con tarjetas de crédito.
* **Manejo de formularios:** El formulario de contacto procesa la información en el navegador del cliente (vía Vanilla JavaScript con sanitización) y la transmite de forma segura al canal oficial de WhatsApp (`https://wa.me/`).
* **Hardening implementado:** Se aplican cabeceras defensivas estrictas en el HTML (`Content-Security-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy`, `X-Content-Type-Options: nosniff` y `Referrer-Policy`).

### Fuera de Alcance (Out of Scope)
* Ataques de denegación de servicio (DoS/DDoS) dirigidos a la infraestructura de GitHub Pages.
* Ingeniería social, phishing o ataques físicos dirigidos a miembros de Compuclinica.
* Problemas inherentes a plataformas de terceros externas (servidores de WhatsApp / Meta, Google Fonts o proveedores DNS externos).
