function evaluarCompra(){
  let elementoRespuesta=document.getElementById("decision");
  let elementoPrecio=document.getElementById("textoPrecio");
  let precio=elementoPrecio.value;

  if(precio<5){
    elementoRespuesta.textContent="Hay que comprar la leche";
  }
}