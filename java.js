
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }    
    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`);
    }

    
    addMascota(nombreMascota) {
        return this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
        return console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`);
    }
    
    getBooksNames(libros){
        return console.log(libros.map(libro => libro.nombreLibro));
    }
    
    addBook(nombreLibro, autorLibro){ 
        return this.libros.push({nombreLibro, autorLibro});
    }
}

const usuario1 = new Usuario('Jorge', 'Niro');
usuario1.getFullName();
usuario1.addMascota('Robelius');
usuario1.addMascota('Nisperelius')
usuario1.countMascotas();
usuario1.addBook('Yo mato', 'Giorgio faletti');
usuario1.addBook('El psicoanalista', 'Jhon Katzenbach');
usuario1.getBooksNames(usuario1.libros);


