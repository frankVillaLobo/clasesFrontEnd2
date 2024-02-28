/* -------------------------------------------------------------------------- */
/*                                  FUNCIÓN 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta función nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
	let eleccion = 0;
	// Se hace una validacion hasta el usuario ingresa la eleccion valida
	do {
		// Pedir que elija una opcion y Convertir de String a numero
		eleccion = parseInt(
			prompt('Ingrese 1 para piedra ✊, 2 para papel ✋ y 3 para tijeras ✌')
		);

		// reemplazar el valor guardado en una variable
	} while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);

	// Para mostrar por consola
	console.log('---------');
	console.log('La eleccion del jugador es');
	console.log(eleccion);
	console.log('---------');
	return eleccion;
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
	const min = 1;
	const max = 4;
	let numero = Math.floor(Math.random() * (max - min) + min);
	console.log('---------');
	console.log('La eleccion de la maquina es');
	console.log(numero);
	console.log('---------');
	// Retorna el numero de la funcion aleatoria
	return numero;
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
	// definimos los resutaldos posibles en un array para que sea mas facil acceder a ellas
	const RESULTADOS = ['Ganaste', 'Esto fue un empate', 'Perdiste xd'];
	const opciones = ['piedra', 'papel', 'tijera'];
	// llamamos a la opcion que elije el jugador y  a la que toma la maquina

	const ELECCION_JUGADOR = pedirJugada();
	const ELECCION_MAQUINA = jugadaRandom();

	// Definimos una variable para resultado por defecto gana
	let resultado = RESULTADOS[0];
	// hacemos el if pra validar el resultado
	if (ELECCION_JUGADOR == ELECCION_MAQUINA) {
		resultado = RESULTADOS[1];
	} else if (
		(ELECCION_JUGADOR == 1 && ELECCION_MAQUINA == 2) ||
		(ELECCION_JUGADOR == 2 && ELECCION_MAQUINA == 3) ||
		(ELECCION_JUGADOR == 3 && ELECCION_MAQUINA == 1)
	) {
		resultado = RESULTADOS[2];
	}
	return `La maquina eligio ${
		opciones[ELECCION_MAQUINA - 1]
	} \nEl jugador eligio ${
		opciones[ELECCION_JUGADOR - 1]
	}\n El resuldato del juego fue ${resultado}`;
}

console.log(compararJugadas());
