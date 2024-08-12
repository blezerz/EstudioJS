function calcularLitros() {
  let elementoKm = document.getElementById("textoKm");
  let textoKm = elementoKm.value;
  let cantKm = Number(textoKm);
  
  let cantLitros = Math.ceil(cantKm / 8.8);

  let resultado = document.getElementById("textoResultado");
  resultado.textContent = "Necesitaras  " + cantLitros + " litros";
  
}