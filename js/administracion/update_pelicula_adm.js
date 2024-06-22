const capturarDatosAdminUpdate = (id) =>{
    const formulario = document.querySelector(`#form-editar-pelicula${id}`);

    const tituloPeliculaEditar = document.querySelector(`#tituloPeliculaEditar${id}`);
    const urlImagenPeliculaEditar = document.querySelector(`#urlImagenPeliculaEditar${id}`);
    const categoriaPeliculaEditar = document.querySelector(`#categoriaPeliculaEditar${id}`);
    const tipoRadioOptions = document.querySelector(`input[name="tipoRadioOptions${id}"]:checked`);
    const duracionPeliculaEditar = document.querySelector(`#duracionPeliculaEditar${id}`);
    const anioPeliculaEditar= document.querySelector(`#anioPeliculaEditar${id}`);
    const sinopsis = document.querySelector(`#sinopsis${id}`);

    tituloPeliculaEditar.addEventListener("input", e => validarTituloDePelicula(e));
    urlImagenPeliculaEditar.addEventListener("input", e => validarUrLImgPelicula(e));
    categoriaPeliculaEditar.addEventListener("input", e => validarTituloDePelicula(e));
    duracionPeliculaEditar.addEventListener("input", e => validarDuracion(e));
    anioPeliculaEditar.addEventListener("input", e => validarAnioDeEstreno(e));
    sinopsis.addEventListener("input", e => validarSinopsisDePelicula(e));

    tituloPeliculaEditar.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${tituloPeliculaEditar.name}`, e));
    urlImagenPeliculaEditar.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${urlImagenPeliculaEditar.name}`, e));
    categoriaPeliculaEditar.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${categoriaPeliculaEditar.name}`, e));
    duracionPeliculaEditar.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${duracionPeliculaEditar.name}`, e));
    anioPeliculaEditar.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${anioPeliculaEditar.name}`, e));
    sinopsis.addEventListener("blur", e => isEmpty(`Se requiere que ingrese su ${sinopsis.name}`, e));

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let peliculas = JSON.parse(localStorage.getItem("peliculas"));

        let peliculaActualizada = peliculas.find(pelicula => pelicula.id == id);

        if (peliculaActualizada) {
            peliculaActualizada.title = tituloPeliculaEditar.value.trim();
            peliculaActualizada.image = urlImagenPeliculaEditar.value.trim();
            peliculaActualizada.category = categoriaPeliculaEditar.value.trim();
            peliculaActualizada.type = tipoRadioOptions ? tipoRadioOptions.value : '';
            peliculaActualizada.time = parseInt(duracionPeliculaEditar.value.trim());
            peliculaActualizada.year = parseInt(anioPeliculaEditar.value.trim());
            peliculaActualizada.sinopsis = sinopsis.value.trim();

            localStorage.setItem("peliculas", JSON.stringify(peliculas));

            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "Cambios guardados",
                showConfirmButton: false,
                textColor: "#000",
                background: "#eaeef4",
                timer: 1500
            });
            setTimeout(() => {
                location.replace("../pages/administracion.html");
            }, 1500);
            formulario.reset();
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo guardar los cambios",
                confirmButtonColor: "#456584",
                confirmButtonBorderColor: "#3e5975",
                textColor: "#000",
                background: "#eaeef4",
            });
        }
    });
}

const desabilitarPelicula = (id) => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    const pelicula = peliculas.find(p => p.id == id);

    if (pelicula) {
        // Verificar si la película está destacada
        if (pelicula.spotLight) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No puedes deshabilitar una película que está destacada.",
                confirmButtonColor: "#456584",
                confirmButtonBorderColor: "#3e5975",
                textColor: "#000",
                background: "#eaeef4",
            });
            return;
        }

        // Confirmar la acción de deshabilitar la película
        Swal.fire({
            title: "Cambiar estado",
            text: "¿Estás seguro de que deseas cambiar el estado de la película?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#456584",
            confirmButtonBorderColor: "#3e5975",
            cancelButtonColor: "#dc3545",
            textColor: "#000",
            background: "#eaeef4",
            confirmButtonText: "Sí, cambiar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                pelicula.status = !pelicula.status;
                localStorage.setItem('peliculas', JSON.stringify(peliculas));
                Swal.fire({
                    icon: "success",
                    title: "¡Éxito!",
                    text: "Cambios guardados correctamente",
                    showConfirmButton: false,
                    textColor: "#000",
                    background: "#eaeef4",
                    timer: 1500
                });
                setTimeout(() => {
                    location.replace("../pages/administracion.html");
                }, 1500);
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo guardar los cambios",
            confirmButtonColor: "#456584",
            confirmButtonBorderColor: "#3e5975",
            textColor: "#000",
            background: "#eaeef4",
        });
    }
};


const destacarPelicula = (id) => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    const pelicula = peliculas.find(p => p.id == id);
    if (pelicula) {
        Swal.fire({
            title: "Destacar película",
            text: "¿Estás seguro de que deseas cambiar el estado de la película?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#456584",
            confirmButtonBorderColor: "#3e5975",
            cancelButtonColor: "#dc3545",
            textColor: "#000",
            background: "#eaeef4",
            confirmButtonText: "Sí, cambiar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                const destacadas = peliculas.filter(p => p.spotLight).length;
                if (!pelicula.spotLight && destacadas >= 3) {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Ya hay tres películas destacadas. No se puede destacar más películas.",
                        confirmButtonColor: "#456584",
                        confirmButtonBorderColor: "#3e5975",
                        textColor: "#000",
                        background: "#eaeef4",
                    });
                    return;
                }

                pelicula.spotLight = !pelicula.spotLight;

                const indice = peliculas.findIndex(p => p.id == id);
                peliculas[indice] = pelicula;

                localStorage.setItem("peliculas", JSON.stringify(peliculas));

                Swal.fire({
                    icon: "success",
                    title: "¡Éxito!",
                    text: "Cambios guardados correctamente",
                    showConfirmButton: false,
                    textColor: "#000",
                    background: "#eaeef4",
                    timer: 1500
                });

                setTimeout(() => {
                    location.replace("../pages/administracion.html");
                }, 1500);
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontró la película para destacar",
            confirmButtonColor: "#456584",
            confirmButtonBorderColor: "#3e5975",
            textColor: "#000",
            background: "#eaeef4",
        });
    }
};
