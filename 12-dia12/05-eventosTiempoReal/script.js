//herramienta de comunicacion en tinmepo real de js (ws se indica el protocolo websocket, local host : direccion fictica sdle servidor, y luego el puerto del servidor);
let socket = new WebSocket("ws://localhost:8080");

let mensajeIngresado = document.getElementById("mensajeIngresado");
let botonEnviar = document.getElementById("botonEnviar");

function mostrarMensaje(contenido){
  let contenedorMensajes= document.getElementById("mensajeChat");
  let elementoMensaje = document.createElement("p");
  elementoMensaje.innerText = contenido;
  contenedorMensajes.appendChild(elementoMensaje);
}

botonEnviar.onclick = function(){
  let mensaje = mensajeIngresado.value;
  mostrarMensaje(mensaje);
  socket.send(mensaje);
};

//llamamos al objeto socket (con la funcion  onmensaje para recivir el mensaje del servidor) y le decimos que cuando reciba un mensaje (event.data) del servidor, lo muestre en la consola(cona la funcion creada anteriormente mostrarMensaje)
socket.onmensaje = function(event){
  let mensaje = event.data;
  mostrarMensaje(mensaje);
}