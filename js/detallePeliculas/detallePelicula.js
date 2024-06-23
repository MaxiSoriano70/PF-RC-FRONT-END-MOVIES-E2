const idCapturado = location.search.split(`=`)[1];

const capturarDatosPeliculas = (id) => {
  const peliculas = JSON.parse(localStorage.getItem("peliculas"));
  if (peliculas) {
    const peliculaDetalle = peliculas.filter((pelicula) => pelicula.id == id);
    console.log(peliculaDetalle);
  } else {
    console.log("No hay datos de películas en el localStorage.");
  }
};

capturarDatosPeliculas(idCapturado);
