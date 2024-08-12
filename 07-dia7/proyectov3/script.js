/*
Arrays 
let misAmigos=['Monica','Ross', 'Chandler', 'Joey', 'Rachel','Phoebe';]

misAmigos.lenght
Nos dara el largo del array

misAmigos[4]
nos dara el elemetno que se encuentra en la posicion 4

misAmigos.indexOf('Chandler')
Nos dara la posicion del elemento que se encuentra en el array

misAmigos.pop()
Elimina el ultimo elemento del array
si se asigna a una variable , la variable quedara con el valor del elemento eliminado


misAmigos.shift(()
Elimina el primer elemento del array
si se asigna a una variable , la variable quedara con el valor del elemento eliminado

misAmigos.unshift('Reachel')
agrega un elemento al comienzo

misAmigos.push('Phoebe')
Agrega un elemento al final de tu elemtno

misAmigos.splice(2,3)
elimina elementos empezando desde la posicion dada en paramentros, y elimina la cantidad de elementos dada en el segundo parametro
*/ 



function crearParrafoTienda(textoLabel,valorMin) {
  //crer etiqueta parrafo con creatElemetn y la etiqueta se la pasamos entrecomillas p
  let elementoParrafo= document.createElement("p");
  
  //crear etiqueta label
  let elementoEtiqueta=document.createElement("label");

  //conectar el label con el imput
  //agregara un for en la etiqueta label y le asignara un id con el valor de textoLabel
  elementoEtiqueta.setAtrribute("for",textoLabel);

  //crear el input
  let elementoInput=document.createElement("input");

  //establecer atributos de input
  //con setAttribute se agregan atributos al elemento
  elemetnoInput.setAttribute("type","number");
  elementoInput.setAttribute("id",textoLabel);
  elementoInput.setAttribute("min",valorMin);
  elementoInput.setAttribute("value",0);

  //agregar label e input al parrafo
  //con appendChild agregamos un elemento hijo al elemento seleccionado
  elementoParrafo.appendChild(elementoEtiqueta);
  elementoParrafo.appendChild(elementoInput);

  //devolver el parrafo completo
  return elementoParrafo;
  
}

function extraerNumeroDesdeElemento(elemento){
  let miElemento = document.getElementById(elemento);
  let miTexto= miElemento.value;
  let miNumero= Number(miTexto);

  return miNumero;
}

function calcular(){
//creamos un array
  let ventas =[];
  //al erray le agregamos por posicion cada elemento tienda ya caputrado y trasnformado con la funcion extrar numero de elemento
  ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
  ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
  ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
  ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
  ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
  ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

  //a una funcion la igualamos a la funcion sumar total y le passamos el array para que sume su contenido ya transofmrado a numero
  let totalVentas= sumarTotal(ventas);
  //calculamos el mayor y el menor numero con las funciones calcular menor y mayor
  let ventaMayor = calcularMayor(ventas);
  let ventaMenor = calcularMenor(ventas);
//creamos el mensaje que se deve mostrar al calcular el valor de las ventas la tienda que menos vendo y la que mas vendio
  let mensajeSalida= "Total Ventas: " + totalVentas+
                      "/ Venta Mayor: "+ ventaMayor+
                      "/ Venta Menor: "+ ventaMenor;
  ////caputuro el elemtno html donde ira el mensaje final
  let elementoSalida= document.getElementById("parrafoSalida"); 
  //al elemento le asignamos el contendio del mensaje final
  elementoSalida.textContent=mensajeSalida
}

//funcion sumar total del array
function sumarTotal(array){
  let total=0;

   for(let venta of array){
     total =total + venta;
   }
  return total;
}

function calcularMayor(array){
  let maximo = array[0];

  for(let venta of array){
    if(venta > maximo){
      maximo=venta;
    }
  }
  return maximo;
}
function calcularMenor(array){
  let minimo = array[0];

  for(let venta of array){
    if(venta < minimo){
      minimo=venta;
    }
  }
  return minimo;
}