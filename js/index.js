document.addEventListener('DOMContentLoaded', function() {
    const opcionesDeUsuario = document.querySelector("#opciones-usuario");
    const btnAdministracion = document.querySelector("#btnAdministracion");
    const nombreUsuario = document.querySelector("#nombre-usuario");
    const botonIniciarSesion = document.querySelector("#boton-iniciar-sesion");
    const botonRegistrarse = document.querySelector("#boton-registrarse");
    const botonMisFavoritos = document.querySelector("#boton-mis-favoritos");

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));


    if (usuario) {
        opcionesDeUsuario.style.display = 'block';
        botonMisFavoritos.style.display = 'block';
        nombreUsuario.textContent = `${usuario.nombre} ${usuario.apellido}`;
        usuario.admin ? btnAdministracion.style.display = 'block' : btnAdministracion.style.display = 'none';
        botonIniciarSesion.style.display = 'none';
        botonRegistrarse.style.display = 'none';
    } else {
        opcionesDeUsuario.style.display = 'none';
        botonMisFavoritos.style.display = 'none';
        nombreUsuario.textContent = "";
        botonIniciarSesion.style.display = 'block';
        botonRegistrarse.style.display = 'block';
    }
});
