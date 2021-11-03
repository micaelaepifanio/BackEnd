class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreMascota) {
        this.mascotas.push (nombreMascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        const libro = {
            nombre : nombre,
            autor : autor
        }
        this.libros.push (libro)
    }

    getBookNames ()  {
        const result = []
        for (var i = 0; i < this.libros.length; i++) {
            result.push (this.libros [i].nombre)
        }

        return result
    }

}

const usuario = new Usuario ("Carlos", "Diaz")
usuario.addMascota ("Curry")
usuario.addBook ("Carrie", "Stephen King")
console.log (usuario.getFullName (), usuario.countMascotas (), usuario.getBookNames ())