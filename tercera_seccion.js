/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
    se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/


//Solucion 9

const random = () => console.log(Math.round(Math.random() * (501 - 600) + 600));

random();

//solucion 10

const leer = (num = 0) => {


num = num.toString();
let capicuo = num.split('').reduce((element,index) => index + element, '')

if(!num) return console.log('no has ingresado nada')
if(num === capicuo) console.log('Es capicuo')
else console.log('no es capicuo');}

leer(23)

//SOLUCION 11

const factorial = (numero) => {

    let x = 1;
    for (let i = 1;i <= numero ;i++){ x *= i;}
    console.log(x)}

 factorial(5)

