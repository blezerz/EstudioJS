function datosJson(){
  fetch('datos.json')
  .then(res=>res.json())
  .then((salida) => {
    
    let nomBanco = document.getElementById("banco");
    nomBanco.textContent=salida.banco;
    let nomSucursal = document.getElementById("sucursal");
      nomSucursal.textContent=salida.sucursal;
    let nombre = document.getElementById("nombre");
      nombre.textContent=salida.titular;
    
    let nCuenta = document.getElementById("nCuenta");
      nCuenta.textContent="N°Cuenta: "+salida.nroCuenta;
    let USD = document.getElementById("USD");
      USD.textContent=salida.saldo[0].moneda + " $"+salida.saldo[0].monto;

    let EUR = document.getElementById("EUR");
    EUR.textContent=salida.saldo[1].moneda + " $"+salida.saldo[1].monto;

    let CBU = document.getElementById("CBU");
    CBU.textContent=salida.nroCBU;
    
  })
  
  
}