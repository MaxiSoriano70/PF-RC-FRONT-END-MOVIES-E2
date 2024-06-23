const dataPeliculas = [
    {
        title: "Ricky Bobby - Loco por la velocidad",
        category: "Comedia",
        sinopsis:
            "La historia de Ricky Bobby, un exitoso conductor de autos de carrera que debe enfrentarse a un nuevo rival mientras lucha por mantener su estatus en la cima del mundo de las carreras.",
        type: "Película",
        time: 108, // 1h 48min
        year: 2006,
        image:
            "https://palomaynacho-1f321.kxcdn.com/wp-content/uploads/2023/08/nolan-comedia-mas-grande-will-ferrell-2-jpeg.webp",
        status: true,
        spotLight: true,
    },
    {
        title: "Chau Buenos Aires",
        category: "Ciencia Ficción",
        sinopsis:
            "Buenos Aires, noviembre de 2001. Argentina está sumida en una crisis, con el peso hundiéndose cada vez más. Julio Färber, el carismático bandoneonista de los “Vecinos de Pompeya”, una banda de tango de clase trabajadora de cinco integrantes, está tratando de mantener su cabeza fuera del agua.",
        type: "Película",
        time: 111, // 1h 51min
        year: 2023,
        image:
            "https://www.cinema.de/sites/default/files/styles/cin_landscape_510/public/sync/cms3.cinema.de/imgdb/import/dreams2/63ec/924/8/63ec924876ed8b13b4d425f2.jpeg.jpg?itok=_lmSccrp",
        status: false,
        spotLight: false,
    },
    {
        title: "Misiones de Espionaje",
        category: "Acción",
        sinopsis:
            "Agentes de inteligencia del MI6 hasta la CIA revelan datos sobre el arte del espionaje, las campañas de la Guerra Fría y los golpes de Estado perpetrados por personal encubierto.",
        type: "Serie",
        time: 6, // 6 temporadas
        year: 2023,
        image:
            "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZlZuz855tsCxU5w7KKgs1IuyX6Wu3iy6npfPSD3fdzMWM18uue2nFzN7vD0RJ9LJeVhd4tPuJycmOrQoK9dm2Cg8YLOzXrRwSgb.jpg?r=6ce",
        status: true,
        spotLight: false,
    },
    {
        title: "Mar de Sangre",
        category: "Terror",
        sinopsis:
            "Un grupo de amigos que está celebrando las vacaciones en México roba motos acuáticas y sufre un accidente. Con uno de ellos gravemente herido, deben volver a tierra atravesando un mar infestado de tiburones hambrientos.",
        type: "Película",
        time: 85, // 1h 25min
        year: 2022,
        image:
            "https://occ-0-1366-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfmkvOEq3F7kQ63mtgOqgp4ZWX6E1s7BkWjGqHRv8fE1TNzDZk5CNQkcM7YwWp-bEQ_ini5TJjppaYukk0vxc84gC8ldftTs3QM.webp?r=6b2",
        status: true,
        spotLight: false,
    },
    {
        title: "Los Vengadores",
        category: "Acción",
        sinopsis:
            "Un grupo de superhéroes se une para salvar al mundo de una amenaza alienígena.",
        type: "Película",
        time: 158, // 2h 38min
        year: 2012,
        image:
            "https://www.mundodeportivo.com/alfabeta/hero/2021/12/vengadores.1640005155.553.jpg?width=1200&aspect_ratio=16:9",
        status: true,
        spotLight: false,
    },
    {
        title: "Stranger Things",
        category: "Ciencia Ficción",
        sinopsis:
            "Un grupo de niños se enfrenta a fenómenos sobrenaturales en los años 80.",
        type: "Serie",
        time: 4, // 4 temporadas
        year: 2016,
        image:
            "https://occ-0-1366-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpnK-uuOe7H7X3RMJKcroyNCybbVqlpkQEBlMZSM0nhbfjXH5QtVXtsUJ1JaWAslHy83WBoWpKciuuoURdF9Ccug19-wV3w-Sghdp4FMz7pwnwewfUwIm5EfLzL9PqT-ApC.jpg?r=ea5",
        status: true,
        spotLight: false,
    },
    {
        title: "El Conjuro",
        category: "Terror",
        sinopsis:
            "\tUn matrimonio de investigadores paranormales se enfrenta a casos aterradores.",
        type: "Película",
        time: 112, // 1h 52min
        year: 2013,
        image:
            "https://2.bp.blogspot.com/-qWQwU0EY9d0/Vi43O9_j2ZI/AAAAAAAADSI/WRrl-kjs8iY/w1200-h630-p-k-no-nu/conjuring_1_1280.jpg",
        status: true,
        spotLight: false,
    },
    {
        title: "Deadpool",
        category: "Comedia",
        sinopsis:
            "Un antihéroe desfigurado busca venganza en una comedia de acción llena de humor negro.",
        type: "Película",
        time: 108, // 1h 48min
        year: 2016,
        image:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F4C30DD8F018FA9DB65E015CAE10C66FD72BE870F39D780222629A2A1B2EB765/scale?width=1200&aspectRatio=1.78&format=jpeg",
        status: true,
        spotLight: false,
    },
    {
        title: "La La Land",
        category: "Romance",
        sinopsis:
            "Dos aspirantes a artistas se enamoran mientras luchan por alcanzar sus sueños en Los Ángeles.\t",
        type: "Película",
        time: 128, // 2h 8min
        year: 2016,
        image:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/56E433A853B36B927FDB034942B977C6890C9FB954AA6F305994CA7559CCAC6F/scale?width=1200&aspectRatio=1.78&format=jpeg",
        status: true,
        spotLight: true,
    },
    {
        title: "El Resplandor",
        category: "Terror",
        sinopsis:
            "\tUn hombre se vuelve loco mientras trabaja como cuidador de un hotel aislado durante el invierno.",
        type: "Película",
        time: 146, // 2h 26min
        year: 1979,
        image: "https://pics.filmaffinity.com/El_resplandor-671484101-large.jpg",
        status: true,
        spotLight: false,
    },
    {
        title: "Friends",
        category: "Comedia",
        sinopsis:
            "Seis amigos viven aventuras y desafíos en Nueva York mientras navegan por la vida y el amor.",
        type: "Serie",
        time: 10, // 10 temporadas
        year: 1994,
        image:
            "https://www.eltelegrafo.com.ec/media/k2/items/cache/d53d6938410abec6a9f5e7704258cec4_XL.jpg",
        status: true,
        spotLight: false,
    },
    {
        title: "Titanic",
        category: "Romance",
        sinopsis:
            "Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.",
        type: "Película",
        time: 195, // 3h 15min
        year: 1997,
        image:
            "https://www.laizquierdadiario.com/IMG/logo/titanic.jpg",
        status: true,
        spotLight: false,
    },
    {
        title: "Piratas del Caribe",
        category: "Aventura",
        sinopsis:
            "El excéntrico pirata Jack Sparrow se embarca en emocionantes aventuras en los mares.",
        type: "Película",
        time: 143, // 2h 23min
        year: 2003,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcGDi3CkVVevBR-S3VrvG3KLnvTd9gFZtux9uxRk2HihTfGOjkmSzrXpFaUEoaRga_UnRkhyphenhyphenWgE1-QD5CPhreuedpGPtvd1c9PkSRXiEc63KgScpSnSCesZFHzjdsIiDoenvbzQwOPQ8Q/s1600/Pot_C_DMTNT_Banner_Poster.jpg",
        status: true,
        spotLight: false,
    },
    {
        title: "El Padrino",
        category: "Drama",
        sinopsis:
            "Una saga sobre la familia Corleone, su imperio criminal y su lucha por el poder.",
        type: "Película",
        time: 175, // 2h 55min
        year: 1972,
        image: "https://americanovictor.com/wp-content/uploads/2023/07/09/sin-categoria/el-padrino-768x432.jpeg",
        status: true,
        spotLight: false,
    },
    {
        title: "Volver al futuro",
        category: "Ciencia Ficción",
        sinopsis:
            "Un adolescente llamado Marty McFly que accidentalmente viaja al pasado y pone en peligro su propia existencia en el futuro.",
        type: "Película",
        time: 116, // 1h 56m
        year: 1975,
        image: "https://cdn.forbes.com.mx/2015/10/back_to_the_future.jpg",
        status: true,
        spotLight: true,
    },
];

class Pelicula {
    static ultimoId = 0;
    constructor(title, category, sinopsis, type, time, year, image, status, spotLight){
        this.id = ++Pelicula.ultimoId;
        this.title = title;
        this.category = category;
        this.sinopsis = sinopsis;
        this.type = type;
        this.time = time;
        this.year = year;
        this.image = image;
        this.status = status;
        this.spotLight = spotLight;
    }
}

const cargarPeliculas = (dataPeliculas) =>{
    if (localStorage.getItem('peliculas') === null) {
        const peliculas = dataPeliculas.map(
            peliculaData => new Pelicula(
                peliculaData.title,
                peliculaData.category,
                peliculaData.sinopsis,
                peliculaData.type,
                peliculaData.time,
                peliculaData.year,
                peliculaData.image,
                peliculaData.status,
                peliculaData.spotLight
        ));
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }
}

cargarPeliculas(dataPeliculas);