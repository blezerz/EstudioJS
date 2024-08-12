function  Libro(autor,titulo.cantPaginas){
  this.autor =autor;
  this.titulo= titulo;
  this.cantPaginas=cantPaginas;
}

let libro1 = new Libro("Stiphen King","Carrie", 524);

//libro1.valueOf nos 
//las propiedades del objeto escalaran desde la instancia libro 1 a la funcion constructora y por ultimo al objeto en si, en donde encontrara le metodo predefindo valueOf que nos dara los datos del elemetno si esta echo con constructr y prototipo

console.log(libro1.valueOf());
