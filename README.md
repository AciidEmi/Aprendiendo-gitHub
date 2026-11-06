# Sistema de Gestión Empresarial 🚀

Este repositorio es un proyecto web didáctico diseñado para talleres de control de versiones y trabajo colaborativo. Está construido con Vanilla HTML, CSS y JavaScript, utilizando una arquitectura modular perfecta para simular flujos de trabajo en equipo y practicar la resolución de conflictos de integración.

## 📂 Estructura del Proyecto

- `index.html`: Archivo principal y menú de navegación (el punto de conflicto intencional de la práctica).
- `js/app.js`: Controlador que inyecta las vistas dinámicamente usando `fetch()`.
- `css/style.css`: Estilos globales de la interfaz.
- `modulos/`: Carpeta que contiene los archivos de trabajo individual (`ventas.html`, `compras.html`, `inventario.html`, `clientes.html`).

## 🛠️ Cómo ejecutarlo localmente

Debido al uso de la API `fetch()` para cargar los módulos, abrir el archivo `index.html` directamente con doble clic en el explorador de archivos generará un error de seguridad (CORS) en el navegador. Para visualizarlo correctamente:

1. Clona el repositorio: 
   ```bash
   git clone <url-del-repo>