/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [
	{
		id: 'x123',
		nombre: 'Nevermind',
		imagen: 'https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg',
		like: false,
	},
	{
		id: 'y456',
		nombre: 'Thriller',
		imagen:
			'https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg',
		like: false,
	},
	{
		id: 'z789',
		nombre: 'The wall',
		imagen:
			'https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg',
		like: false,
	},
	{
		id: 'a987',
		nombre: 'Abbey Road',
		imagen:
			'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg',
		like: true,
	},
	{
		id: 'b654',
		nombre: 'Origin of Symmetry',
		imagen:
			'https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp',
		like: false,
	},
	{
		id: 'c321',
		nombre: 'Back in Black',
		imagen:
			'https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg',
		like: true,
	},
];

/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
	const nombreUsuario = document.querySelector('#nombreUsuario');
	// pedimos en un doWhile para obtener una nmbre valido y que lo siga pidiendo
	let usuario = '';
	do {
		usuario = prompt('Ingrese su nombre:').trim().toLowerCase();
	} while (usuario === null || usuario === '' || usuario.length < 3);
	nombreUsuario.textContent = capitalize(usuario);
	// tenemos que cuadrar el nombre para que quede todo
	// nombreUsuario.textContent = usuario;
}
// obtenerUsuario();

function capitalize(usuario) {
	let nombreCompleto = usuario.split(' ');
	let nombreCapitalize = [];
	let cont = 0;
	nombreCompleto.forEach((nombre) => {
		nombreCapitalize.push(
			nombre[0].toLocaleUpperCase() + nombre.slice(1, nombre.length)
		);
		cont++;
	});
	let nombre = nombreCapitalize.join(' ');
	return nombre;
}

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(albumes) {
	const covers = document.querySelector('.covers');
	covers.innerHTML = '';
	albumes.forEach((album) => {
		covers.innerHTML += `
        <li data-id="${album.id}">
            <img src="${album.imagen}" alt="${album.nombre}"/>
            <p>${album.nombre}</p>
            <i id="${album.id}" class="fa fa-heart ${
			album.like ? 'favorito' : ''
		}"></i>
        </li>`;
	});
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil(albumes) {
	let cantidadAlbumnes = document.querySelector('#cant-albums');
	let cantAlbumFavoritos = document.querySelector('#cant-favoritos');

	// seteamos unos contadores
	let contadorAlbumTotales = 0;
	let contadorAlbumFav = 0;
	albumes.forEach((album) => {
		contadorAlbumTotales++;
		if (album.like) {
			contadorAlbumFav++;
		}
	});
	// condicionales para cargar el texto
	if (contadorAlbumTotales === 0) {
		cantidadAlbumnes.textContent = 'No tienes albumnes cargados';
	} else if (contadorAlbumTotales === 1) {
		cantidadAlbumnes.textContent = 'Tenes un album cargado';
	} else {
		cantidadAlbumnes.textContent = `${contadorAlbumTotales} albumnes`;
	}

	if (contadorAlbumFav === 0) {
		cantAlbumFavoritos.textContent = 'no tienes albumnes favoritos';
	} else if (contadorAlbumFav === 1) {
		cantAlbumFavoritos.textContent = 'tenes un album favorito';
	} else {
		cantAlbumFavoritos.textContent = `${contadorAlbumFav} albumnes favoritos`;
	}
}
mostrarDatosEnPerfil(albumesFamosos);
