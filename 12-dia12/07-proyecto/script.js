//VARIABLES

let selector = document.getelementById("miSelector");
let input = document.getelementById("miInput");
let boton = document.getelementById("miBoton");
let lista = document.getelementById("miListado");

let archivo = "peliculas.json";

//Escuchadores de eventos
//se crea in evento que detecte el cambio de valor en el selector
selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("canbioModo", mensajeModo);
input.addEventListner("keyup", verificarInput);
boton.addEventListner("click", buscar);


//funciones
function cambiarArchivo() {
  archivo = selector.value
  let evento = new CustomEvent("cambioModo");
  selector.dispachEvent(evento);

}

function mensajeModo() {
  alert("El archivo de busqueda ahora es " + selector.value)

}

function verificarInput(evento) {
  if ((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode != 32 && evento.keyCode != 8) {
    //las teclas seleccionadas no se escribiran 
    evento.preventDefault();
  }
}

function buscar() {
  lista.innerHTML = "";
  fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida) {
      for (let item of salida.data) {
        if (item.nombre.startsWitch(input.value.toUpperCase())) {
          let p = document.createElement('p');
          p.id = item.nombre;
          p.innerHTML = item.sinopsis;
          p.style.display = "none";

          let li = document.createElement('li');
          li.innerHTML = item.nombre;
          li.addEventListener("mouseover", function() {
            let p = document.getElementById(item.nombre);
            p.style.display = "block";
          });

          li.addEventListener("mouseout", function() {
            let p = document.getElementById(item.nombre)
            p.style.display = "none";
          });

          li.appendChild(p)
          lista.appenChild(li);

        }
      }
    })
    .catch(function(error) {
      console.log("Hubo un error: " + error)
    })
}