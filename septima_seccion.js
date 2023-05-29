/*

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

//SOLUCION 21

const cuadrado = (array) => {
    let con = array.toString().split('');

    let elevacion = [];

    for (const i of con) {
        elevacion.push(i ** 2)
    }

    (!array) ? console.log('ingresa los numeros a elevar al cuadrado')
        : (typeof array !== 'number') ? console.log('ingresa solo numeros')
            : (Math.sign(array) === -1) ? console.log('ingresa solo numeros positivos')
                : console.log(elevacion)
}

cuadrado(145);

//SOLUICION 22

const numero = (array = []) => {

    const valores = array.map(Number)
    let valorMinimo = Math.min(...valores);
    let valorMaximo = Math.max(...valores);

    (!array) ? console.log('ingresa los numeros a elevar al cuadrado')
        : console.log(valorMaximo, valorMinimo);
}

numero([1, 2, 3, 4]);


//SOLUCION 23

const imprimir = (input = []) => {

    /*Forma por metodo map */

    let numerosPares = input.map(index => index % 2 === 0 ? index : null).filter(n => n !== null);
    console.log(numerosPares);

    let numerosImpares = input.map(index => index % 2 !== 0 ? index : null).filter(n => n !== null);
    console.log(numerosImpares)



    /*Forma por metodo for of */

    let imparNumero = [];
    let parNumero = [];

    for (const i of input) {

        if (i % 2 === 0) parNumero.push(i);
        if (i % 2 !== 0) imparNumero.push(i);
    }
    console.log(parNumero);
    console.log(imparNumero);
}

imprimir([2, 4, 3])