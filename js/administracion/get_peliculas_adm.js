const auth = () => {
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
};

auth();

const usuarioData = sessionStorage.getItem("usuario");
const usuarioLogueado = JSON.parse(usuarioData);

if (!usuarioData) {
  location.replace("../../pages/404.html");
}

if (usuarioLogueado.admin) {
  const mostrarElementos = () => {
    const peliculasMovieFire = JSON.parse(localStorage.getItem("peliculas"));
    if (peliculasMovieFire) {
      const TbodyAdmin = document.getElementById("TbodyAdmin");
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
              <button type="button" class="btn btn-primary mx-1 fw-bold" data-bs-toggle="modal" onclick="capturarDatosAdminUpdate(${
                elemento.id
              })" data-bs-target="#editarPeliculaModal${
          elemento.id
        }"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
              <!-- Modal Editar Pelicula-->
              <section class="modal fade" id="editarPeliculaModal${
                elemento.id
              }" tabindex="-1" aria-labelledby="editarPeliculaModal${
          elemento.id
        }" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header bg-color-principal">
                      <h5 class="modal-title text-white" id="editarPeliculaModal${
                        elemento.id
                      }">Editar Pelicula</h5>
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-color-fondo">
                      <form id="form-editar-pelicula${elemento.id}">
                        <div class="mb-3">
                          <label for="tituloPeliculaEditar${
                            elemento.id
                          }" class="form-label fw-bolder">Titulo</label>
                          <input type="text" class="form-control bg-input" id="tituloPeliculaEditar${
                            elemento.id
                          }" placeholder="Ingrese titulo"
                          minlength="3" maxlength="25" name="Titulo" value="${
                            elemento.title
                          }" required>
                          <div id="tituloPeliculaEditar${
                            elemento.id
                          }Error"></div>
                        </div>
                        <div class="mb-3">
                          <label for="urlImagenPeliculaEditar${
                            elemento.id
                          }" class="form-label fw-bolder">Url imagen</label>
                          <input type="text" class="form-control bg-input" id="urlImagenPeliculaEditar${
                            elemento.id
                          }" placeholder="Ingrese codigo de la pelicula" min="100" name="Url imagen" value="${
          elemento.image
        }" required>
                          <div id="urlImagenPeliculaEditar${
                            elemento.id
                          }Error"></div>
                        </div>
                        <div class="mb-3">
                          <label for="categoriaPeliculaEditar${
                            elemento.id
                          }" class="form-label fw-bolder">Categoria</label>
                          <input type="text" class="form-control bg-input" id="categoriaPeliculaEditar${
                            elemento.id
                          }" placeholder="Ingrese la categoria"
                          minlength="3" maxlength="25" name="Categoria" value="${
                            elemento.category
                          }" required>
                          <div id="categoriaPeliculaEditar${
                            elemento.id
                          }Error"></div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label fw-bolder w-100">Tipo</label>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="tipoRadioOptions${
                              elemento.id
                            }" id="pelicula" value="Película" ${
          elemento.type === "Película" ? "checked" : ""
        }>
                            <label class="form-check-label" for="pelicula">Pelicula</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="tipoRadioOptions${
                              elemento.id
                            }" id="serie" value="Serie" ${
          elemento.type === "Serie" ? "checked" : ""
        }>
                            <label class="form-check-label" for="serie">Serie</label>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="duracionPeliculaEditar${
                            elemento.id
                          }" class="form-label fw-bolder">Duración: Pelicula en min / Serie en Temp.</label>
                          <input type="number" class="form-control bg-input" id="duracionPeliculaEditar${
                            elemento.id
                          }" placeholder="Ingrese la duración" min="0" name="Duración" value="${
          elemento.time
        }" required>
                          <div id="duracionPeliculaEditar${
                            elemento.id
                          }Error"></div>
                        </div>
                        <div class="mb-3">
                          <label for="anioPeliculaEditar${
                            elemento.id
                          }" class="form-label fw-bolder">Año</label>
                          <input type="number" class="form-control bg-input" id="anioPeliculaEditar${
                            elemento.id
                          }" placeholder="Ingrese el año" min="0" name="Año" value=${
          elemento.year
        } required>
                          <div id="anioPeliculaEditar${elemento.id}Error"></div>
                        </div>
                        <div class="mb-3">
                          <div class="form-floating">
                            <textarea class="form-control bg-input" placeholder="Ingrese la sinopsis" id="sinopsis${
                              elemento.id
                            }" style="height: 100px" required>${
          elemento.sinopsis
        }</textarea>
                            <label for="sinopsis${elemento.id}">Sinopsis</label>
                            <div id="sinopsis${
                              elemento.id
                            }PeliculaEditarError"></div>
                          </div>
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
              <button type="button" class="btn btn-warning fw-bold mx-1" onclick="destacarPelicula(${
                elemento.id
              })">${
          elemento.spotLight
            ? `<i class="fa-solid fa-star"></i> Destacado`
            : `<i class="fa-regular fa-star"></i> Destacar`
        }</button>
              <!-- Boton Eliminar Pelicula-->
              <button type="button" class="btn btn-danger fw-bold mx-1" data-index="${index}" onclick="desabilitarPelicula(${
          elemento.id
        })" id="botonBorrar${elemento.id}">
              ${
                elemento.status
                  ? `<i class="fa-solid fa-trash"></i> Deshabilitar`
                  : `<i class="fa-solid fa-circle-check"></i> Habilitar`
              }</button>
            </div>
          </td>
        `;
        TbodyAdmin.appendChild(tr);
      });
    }
    else{
      location.replace("../../pages/404.html");
    }
  };
  mostrarElementos();
} else {
  location.replace("../../pages/404.html");
}
