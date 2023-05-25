
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado
según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto
caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/



//SOLUCION 1

const contador = (input = "") => {
if(input)console.log(input.length); 
if(input > 0 ){console.log(input.toString().length);}}


contador();

//SOLUCION 2 

const recorte = (text = '', x)=> { if(text)console.log(text.slice(0,x))};
recorte('hola mundo',4);

//SOLUCION 3

const string = (texto = '', x) => 
(!texto) 
?console.warn('no has ingresado nada')
:console.log(texto.split(x)) ;

string('ene,feb,mar,abr,may,ju,jul,agos',',');

//SOLUCION 4

const repetir = (texto = '', rep) => {
for (let i = 0; i < rep; i++){
console.log(`${texto}`);
}}

repetir('hola',5)
    




