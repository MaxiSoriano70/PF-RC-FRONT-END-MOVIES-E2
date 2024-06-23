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

document
  .getElementById("contactoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    if (name && email && subject && message) {
      alert(
        `Mensaje enviado con éxito:\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
      );
      event.target.reset();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  });
