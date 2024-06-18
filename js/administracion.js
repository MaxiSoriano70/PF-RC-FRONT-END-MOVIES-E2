document.addEventListener('DOMContentLoaded', function() {
    const opcionesDeUsuario = document.querySelector("#opciones-usuario");
    const btnAdministracion = document.querySelector("#btnAdministracion");
    const nombreUsuario = document.querySelector("#nombre-usuario");

    const usuario = JSON.parse(sessionStorage.getItem('usuario'));


    if (usuario) {
        opcionesDeUsuario.style.display = 'block';
        nombreUsuario.textContent = `${usuario.nombre} ${usuario.apellido}`;
        usuario.admin ? btnAdministracion.style.display = 'block' : btnAdministracion.style.display = 'none';
    } else {
        opcionesDeUsuario.style.display = 'none';
        nombreUsuario.textContent = "";
    }
});
