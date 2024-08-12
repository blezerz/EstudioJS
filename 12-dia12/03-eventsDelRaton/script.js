let campo = document.getElementById("micampo");

// si se apreta algun boton que no se un numero entonces el evento predeterminado se cancelara y no se escribira nada en el imput
function verificarNumero(event){
  if(event.keyCode < 48 || event.keyCode > 57){
    event.preventDefault();
  };
};

//KeyDown evento cuando se precona algun boton, y llama a la funcion verificar numero para que no dejara que se impirman nada que no sea numero 
campo.addEventListener("keydown", verificarNumero);

//keyup evento cuando se suelta el boton
campo.addEventListener("keyup",function(event){
  //mostrara el valor del imput en consola
  console.log("entrada del usuario:" + event.target.value)
});
//eventoo cuando se mantiene presionado el boton
campo.addEventListener("keypress",function(event){
  //event.key devolvera la tecla que se presiono
  
  console.log("Caracter ingresado: " + event.key);
})