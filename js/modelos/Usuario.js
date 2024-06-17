class Usuario {
    static ultimoId = 0;
    constructor(email, nombre, apellido, telefono, fechaDeNacimiento, contasenia, admin){
        this.id = ++Usuario.ultimoId;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.contasenia = contasenia;
        this.admin = admin;
    }
}

const cargarUsuarios = (url) =>{
    if (localStorage.getItem('usuarios') === null) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo usuarios.json");
            }
            return response.json();
        })
        .then(data => {
            const usuarios = data.map(usuarioData => new Usuario(
                usuarioData.email,
                usuarioData.nombre,
                usuarioData.apellido,
                usuarioData.telefono,
                usuarioData.fechaDeNacimiento,
                usuarioData.contasenia,
                usuarioData.admin
            ));
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        })
        .catch(error => {
            console.error(error);
        });
    }
}

cargarUsuarios("./js/modelos/usuarios.json");