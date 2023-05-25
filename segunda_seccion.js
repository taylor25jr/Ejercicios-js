/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

//SOLUCION 5

const invertir = (text = '') => 
(!text)
?console.warn('no has ingresado nada')
:(text >= 0) ? console.error ('no se permiten numeros')
: console.log(text.split('').reduce((reversed,character) => character + reversed, ''));

invertir('Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quos odit quasi beatae dolorum, adipisci porro id eius aperiam nesciunt, vel ab veniam quaerat praesentium. Deserunt dolorum illum explicabo quis.');


//SOLUCION 6

const contar = (texto = '', word) => {

let expresion = new RegExp(word, 'g');
let coincidencia = texto.match(expresion);

if(!texto) returnconsole.warn ('ingresa el texto');
else console.log(coincidencia.length)}

contar('hola mundo mundo mundo','mundo')

//SOLUCION 7

const palindromo = (text = '') => {

let palabra = text.toLowerCase();
let leer = palabra.split('').reduce((elemento, index) => index + elemento, '');

if(!text) return console.warn('ingresa un texto') 
if(palabra === leer)console.log('es palindromo')
else{console.log('no es palindromo') }}

palindromo('')

//Solucion 8

const array = (text = '', delet = '') => 

(!text) ? console.warn('no has ingresado texto')
: (!delet) ? console.warn ('no has igresado un patron')
: console.log(text.replace(new RegExp (delet, 'ig'), ''));


array("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
