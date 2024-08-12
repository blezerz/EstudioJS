function Automovil(marca,modelo,anio,titular){
  this.marca=marca;
  this.modelo=modelo;
  this.anio=anio;
  this.titular=titular;
}

a1=new Automovil("Toyota","Corolla",2020,"Juan");
a2=new Automovil("Nissan","Sentra",2020,"Pedro");
a3=new Automovil("Toyota","Corolla",2020,"Juan");
arrayAuto=[a1,a2,a3];

Automovil.prototype.venderAutomvil=function(nombre){
  this.titular=nombre;
}
Automovil.prototype.verAuto=function(){
  text=(this.marca+" "+this.modelo+" "+this.anio+" "+this.titular)
  return text;
}
Automovil.prototype.encender=function(){
  alert("El auto esta encendido")
}

function MostrarInformacion(){
  
  let lista= document.getElementById("lista")
    lista.innerHTML="";
  for( i of arrayAuto){
    let elementoLi = document.createElement("li")
    text2=i.verAuto();
    elementoLi.textContent=text2;
    lista.appendChild(elementoLi);
    
  }
}