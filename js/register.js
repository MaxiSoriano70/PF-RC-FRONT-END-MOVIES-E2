window.addEventListener('load', function () {
    const formRegistro = document.querySelector("#form-registro");
    const emailRegistro = document.querySelector("#emailRegistro");
    const nombreRegistro = document.querySelector("#nombreRegistro");
    const apellidoRegistro = document.querySelector("#apellidoRegistro");
    const telefonoRegistro = document.querySelector("#telefonoRegistro");
    const fechaNacimientoRegistro = document.querySelector("#fechaNacimientoRegistro");
    const passwordRegistro = document.querySelector("#passwordRegistro");
    const passwordRegistroRepetir = document.querySelector("#passwordRegistroRepetir");

    emailRegistro.addEventListener("input", e => validarMail(e));
    nombreRegistro.addEventListener("input", e => validarTexto(e));
    apellidoRegistro.addEventListener("input", e => validarTexto(e));
    telefonoRegistro.addEventListener("input", e => validarTelefono(e));
    fechaNacimientoRegistro.addEventListener("input", e => validarFechaDeNacimiento(e));
    passwordRegistro.addEventListener("input", e => validarContrasenia(e));
    passwordRegistroRepetir.addEventListener("input", e => validarContraseniasIguales(e, passwordRegistro));

    emailRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${emailRegistro.name}`, e));
    nombreRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${nombreRegistro.name}`, e));
    apellidoRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${apellidoRegistro.name}`, e));
    telefonoRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${telefonoRegistro.name}`, e));
    fechaNacimientoRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${fechaNacimientoRegistro.name}`, e));
    passwordRegistro.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${passwordRegistro.name}`, e));
    passwordRegistroRepetir.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${passwordRegistroRepetir.name}`, e));

    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault();
        const payload = {
            "email": emailRegistro.value,
            "nombre": nombreRegistro.value,
            "apellido": apellidoRegistro.value,
            "telefono": telefonoRegistro.value,
            "fechaDeNacimiento": fechaNacimientoRegistro.value,
            "contasenia": passwordRegistro.value,
            "admin": false
        };
        registrarUsuario(payload);
        formRegistro.reset();
    });
});

const registrarUsuario = (payload) =>{
    usuario = new Usuario(
        payload.email,
        payload.nombre,
        payload.apellido,
        payload.telefono,
        payload.fechaDeNacimiento,
        payload.contasenia,
        payload.admin
    );
    if(usuario){
        let usuariosLS = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosLS.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosLS));

        if (sessionStorage.getItem('usuario') === null) {
            sessionStorage.setItem('usuario', JSON.stringify(usuario));
        }
        Swal.fire({
            icon: "success",
            title: "¡Registro exitoso!",
            text: `${usuario.nombre} ${usuario.apellido}`,
            showConfirmButton: false,
            textColor: "#000",
            background: "#E7E1E1",
            timer: 1500
        });
        setTimeout(() => {
            location.replace("./index.html");
        }, 1500);
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error en el registro",
            showConfirmButton: false,
            textColor: "#000",
            background: "#E7E1E1",
            timer: 1500
        });
        setTimeout(() => {
            location.replace("./index.html");
        }, 1500);
    }
}