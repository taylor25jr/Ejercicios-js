/* 15) Programa una función para convertir números de base binaria a decimal y viceversa,
 pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
 pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
 pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/


//SOLUCION 15

const convertidor = (cant = 0, base = 0) => {

    if (base === 2) console.log(parseInt(cant, base))
    if (base === 10) console.log(parseInt(cant, base).toString(2))
}

convertidor(4, 10)

//SOLUCION 16

const sale = (q = 0, d = 0) => {

    let descuento = (q * d) / 100;

    if (!q && !d) return console.log('no has ingresado ningun dato');
    if (q === 0) return console.log('no has ingresado una cantidad');
    if (q <= 0) return console.log('no has ingresado una cantidad positiva');
    if (d === 0) return console.log('no has ingresado una cantidad');
    if (d <= 0) return console.log('no has ingresado una cantidad positiva');
    if (q && d) { console.log(descuento) }
}

sale(100, 2);

//SOLUCION 17

const fecha = (date = undefined) => {

    if (!(date instanceof Date)) console.log('el valor que ingresaste no es una fecha');

    let fecha = new Date().getTime() - date.getTime(),
        anios = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor(fecha / anios);


    if (Math.sign(aniosHumanos) === -1) console.log(`faltan ${Math.abs(aniosHumanos)} años para el ${date.getFullYear()}`)
    if (Math.sign(aniosHumanos) === 1) console.log(`han pasado ${aniosHumanos} años, desde ${date.getFullYear()}`)
    return
}


fecha(new Date(2011, 0, 25))