
//Funciones Globales-----------------------
let Elementonum1 = document.getElementById("inputNum1");
let Elementonum2 = document.getElementById("inputNum2");
let txtResultado = document.getElementById("resultado");
let n1;
let n2;
let n3;
let resultado;
//Sumar_---------------------------------------------------------

function sumar(num1, num2) {
   resultado = +num1 + +num2;
   return resultado;
 }


//si en el html el script lo dejamos arriba tendra errores las variables , el script se deja al final del html

function btnSuma() {
  n1 = Elementonum1.value;
  n2 = Elementonum2.value;
  n3 = sumar(n1, n2);
  txtResultado.textContent = n3;
}


//Resta_---------------------------------------------------------

function restar(num1, num2){
  resultado = +num1 - +num2;
  return resultado;
}

function btnResta(){
  n1 = Elementonum1.value;
  n2 = Elementonum2.value;
  n3 = restar(n1, n2);

  txtResultado.textContent = n3;
}


//Multiplicacion_---------------------------------------------------------

function multiplicar(num1, num2){
  resultado = +num1 * +num2;
  return resultado;
}

function btnMultiplicar(){
  n1= Elementonum1.value;
  n2 = Elementonum2.value;
  n3= multiplicar(n1, n2);
  txtResultado.textContent = n3;

}

//dividir------------------------------------

function dividir(num1,num2){
  resultado = +num1 / +num2;
  return resultado;
}

function btnDividir(){
  n1= Elementonum1.value;
  n2= Elementonum2.value;
  n3 = dividir(n1,n2);
  txtResultado.textContent = n3;
}

//Potencia------------------------------------
function Potencia(num1,num2){
  resultado= Math.pow(num1,num2);
  return resultado;

}
function btnPotencia(){
  n1= Elementonum1.value;
  n2= Elementonum2.value;
  n3= Potencia(n1,n2);
  txtResultado.textContent = n3;
}

//Absoluto------------------------------------

function Absoluto(num1){
  resultado=Math.abs(num1);
  return resultado;
}

function btnAbsoluto(){
  n1=Elementonum1.value;
  n3= Absoluto(n1);
  txtResultado.textContent= n3;
}
//Raiz------------------------------------

function Raiz(num1){
  resultado=Math.sqrt(num1);
  return resultado;
}

function btnRaiz(){
  n1=Elementonum1.value;
  n3=Raiz(n1)
  txtResultado.textContent=n3;
}

//random------------------------------------

function random(max,min){
  resultado= Math.floor(Math.random() * (max-min)+min);
  return resultado;
}
function btnRandom(){
  n1=+Elementonum1.value;
  n2=+Elementonum2.value;
  n3=random(n1,n2);
  txtResultado.textContent=n3;
}
//redondeo------------------------------------
function redondeo(){
  n3=Math.round(n3);
  txtResultado.textContent=n3;
};

//redondeo abajo------------------------------

function redondeoAbajo(){
  n3=Math.floor(n3);
  txtResultado.textContent=n3;
}

//redondeo arriba------------------------------

function redondeoArriba(){
  n3=Math.ceil(n3);
  txtResultado.textContent=n3;
}


// Definir el nuevo input
let ElementoFuncion = document.getElementById("inputFuncion");

// Derivada usando math.js
function derivar(funcion) {
  return math.derivative(funcion, 'x').toString();
}

// Doble derivada usando math.js
function dobleDerivar(funcion) {
  let primeraDerivada = math.derivative(funcion, 'x');
  return math.derivative(primeraDerivada, 'x').toString();
}

// Botón para derivada
function btnDerivada() {
  let funcion = ElementoFuncion.value;
  let resultadoDerivada = derivar(funcion);
  txtResultado.textContent = resultadoDerivada;
}

// Botón para doble derivada
function btnDobleDerivada() {
  let funcion = ElementoFuncion.value;
  let resultadoDobleDerivada = dobleDerivar(funcion);
  txtResultado.textContent = resultadoDobleDerivada;
}