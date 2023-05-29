/*

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 

*/

//SOLUCION 24 

const ordenar = (array = undefined) => {

    if (!array) console.log('ingresa los numeros a elevar al cuadrado');
    if (!(array instanceof Array)) console.log('ingresa un array valido');
    if (array.length === 0) console.log('el arreglo esta vacio');

    for (const i of array) {
        if (typeof i !== 'number') return console.log(('el valor ingresado no es un numero'));
    }

    let ascendente = array.sort((a, b) => a - b);
    console.log(ascendente);
    let descendiente = array.sort((a, b) => b - a);
    console.log(descendiente);

}
ordenar([7, 5, 7, 8, 6]);

//SOLUCION 25


const duplicar = (array = undefined) => {

    if (!array) console.log('ingresa los numeros a elevar al cuadrado');
    if (!(array instanceof Array)) console.log('ingresa un array valido');
    if (array.length === 0) console.log('el arreglo esta vacio');


    let sinduplicar = [...new Set(array)];
    console.log(sinduplicar);


}

duplicar(["x", 10, "x", 2, "10", 10, true, true]);

//SOLUCION 26 


const promedio = (array = undefined) => {

    if (!array) console.log('ingresa los numeros a elevar al cuadrado');
    if (!(array instanceof Array)) console.log('ingresa un array valido');
    if (array.length === 0) console.log('el arreglo esta vacio');

    for (const i of array) {
        if (typeof i !== 'number') return console.log(('el valor ingresado no es un numero'));
    }

    let x = array.reduce((acumulator, current) => (acumulator + current));
    console.log(x / array.length);
}

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
