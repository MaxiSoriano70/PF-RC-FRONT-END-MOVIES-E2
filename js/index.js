import { cargaInicial } from "./modelos/peliculasData.js";
cargaInicial();

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
