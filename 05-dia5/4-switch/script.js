function consultarPrecio(){
  let elementoRespuesta = document.getElementById( "Texto Precio" );

  let elementoFruta = document.getElementById( "numeroFruta" );
  
  let fruta = elementoFruta.value;

  switch(fruta)
    {
      case "1":
        elementoRespuesta.textContent = "El precio de la manzana es $8.45";
        break
      case "2":
        elementoRespuesta.textContent = "el precio de la manzana es $6.32";
        break
      case "3":
        elementoRespuesta.textContent = "el precio de la manzana es $2.16";
        break
      case "4":
        elementoRespuesta.textContent = "El precio es $5.58 ";
        break
      case "5":
        elementoRespuesta.textContent = "El precio es $7.21";
        beak
    }
}