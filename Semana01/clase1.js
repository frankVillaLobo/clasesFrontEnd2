/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */

// function iniciarJuego() {
// 	alert('Bienvenido al juego de piedra papel o tijera');
// 	const nombre = prompt('Regalame tu nombre');
// 	alert(`Hola desarrollador: ${nombre}, mucha suerte!!`);
// 	console.log('-------------');
// 	console.log('El nombre del jugador es:');
// 	console.log(nombre);
// 	console.log('-------------');

// 	return nombre;
// }
// let usuario = iniciarJuego();
// console.log(usuario);

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

function iniciarJuego() {
	// Validacion del nombre
	// Se valida que sea texto
	var hasNumber = /\d/;
	let ok = false;
	do {
		const nombre = prompt('Regalame tu nombre');
		if (
			typeof nombre == 'string' &&
			nombre.length > 3 &&
			!hasNumber.test(nombre)
		) {
			ok = false;
			let nombreUC = nombre.toUpperCase();
			alert(`Hola desarrollador: ${nombreUC}, mucha suerte!!`);
		} else {
			alert(`El nombre: ${nombre} no valido, Ingrese nuevamente`);
			ok = true;
		}
	} while (ok == true);
}
