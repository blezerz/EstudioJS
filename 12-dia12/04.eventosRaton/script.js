let miMenu = document.getElementById("miMenu");
let miBoton = document.getElementById("miBoton");
//con el eventi click y la funcion anonima al acer clic en el boon cambiaremos las propiedades del estilo  del elemento miMenu de none a block lo que ara que apareseca el elemento 
miBoton.addEventListener("click",function(){
  miMenu.style.display ="block";
})

miBoton.addEventListener("mouseover",function(){
  miMenu.style.display ="none";
});

//clientX para capturar la posicion x del raton, clientY para capturar la posicion y del raton
document.addEventListener("mausemove",function(event){
  console.log("Posicion x : "+ event.clientX + "- Posicion y : "+ event.clientY)
})