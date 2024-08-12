//es una funcion que al ser llamada e igualada a una variable, mandandole un parametro de tipo " id html", iguala una variable al elemento html, luego lo transforma a in NUMBER para luego devolverlo y que la variable en la que fue creada transforme deimediato la variable en tipo number 
function extraerNumeroDesdeElemento(elemento){
  let miElemento = document.getElementById(elemento);
  let miTexto= miElemento.value;
  let miNumero= Number(miTexto);
  
  return miNumero;
}

function calcular(){
//creamos las variable y las transformam
  let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
  ventas1 = extraerNumeroDesdeElemento("ventasTienda1");
  ventas2 = extraerNumeroDesdeElemento("ventasTienda1");
  ventas3 = extraerNumeroDesdeElemento("ventasTienda1");
  ventas4 = extraerNumeroDesdeElemento("ventasTienda1");
  ventas5 = extraerNumeroDesdeElemento("ventasTienda1");
  ventas6 = extraerNumeroDesdeElemento("ventasTienda1");

  let totalVentas= ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

  let mensajeSalida= "Total Ventas: " + totalVentas;
  //creo el mensaje  final en una variable
  let elementoSalida= document.getElementById("parrafoSalida"); //caputuro el elemtno html
  elementoSalida.textContent=mensajeSalida//al elemento capturado le asigno el mensaje final
}[]