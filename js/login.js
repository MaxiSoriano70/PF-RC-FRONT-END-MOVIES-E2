
window.addEventListener('load', function(){

    const formIniciarSesion = document.querySelector("#form-iniciar-sesion");
    const emailIniciarSesion = document.querySelector("#email-iniciar-sesion");
    const contraseniaIniciarSesion = document.querySelector("#password-iniciar-sesion");

    emailIniciarSesion.addEventListener("input", e => validarMail(e));
    contraseniaIniciarSesion.addEventListener("input", e=> validarContrasenia(e));

    emailIniciarSesion.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${emailIniciarSesion.name}`, e));
    contraseniaIniciarSesion.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${contraseniaIniciarSesion.name}`, e));

    formIniciarSesion.addEventListener('submit', function(event){
        event.preventDefault();

        const payload = {
            email: emailIniciarSesion.value,
            password: contraseniaIniciarSesion.value
        }

        let usuarioEncontrado = buscarUsuario(payload);
            if (usuarioEncontrado) {
                sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenid@!",
                    text: `${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`,
                    showConfirmButton: false,
                    textColor: "#000",
                    background: "#E7E1E1",
                    timer: 1500
                });
                setTimeout(() => {
                    location.replace("./index.html");
                }, 1500);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Usuario no encontrado o credenciales incorrectas.",
                    confirmButtonColor: "#125959",
                    confirmButtonBorderColor: "#144d4d",
                    textColor: "#000",
                    background: "#E7E1E1",
                });
            }
        formIniciarSesion.reset();

    });

    const buscarUsuario = (payload) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(usuario =>
            usuario.email === payload.email && usuario.contasenia === payload.password
        );
        return usuarioEncontrado || null;
    };

});
