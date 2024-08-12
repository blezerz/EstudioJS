class Animal{
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }
  
  informacion(){
    return "["+this.nombre+"] - ["+this.peso+"]kg - ["+this.edad+"] años"
  }
}
//sub clase perro
class Perro extends Animal{
  constructor(nombre,peso,edad,raza){
    super(nombre,peso,edad);
    this.raza=raza;
  }
  
  informacion(){
    return "["+this.nombre+"] - ["+this.peso+"]kg - ["+this.edad+"] años" + " - ["+this.raza+"]"}
}

//gato
class Gato extends Animal{
  constructor(nombre,peso,edad,sexo){
    super(nombre,peso,edad);
    this.sexo=sexo;
  }
  informacion(){
    return "["+this.nombre+"] - ["+this.peso+"]kg - ["+this.edad+"] años" + " - ["+this.sexo+"]"}
}

  
class Conejo extends Animal{
  constructor(nombre,peso,edad,color){
    super(nombre,peso,edad);
    this.color=color}
  
  informacion(){
      return "["+this.nombre+"] - ["+this.peso+"]kg - ["+this.edad+"] años" + " - ["+this.color+"]"}
};


let perro1=new Perro("Firulais",8,22,"Pastor Aleman");
let gato1= new Gato("Michi",2,4,"Macho");
let conejo1= new Conejo("Miguel",1,3,"Blanco");
let arrayAnimales=[perro1,gato1,conejo1];

function mostrar(){
  let lista= document.getElementById("lista");
  lista.innerHTML="";
  for(let i of arrayAnimales){
    let elementoText=i.informacion()
    alert(elementoText)
    elementoLi=document.createElement("li");
    elementoLi.textContent=elementoText;
    lista.appendChild(elementoLi)
  }
  
  
}
