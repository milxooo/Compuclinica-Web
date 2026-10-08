
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
