/*

18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */



const contador = (texto) => {

    if (!texto) console.info('no has ingresado un texto');
    if (Math.sign(texto) === -1) console.error('no puedes ingresar numeros negativos');
    if (texto >= 0) console.error('no puedes ingresar numeros')

    let array = Array.from(texto);
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let indice = 0;
    let noVocales = 0;

    for (let i = 0; i < array.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) { indice++; }
        if (consonantes.includes(texto[i].toLowerCase())) noVocales++;
    }

    console.log(`El texto ingresado tiene ${indice} vocales`)
    console.log(`El texto ingresado tiene ${noVocales} consonantes`)

}

contador('')

// Cabe resaltr que las validaciones no pueden ser vistas en la consola de quokka sino en la consola del navegador que es la que permite el tipo de console proporcionado.


//SOLUCION 19

const validarNombre = (nombre = '') => {

    if (!nombre) console.log('ingresa un nombre');
    if (typeof nombre !== 'string') console.log('ingresa un string valido');

    let expREg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜÙŪ\s]+¢/g.test(nombre);

    (nombre) ? console.log('Nombre ingresado correctamente')
        : console.log('Nombre invalido,vuelva a igresarlo')
}

validarNombre()

//SOLUCION 20

const validarCorreo = (correo = '') => {
    if (!correo) console.log('ingresa un correo');
    if (typeof correo !== 'string') console.log('ingresa un string valido');

    let expREg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(correo);

    (expREg) ? console.log('gracias por ingresar un correo valido')
        : console.log('vuelve a ingresar un correo valido');
};


validarCorreo('')