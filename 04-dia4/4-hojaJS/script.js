function sumar(numero1, numero2){//en los parentecis se ingresan los parametros
  resultado= +numero1 + +numero2;//Al agregarle un signo mas a las variables string que sean numerro , las transforma a variables number y asi poder trabajar con calculos con ellas, ya que los input toman los numeros como String de forma predeterminada
  return resultado;
}
function mostrarResultado(){
  let elementoNumero1 = document.getElementById("primerNumero");
  let elementoNumero2 = document.getElementById("segundoNumero");
  let elementoTexto = document.getElementById("textoResultado");
  let elementoSuma = sumar(elementoNumero1.value, elementoNumero2.value);
  alert("hola")

  elementoTexto.textContent = elementoSuma;

}