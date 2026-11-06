function cargarModulo(nombreModulo) {
    const contenedor = document.getElementById('contenido-principal');
    
    if (nombreModulo === 'inicio') {
        contenedor.innerHTML = `
            <h2>Bienvenido al Sistema</h2>
            <p>Selecciona un módulo en la barra de navegación superior.</p>
        `;
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
        })
        .catch(error => {
            contenedor.innerHTML = `<h2>Error 404</h2><p>El módulo "${nombreModulo}" aún no ha sido creado.</p>`;
            console.error(error);
        });
}