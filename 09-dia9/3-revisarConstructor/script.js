
function Libro(autor,titulo,cantPaginas){
  this.autor =autor;
  this.titulo= titulo;
  this.cantPaginas=cantPaginas;
}

let libro1 = new Libro("Stiphen King","Carrie", 524);

//creamos un objeto libro 2 pero con protipo de libro 1, que le dara finalmente el valor de libro1 como enlace
let libro2 = Object.create(libro1);
//libro2.__proto__ nos mostrara el valor que nos da el enlace al libro uno ya que fue creado mediante con prototipo
