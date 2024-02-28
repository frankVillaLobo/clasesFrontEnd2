// Tenemos varias funciones a disposicion en nuestro programa.
// Debemos reutilizarlas y acomodar nuestro juego para que el mismo sea al mejor de 3 partidas.
// Esto significa que el primero que gane 2 partidas va ser el ganador. Con lo cual pueden repetirse varias rondas hasta que esto suceda.

// Listemos las funciones para recordarlo mejor
// FUNCION 1: iniciarJuego()
// -> Es la que se encarga de recopilar el nombre del jugador y saludarlo.
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
const nombreDelJugador = iniciarJuego();

// FUNCION 2: pedirJugada()
// -> Esta se encarga de pedirle una eleccion al usuario hasta que ingrese un número válido.

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
// FUNCION 3: jugadaRandom()
// -> Utiliza el objeto Math para generar un numero aleatorio entre 1 y 3

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

// FUNCION 4: compararJugadas()
// -> Se encarga de comparar ambas elecciones y definir cómo le fue al usuario
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

/* ------------------------------ 👇Comenzamos ------------------------------ */
// Primero debemos limpiar los scripts anteriores y dejar solo las funciones, quitamos las variables y las empezamos a declarar solo en este script

let marcador = {
	usuario: 0,
	computadora: 0,
	empates: 0,
	partidasJugadas: 0,
};

// mientras ninguno haya llegado a sumar 2 puntos seguimos jugado
while (marcador.usuario < 2 && marcador.computadora < 2) {
	const RESULTADO_PARTIDA = compararJugadas();
	alert(RESULTADO_PARTIDA);
	console.log(RESULTADO_PARTIDA);

	// verificar el mensaje de resultado partida me indica que gané!
	if (RESULTADO_PARTIDA.includes('Ganaste')) {
		marcador.usuario++;
	} else if (RESULTADO_PARTIDA.includes('Perdiste xd')) {
		marcador.computadora++;
	} else if (RESULTADO_PARTIDA.includes('Esto fue un empate')) {
		marcador.empates++;
	}
	marcador.partidasJugadas++;

	console.log(marcador);
}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.
