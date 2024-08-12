let boton = document.getElementById("miBoton");
let enlace = document.getElementById("miEnlace");

function evitarEnlace(event){
  event.preventDefault();
  alert('enlace no habilitado');
}

//funcion qque mostrara el elemento targetiado
function mostrarMensaje(event){
  alert(event.target);
}


//evento click en el elemento boton que mostrara el elemnto html seleccionado
boton.addEventListener('click',mostrarMensaje):
enlace.addEventListener('click',evitarEnlace);