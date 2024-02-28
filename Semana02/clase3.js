// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio

/*
Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll()
*/
/// Obetener el titulo principal

const titulo = document.querySelector('h1');
//para tomar solamente el texto plano dentro de la etiqueta
console.log(titulo);

// tambien podemos seleccionar basado en id, class y demas
// la selecicon se hace igual que en css, #id .class. para este caso busca de manera especifica
const itemsMenu = document.querySelector('.info');
const infoClima = document.querySelector('.info .clima');
console.log(itemsMenu);
console.log(infoClima);
// ya aca busca de manera mas general y devuelve los elementos html que coincidan con el parametro de busqueda

const navItems = document.querySelectorAll('ul li');
console.log(navItems);
// para hacer una busqueda por atributo
const image = document.querySelector("[src='./img/futbol.webp']");
console.log(image);

const articulos = document.querySelectorAll('article');
console.log(articulos);
/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.

// 💪🏼 Ahora llevemos esto un paso adelante!
// tenemos diferentes formas de capturar el contenido de texto innerHTML (todo el elemento html) y textcontent
for (let i = 0; i < articulos.length; i++) {
	//console.log(articulos[i].innerHTML);
}

// para usar el innerText es lo mismo que el textcontent
// tambien tenemos difernetes formas de iterar para recorer el node list de articulos
articulos.forEach((articulo) => {
	const titular = articulo.querySelector('h2').innerText;
	console.log(titular);
});

// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.

const menuItems = document.querySelectorAll('nav li');
console.log(menuItems);
menuItems.forEach((item) => {
	item.style.textTransform = 'lowercase';
	item.style.color = 'pink';
	item.style.backgroundColor = 'red';
	item.style.borderRadius = '50vh';
});
/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇 Acá podemos ver todas las propiedades CSS que podemos modificar con JS

// para cambiar a la clase dark
console.log(menuItems);
const sitio = document.querySelector('body');
sitio.classList.add('dark');

console.log(sitio);
console.log(sitio.classList.contains('dark'));

// ahora para elminar el classlist
console.log(sitio.classList.remove('dark'));
// para que me cambie y me devuelva un boolean para  mostrarme si contiene o no
// console.log(sitio.classList.toggle('dark'));

// para agregar un atributo a un elemento html desde js

const imagenes = document.querySelectorAll('.noticias article img');

imagenes.forEach((imagen) => {
	imagen.setAttribute('alt', 'miniatura noticia');
});

// Sintaxis de función flecha  (Arrow Function) //

/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {}
elegirTema();
