let array1=["a", "b", "c"];

for(let letra of array1){
  document.write("<p>"+letra+"</p>");
}

//los loops igual pueden ir dentro de funciones

function loopear(){
  for(let letra of array1){
    document.write(letra)
  }
}
//con esto podemos recorrer un array,  una variable de string 