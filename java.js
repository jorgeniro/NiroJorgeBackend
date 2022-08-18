
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }    
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);
    }
    
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }
    
    countMascotas(){
        console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`);
    }
    
    getBooksNames(libros){
        console.log(libros.map(libro => libro.nombreLibro));
    }
    
    addBook(nombreLibro, autorLibro){ 
        this.libros.push({nombreLibro, autorLibro});
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


