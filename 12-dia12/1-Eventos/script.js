let boton = document.getElementById("miBoton");

// indicamos que boton tiene el evento click
//le damos una funciona anonima para indciar el boton precionado
boton.addEventListener("click", function() {
  alert("Boton Precionado");
})


//lo mismo pero una funcion no anonima
let boton2 =document.getElementById("miBoton2");

function mensaje(){
  alert("boton2");
}
boton2.addEventListener("click",mensaje);

let boton3 = document.getElementById("miBoton3");

function mensaje2(){
  alert("3ER mensaje");
}

boton3.addEventListener("mouseover", mensaje2)