let arrayNotas = [6.9, 4.4, 5.6, 3.0, 6.8];
let notas = document.getElementById("listarNotas");
let resultado=document.getElementById("resultado");

function listarNotas() {
  for(let nota of arrayNotas){
    let item=document.createElement("li");//crea una variable de elmento etiqueta li
    item.innerText=nota;//a la variable etiqueta(li) le asigna el texto de la nota recorrida 
    notas.appendChild(item);// a la etiqueta ul del html le agrega el hijo (elemetno li) con el valor de la nota recorrida
  }
}

function promedioNotas(){
  let suma=0;
  
  
  for(let nota of arrayNotas){
    suma +=nota
  }
  let promedio = suma/arrayNotas.length;
  
  resultado.innerText=promedio
  
}

function notaAlta(){
  let notaAlta=0;
  let i = 0
  while(i < 5){
    if (arrayNotas[i] > notaAlta){
      notaAlta=arrayNotas[i];
    }
    i++;
  }
    resultado.innerText=notaAlta;
}

function notaRoja(){
  let rojo = "No";
  let i = 0;
  do {
    if (arrayNotas[i] < 4.0){
      rojo = "Si";
      break;
    }
    i++
  }while(i < 5);
  resultado.innerText=rojo
}