# Compuclinica — Sitio Web Estático Oficial

Sitio web oficial de **Compuclinica**, construido con una arquitectura web limpia, ligera y estándar: **HTML5 semántico, CSS3 modular y JavaScript Vanilla**.

* **Sin npm ni dependencias de Node.js**: Cero compiladores, cero frameworks pesados.
* **100% compatible con GitHub Pages**: Listo para desplegar directamente desde la rama `main`.
* **Optimizado para rendimiento y SEO**: Marcado estructurado Schema.org, metadatos Open Graph, Twitter Cards, `robots.txt` y `sitemap.xml`.
* **Accesible (WCAG 2.1 AA)**: Navegación accesible por teclado, contrastes óptimos y enlaces de salto directo.

---

## 📁 Estructura del Proyecto

```text
Compuclinica/
├── assets/
│   ├── icons/
│   │   └── favicon.svg         # Favicon vectorial
│   └── images/
│       └── logo-compuclinica.jpg # Logo oficial en alta definición
├── css/
│   ├── reset.css               # Reseteo CSS normalizado
│   ├── variables.css           # Tokens de diseño (paleta, gradiente, tipografía)
│   ├── base.css                # Tipografía, jerarquía y accesibilidad
│   ├── layout.css              # Contenedores, barra superior, menú y grillas
│   ├── components.css          # Tarjetas de servicios, hero, botones, formulario
│   ├── utilities.css           # Clases utilitarias y animación suave
│   └── main.css                # Entrada principal que carga los estilos
├── js/
│   ├── menu.js                 # Menú móvil accesible con control por teclado
│   ├── form.js                 # Validación de solicitud y redirección a WhatsApp
│   └── main.js                 # Controlador general, año dinámico y scroll
├── index.html                  # Página principal de Compuclinica
├── 404.html                    # Página de error 404 para enlaces no encontrados
├── favicon.svg                 # Icono para pestañas del navegador
├── robots.txt                  # Instrucciones para motores de búsqueda (Google)
├── sitemap.xml                 # Mapa del sitio para indexación
├── CNAME.example               # Plantilla para conectar dominio personalizado
└── README.md
```

---

## 🚀 Despliegue en GitHub Pages

Para publicar la página en internet:

1. Sube esta carpeta a tu repositorio de GitHub.
2. En GitHub, entra a tu repositorio y ve a **Settings** > **Pages**.
3. En la sección **Build and deployment**:
   * **Source**: Elige **Deploy from a branch**.
   * **Branch**: Selecciona `main` (o `master`) y la carpeta `/ (root)`.
   * Haz clic en **Save**.
4. ¡Listo! En 1 a 2 minutos tu página estará activa en `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 🌐 Conectar un Dominio Personalizado

Cuando quieras activar tu dominio propio (ejemplo: `compuclinica.com`):

1. Renombra el archivo `CNAME.example` a `CNAME` (sin `.example`).
2. Escribe dentro únicamente tu dominio (por ejemplo: `compuclinica.com`).
3. En tu proveedor de dominio (Cloudflare, GoDaddy, Namecheap, etc.), agrega los registros DNS que indica GitHub:
   * **A Records**:
     * `185.199.108.153`
     * `185.199.109.153`
     * `185.199.110.153`
     * `185.199.111.153`
   * **CNAME Record**: `www` apuntando a tu usuario de GitHub (`<tu-usuario>.github.io`).
4. En GitHub > **Settings** > **Pages**, ingresa tu dominio en **Custom domain** y activa **Enforce HTTPS**.

---

## ✏️ Cómo Editar Contenidos

* **Textos, teléfonos, servicios y dirección**: Edita directamente en [index.html](file:///home/iolxmoo/Desktop/Compuclinica/index.html).
* **Estilos y colores**: Edita los tokens en [css/variables.css](file:///home/iolxmoo/Desktop/Compuclinica/css/variables.css) o los componentes en [css/components.css](file:///home/iolxmoo/Desktop/Compuclinica/css/components.css).
* **Comportamiento**: Edita los scripts en [js/](file:///home/iolxmoo/Desktop/Compuclinica/js/).
