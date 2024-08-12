
function Libro(autor,titulo,cantPaginas){
  this.autor =autor;
  this.titulo= titulo;
  this.cantPaginas=cantPaginas;
}

let libro1 = new Libro("Stiphen King","Carrie", 524);
//esto sirve para cambiar un objeto en especifico, pero no para cambiar el constructor del objeto
libro1.abrirLibro=function(){
  alert(this.titulo+" ha sido abierto")
}
//si se quiere cambiar el prototipo de un objeto, se debe hacer asi
Libro.prototype.abrirLibro=function(){
  alert(this.titulo+" ha sido abierto")
}