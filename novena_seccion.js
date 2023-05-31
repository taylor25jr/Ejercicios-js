/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.----listo
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números. ----listo
  - Valida que el título no rebase los 100 caracteres.---listo
  - Valida que el director no rebase los 50 caracteres. ----listo
  - Valida que el año de estreno sea un número entero de 4 dígitos. ---listo
  - Valida que el país o paises sea introducidos en forma de arreglo. ---listo
  - Valida que los géneros sean introducidos en forma de arreglo. ----listo
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*. ---Listo
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición. --Listo
  - Crea un método que devuelva toda la ficha técnica de la película. --- Listo
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.



*/


class Pelicula {

    constructor(idPelicula, titulo, director, anioEstreno, paisOrigen, genero, calificacion) {
        let imbd = Array.from(idPelicula);

        if (!idPelicula) throw console.error('El id de la pelicula es obligatorio');
        if (!titulo) throw console.error('El titulo de la pelicula es obligatorio');
        if (!director) throw console.error('El director de la pelicula es obligatorio');
        if (!anioEstreno) throw console.error('El anio de estreno de la pelicula es obligatorio');
        if (!paisOrigen) throw console.error('El pais de origen de la pelicula es obligatorio');
        if (!genero) throw console.error('El genero de la pelicula es obligatorio');
        if (!calificacion) throw console.error('La calificaion de la pelicula es obligatorio');

        //Validaciones de idPelicula
        if (idPelicula.length > 9 || idPelicula.length < 9) throw console.error('ingresa solo 9 caracteres');

        let verificarString = imbd.slice(0, 1);
        let verificarNumber = imbd.slice(2, 9).join('');

        if (!/^[a-zA-Z]+$/g.test(verificarString)) throw console.error('solo se permiten letras en los dos primeros caracteres');;
        if (!/^[0-9]{2,9}$/g.test(verificarNumber)) throw console.error('solo se permiten numeros luego de los dos primeros caracteres');;

        //Validaciones de titulo
        if (titulo.length > 100) throw console.error('superaste el numero de caracteres en el titulo de la pelicula');

        //Validacion Director
        if (director.length > 50) throw console.error('Superaste el numero de caracteres en el nombre del director');

        //Validar anio de estreno
        if (typeof anioEstreno !== 'number') throw console.error('Solo puedes ingresar numeros en el anio de estreno');
        if (anioEstreno.toString().length > 4) throw console.error('Solo puedes ingresar 4 digitos');

        //Validar pais

        if (!Array.isArray(paisOrigen)) throw console.error('el pais y/o paises debes ingresarlo en array');

        //Validar Generos

        if (!Array.isArray(genero)) throw console.error('el genero debe ser ingresado en array');

        //Validar la categoria del genero

        const genres = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

        if (!genres.includes(genero[0])) throw console.error('El genero no esta en la lista');

        //Validar calificacion
        if (calificacion > 10) throw console.error('el rango es de 0 a 10');
        if (!/^-?\d+\.\d$/g.test(calificacion)) throw console.error('Calificacion no valida');
        if (Math.sign(calificacion) === -1) throw console.error('No puedes calicar con numeros negativos');





        this._idpelicula = idPelicula;
        this._titulo = titulo;
        this._director = director;
        this._anioEstreno = anioEstreno;
        this._paisOrigen = paisOrigen;
        this._genero = genero;
        this._calificacion = calificacion;
    }

    static agree(genres) {
        console.log(genres)
    }

    get idPelicula () {
        return this._idpelicula;
    }
    get titulo () {
        return this._titulo;
    }
    get director () {
        return this._director;
    }
    get anioEstreno () {
        return this._anioEstreno;
    }
    get paisOrigen () {
        return this._paisOrigen;
    }
    get genero () {
        return this._genero;
    }
    get calificacion () {
        return this._calificacion;
    }

    set idPelicula(idPelicula){
        return this._idpelicula = idPelicula;
    }
    set titulo(titulo){
        return this._titulo = titulo;
    }
    set director(director){
        return this._director = director;
    }
    set anioEstreno(anioEstreno){
        return this._anioEstreno = anioEstreno;
    }
    set paisOrigen(paisOrigen){
        return this._paisOrigen = paisOrigen;
    }
    set genero(genero){
        return this._genero = genero;
    }
    set calificacion(calificacion){
        return this._calificacion = calificacion;
    }

    fichaTecnica(){
        console.log(`${this._idpelicula} ${this._titulo} ${this._director} ${this._anioEstreno} ${this._paisOrigen} ${this._genero} 
        ${this._calificacion}`)
    }




}

const clase1 = new Pelicula('er9809876', 'Scream', 'jorge', 2002, ['arabia'], ['Comedy'], 3.4)
console.log(clase1);
clase1.fichaTecnica()



