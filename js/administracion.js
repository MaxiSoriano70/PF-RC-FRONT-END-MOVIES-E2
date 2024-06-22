const peliculasMovieFire = JSON.parse(localStorage.getItem("peliculas")) || [];
const TbodyAdmin = document.getElementById("TbodyAdmin");

const guardarPeliculas = () => {
  localStorage.setItem("peliculas", JSON.stringify(peliculasMovieFire));
};

document.addEventListener("DOMContentLoaded", function () {
  const opcionesDeUsuario = document.querySelector("#opciones-usuario");
  const btnAdministracion = document.querySelector("#btnAdministracion");
  const nombreUsuario = document.querySelector("#nombre-usuario");

  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  if (usuario) {
    opcionesDeUsuario.style.display = "block";
    nombreUsuario.textContent = `${usuario.nombre} ${usuario.apellido}`;
    usuario.admin
      ? (btnAdministracion.style.display = "block")
      : (btnAdministracion.style.display = "none");
  } else {
    opcionesDeUsuario.style.display = "none";
    nombreUsuario.textContent = "";
  }
});
const inicializarIsFeatured = () => {
  peliculasMovieFire.forEach((producto) => {
    if (producto.isFeatured === undefined) {
      producto.isFeatured = false;
    }
  });
  guardarPeliculas();
};

const mostrarElementos = () => {
  TbodyAdmin.innerHTML = "";
  peliculasMovieFire.forEach((elemento, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row" id=${elemento.id}>
        ${elemento.id}
      </th>
      <td>${elemento.title}</td>
      <td>${elemento.category}</td>
      <td>${elemento.sinopsis}</td>
      <td>${elemento.type}</td>
      <td>${elemento.time}</td>
      <td>${elemento.year}</td>
      <td>
        <div class="d-flex align-items-center justify-content-center">
          <!-- Boton Editar Pelicula-->
          <button type="button" class="btn btn-primary mx-1 fw-bold" data-bs-toggle="modal" data-bs-target="#editarPeliculaModal"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
          <!-- Modal Editar Pelicula-->
          <section class="modal fade" id="editarPeliculaModal" tabindex="-1" aria-labelledby="editarPeliculaModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header bg-color-principal">
                  <h5 class="modal-title text-white" id="editarPeliculaModal">Editar Pelicula</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body bg-color-fondo">
                  <form id="form-agregar-pelicula">
                    <div class="mb-3">
                      <label for="tituloPeliculaEditar" class="form-label fw-bolder">Titulo</label>
                      <input type="text" class="form-control bg-input" id="tituloPeliculaEditar" placeholder="Ingrese titulo"
                      minlength="3" maxlength="25" name="Titulo" required>
                      <div id="tituloPeliculaEditarError"></div>
                    </div>
                    <div class="mb-3">
                      <label for="codigopeliculaEditar" class="form-label fw-bolder">Codigo</label>
                      <input type="number" class="form-control bg-input" id="codigopeliculaEditar" placeholder="Ingrese codigo de la pelicula" min="100" name="Codigo" required>
                      <div id="codigopeliculaEditarError"></div>
                    </div>
                    <div class="mb-3">
                      <label for="categoriaPeliculaEditar" class="form-label fw-bolder">Categoria</label>
                      <input type="text" class="form-control bg-input" id="categoriaPeliculaEditar" placeholder="Ingrese la categoria"
                      minlength="3" maxlength="25" name="Categoria" required>
                      <div id="categoriaPeliculaEditarError"></div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label fw-bolder w-100">Tipo</label>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="tipoRadioOptions" id="pelicula" value="canino">
                        <label class="form-check-label" for="pelicula">Pelicula</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="tipoRadioOptions" id="serie" value="felino">
                        <label class="form-check-label" for="serie">Serie</label>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="duracionPeliculaEditar" class="form-label fw-bolder">Duración</label>
                      <input type="number" class="form-control bg-input" id="duracionPeliculaEditar" placeholder="Ingrese la duración" min="0" name="Duración" required>
                      <div id="duracionPeliculaEditarError"></div>
                    </div>
                    <div class="mb-3">
                      <label for="anioPeliculaEditar" class="form-label fw-bolder">Año</label>
                      <input type="number" class="form-control bg-input" id="anioPeliculaEditar" placeholder="Ingrese el año" min="0" name="Año" required>
                      <div id="anioPeliculaEditarError"></div>
                    </div>
                    <div class="mb-3">
                      <div class="form-floating">
                        <textarea class="form-control bg-input" placeholder="Ingrese la sinopsis" id="observaciones" style="height: 100px"></textarea>
                        <label for="observaciones">Sinopsis</label>
                      </div>
                      <div id="observacionesPeliculaEditarError"></div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                      <button type="submit" id="botonGuardarCambiosPelicula" class="btn btn-personalized-3 mx-1 fw-bold" aria-label="Guardar cambios">Guardar cambios</button>
                      <button type="button" id="cerrarEditarPelicula" class="btn btn-personalized-1 mx-1 fw-bold" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <!-- Boton Destacar Pelicula-->
          <button type="button" class="btn btn-warning fw-bold mx-1" onclick="destacarProducto(${index})"><i class="fa-solid fa-star"></i> ${
      elemento.isFeatured ? "Destacado" : "Destacar"
    }</button>
          <!-- Boton Eliminar Pelicula-->
          <button type="button" class="btn btn-danger fw-bold mx-1" data-index="${index}" id="botonBorrar"><i class="fa-solid fa-trash"></i> Eliminar</button>
        </div>
      </td>
    `;
    TbodyAdmin.appendChild(tr);
  });

  const botonesBorrar = document.querySelectorAll("#botonBorrar");
  botonesBorrar.forEach((boton) =>
    boton.addEventListener("click", (event) => {
      let peliculaIndex = event.target.getAttribute("data-index");
      if (confirm("¿Estás seguro de que deseas borrar este elemento?")) {
        peliculasMovieFire.splice(peliculaIndex, 1);
        guardarPeliculas();
        mostrarElementos();
      }
    })
  );
};
const botonesEditar = document.querySelectorAll("#botonEditar");
botonesEditar.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    let peliculaId = event.target.getAttribute("data-id");
    let peliculaParaEditar = peliculasMovieFire.find(
      (elemento) => elemento.id === peliculaId
    );
    console.log(peliculaParaEditar);
    localStorage.setItem(
      "peliculaParaEditar",
      JSON.stringify(peliculaParaEditar)
    );
  })
);
const destacarProducto = (index) => {
  const pelicula = peliculasMovieFire[index];
  const accion = pelicula.isFeatured ? "quitar de los destacados" : "destacar";

  if (
    confirm(
      `¿Estás seguro de que deseas ${accion} la película "${pelicula.title}"?`
    )
  ) {
    pelicula.isFeatured = !pelicula.isFeatured;
    guardarPeliculas();
    mostrarElementos();
  }
};

mostrarElementos();
