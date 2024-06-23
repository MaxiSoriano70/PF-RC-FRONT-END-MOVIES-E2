document.addEventListener("DOMContentLoaded", function () {
  const opcionesDeUsuario = document.querySelector("#opciones-usuario");
  const btnAdministracion = document.querySelector("#btnAdministracion");
  const nombreUsuario = document.querySelector("#nombre-usuario");
  const botonIniciarSesion = document.querySelector("#boton-iniciar-sesion");
  const botonRegistrarse = document.querySelector("#boton-registrarse");
  const botonMisFavoritos = document.querySelector("#boton-mis-favoritos");

  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  if (usuario) {
    opcionesDeUsuario.style.display = "block";
    botonMisFavoritos.style.display = "block";
    nombreUsuario.textContent = `${usuario.nombre} ${usuario.apellido}`;
    usuario.admin
      ? (btnAdministracion.style.display = "block")
      : (btnAdministracion.style.display = "none");
    botonIniciarSesion.style.display = "none";
    botonRegistrarse.style.display = "none";
  } else {
    opcionesDeUsuario.style.display = "none";
    botonMisFavoritos.style.display = "none";
    nombreUsuario.textContent = "";
    botonIniciarSesion.style.display = "block";
    botonRegistrarse.style.display = "block";
  }

  cargarPeliculasDestacadas();
  cargarFiltarPeliculasIndex();
});

const cargarPeliculasDestacadas = () => {
  const peliculasDestacadas = JSON.parse(
    localStorage.getItem("peliculas")
  ).filter((pelicula) => pelicula.spotLight);
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.innerHTML = "";

  peliculasDestacadas.forEach((pelicula, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item", "container-img");
    if (index === 0) {
      carouselItem.classList.add("active");
    }
    const imgElement = document.createElement("img");
    imgElement.src = pelicula.image;
    imgElement.classList.add("d-block", "w-100", "movieCarousel");
    imgElement.alt = pelicula.title;

    const textContent = `
          <div class="d-flex align-items-center justify-content-center flex-column text-carrusel">
              <h2 class="titulo-carrusel">${pelicula.title}</h2>
              <a href="#" class="btn btn-p-slider-${
                index + 1
              }" aria-label="Ver más"><i class="fa-solid fa-film"></i> Ver más</a>
          </div>
      `;
    carouselItem.innerHTML = textContent;
    carouselItem.prepend(imgElement);

    carouselInner.appendChild(carouselItem);
  });
  const carouselControls = document.querySelectorAll(
    ".carousel-control-prev, .carousel-control-next"
  );
  carouselControls.forEach((control) => {
    control.setAttribute("data-bs-target", "#carouselMovies");
  });
};

const cargarFiltarPeliculasIndex = () => {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  console.log(peliculas);
  if (peliculas) {
    const peliculasFiltradas = peliculas.filter(
      (pelicula) =>
        pelicula.type == "Película" &&
        pelicula.spotLight == false &&
        pelicula.status == true
    );
    console.log(peliculasFiltradas);
    const cantidadAObtener = 6;
    const peliculasSeleccionadas = [];
    while (
      peliculasSeleccionadas.length < cantidadAObtener &&
      peliculasFiltradas.length > 0
    ) {
      const indiceAleatorio = Math.floor(
        Math.random() * peliculasFiltradas.length
      );
      peliculasSeleccionadas.push(
        peliculasFiltradas.splice(indiceAleatorio, 1)[0]
      );
    }
    console.log(peliculasSeleccionadas);

    const contenedorMoviesSelescionadas =
      document.querySelector("#track-movie");
    contenedorMoviesSelescionadas.innerHTML = "";

    peliculasSeleccionadas.forEach((pelicula, index) => {
      const articleMovie = document.createElement("article");
      articleMovie.classList.add("card-movie-carrusel");
      articleMovie.innerHTML = `
          <img src="${pelicula.image}" alt="${pelicula.title}" class="card-img-carrusel">
          <div class="card-data-movie-carrusel">
              <div class="data-head-carrusel">
                  <div class="ver-ahora-carrusel">
                      <a href="#"><i class="fa-solid fa-circle-play"></i></a>
                      <p>Ver Trailer</p>
                  </div>
                  <div class="data-more">
                      <a href="#"><i class="fa-solid fa-circle-plus"></i></a>
                      <a href="./pages/detallePelicula.html?id=${pelicula.id}"><i class="fa-solid fa-circle-info"></i></a>
                  </div>
              </div>
              <div class="data-body-carrusel">
                  <h4>${pelicula.title}</h4>
                  <div class="body-description">
                      <p><b>Duración</b>: ${pelicula.time}min</p>
                      <p><b>Año</b>: ${pelicula.year}</p>
                  </div>
              </div>
          </div>
        `;
      contenedorMoviesSelescionadas.appendChild(articleMovie);
    });
  } else {
    console.log("No hay datos de películas en el localStorage.");
  }
};
