const auth = () => {
  const opcionesDeUsuario = document.querySelector("#opciones-usuario");
  const btnAdministracion = document.querySelector("#btnAdministracion");
  const nombreUsuario = document.querySelector("#nombre-usuario");
  const botonIniciarSesion = document.querySelector("#boton-iniciar-sesion");

  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  if (usuario) {
    opcionesDeUsuario.style.display = "block";
    nombreUsuario.textContent = `${usuario.nombre} ${usuario.apellido}`;
    usuario.admin
      ? (btnAdministracion.style.display = "block")
      : (btnAdministracion.style.display = "none");
    botonIniciarSesion.style.display = "none";
  } else {
    opcionesDeUsuario.style.display = "none";
    nombreUsuario.textContent = "";
    botonIniciarSesion.style.display = "block";
  }
};

auth();

const idCapturado = location.search.split(`=`)[1];

const capturarDatosPeliculas = (id) => {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  if (peliculas) {
    const peliculaDetalle = peliculas.find((pelicula) => pelicula.id == id);
    mostrarDetallePelicula(peliculaDetalle);
  } else {
    console.log("No hay datos de películas en el localStorage.");
  }
};

const mostrarDetallePelicula = (pelicula) =>{
  if (pelicula) {
    const idProductos = document.getElementById("idDetalleProducto");
    idProductos.innerHTML = `
      <div class="container-fluid text-center mt-5">
            <div class="row">
              <div class="col-12 col-md-6 ">
                <img src="${pelicula.image}" alt="${pelicula.title}" class="w-100">
              </div>
              <div class="col-12 col-md-6 py-2">
                <div class="container-button w-100 d-flex align-items-center justify-content-center">
                  <h2 class="fw-bold py-3"> ${pelicula.title}</h2>
                </div>
                <div class="container-button w-100 d-flex align-items-start flex-column">
                  <p class="fs-5 ">
                    ${pelicula.sinopsis}
                  </p>
                  <p class="my-1 fs-5 "><b>Duración</b>: ${pelicula.time} ${pelicula.type == "Película"? "min": " Temporadas"}</p>
                  <p class="my-1 fs-5 "><b>Año</b>: ${pelicula.year}</p>
                  <p class="my-1 fs-5 "><b>Categoria</b>: ${pelicula.category}</p>
                </div>
                <div class="container-button w-100 d-flex align-items-center justify-content-center">
                  <button type="button" class="btn btn-personalized-1 fw-bold"><i class="fa-solid fa-play"></i> Ver Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
      `;
  } else {
    console.error("Pelicula no encontrada");
  }
}

capturarDatosPeliculas(idCapturado);