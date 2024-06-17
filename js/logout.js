document.querySelector("#btnCerrarSesion").addEventListener('click', function() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    Swal.fire({
        title: "Cerrar sesión",
        text: "¿Estás seguro de que deseas cerrar sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#125959",
        confirmButtonBorderColor: "#144d4d",
        cancelButtonColor: "#dc3545",
        textColor: "#000",
        background: "#E7E1E1",
        confirmButtonText: "Sí, salir",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: "success",
                title: "¡Hasta luego!",
                text: `${usuario.nombre} ${usuario.apellido}`,
                showConfirmButton: false,
                textColor: "#000",
                background: "#E7E1E1",
                timer: 1500
            });
            setTimeout(() => {
                location.reload();
            }, 1500);
            sessionStorage.clear();
        }
    });
});