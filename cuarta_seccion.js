/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

//SOLUCION 13
const verify = (num = undefined) => 
(num === undefined) ? console.log('ingresa un numero') 
:(typeof num !== 'number') ? console.log('solo numeros')
: (num % 2 === 0) ? console.log('es par')
:(num % 2 != 0) ? console.log('es impar')
: console.log();
    
verify()

//SOLUCION 14

const grados = (grade, type = '') => {

    let Fahrenheit = grade;
    let Celsius = grade
    let calculoCelsius = (Fahrenheit - 32) * 5/9;
    let calculoFahrenheit = (Celsius * 9/5) +32

    if(!grade) console.log('ingrese un valor a convertir');
    if(!type) console.log('ingrese una unida a convertir');
    if(typeof grade != 'number') console.log('ingrese un numero');
    if(typeof type != 'string') console.log('indique la unidad de medida en string');
    if(type.toUpperCase() === 'C' ) console.log(calculoCelsius);
    if(type.toUpperCase() === 'F') console.log(calculoFahrenheit);}

grados();
