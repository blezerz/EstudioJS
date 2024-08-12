let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

//el evneto change sirve para cuanod se repordusca un cambio en el elementio y llamara la funcion apra cambiar la cancion
listaCanciones.addEventListener("change", cambiarCancion);

function cambiarCancion(){
  //se selecciona el valor de la cancion que se a elegido (nombre)
  let cancionElegida=listaCanciones.value;
  //al reproductor de audio que tenia un src vacio, ahora le asignamos el valor de la cancion que se a escogido
  audio.src=cancionElegida;
  //le damos play al reproductor
  audio.play();

  //creamos un evento perzonalizado con el nombre cambio8t6dutx,
  let evento = new CustomEvent("cambioDeCancion");
  audio.dispatchEvent(evento);
}

audio.addEventListener("cambioDeCancion", mostrarCancion);

function mostrarCancion(){
  alert("La cancion actual es "+listaCanciones.value);
}