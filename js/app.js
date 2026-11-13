function cargarModulo(nombreModulo) {
    const contenedor = document.getElementById('contenido-principal');
    const botones = document.querySelectorAll('.nav-button');
    const titulo = document.getElementById('page-title');
    const breadcrumb = document.getElementById('breadcrumb');
    const nombres = { inicio: 'Resumen', ventas: 'Ventas', compras: 'Compras', inventario: 'Inventario', clientes: 'Clientes' };

    botones.forEach(button => button.classList.toggle('active', button.dataset.module === nombreModulo));
    if (breadcrumb) breadcrumb.textContent = nombres[nombreModulo] || nombreModulo;
    if (titulo && nombreModulo !== 'inicio') titulo.innerHTML = `${nombres[nombreModulo] || 'Módulo'} <span>✦</span>`;
    
    if (nombreModulo === 'inicio') {
        window.location.reload();
        return;
    }

    // Llama al archivo del módulo correspondiente
    fetch(`modulos/${nombreModulo}.html`)
        .then(response => {
            if (!response.ok) throw new Error('Módulo no encontrado');
            return response.text();
        })
        .then(html => {
            contenedor.innerHTML = html;
            contenedor.querySelectorAll('script').forEach(script => {
                const scriptNuevo = document.createElement('script');
                scriptNuevo.textContent = script.textContent;
                script.replaceWith(scriptNuevo);
            });
        })
        .catch(error => {
            contenedor.innerHTML = `<h2>Error 404</h2><p>El módulo "${nombreModulo}" aún no ha sido creado.</p>`;
            console.error(error);
        });
}