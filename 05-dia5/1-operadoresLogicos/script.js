function calcular(){
  let elementoRespuesta1 = document.getElementById("Respuesta1");
  let elementoRespuesta2 = document.getElementById("Respuesta2");
  let elementoRespuesta3 = document.getElementById("Respuesta3");

  let elementoEdad=document.getElementById("textoEdad");
  let edad=elementoEdad.value;
  
  let puedeBeber = edad >= 18;
  elementoRespuesta1.textContent=puedeBeber //operador de comparacion de valores

  let puedeIngresar = edad >= 18 && edad <= 30;//operador y
  elementoRespuesta2.textContent= puedeIngresar;

  let entradaGratis = edad >= 20 || edad >= 25 ;//operador or
  elementoRespuesta3.textContent=entradaGratis;
}