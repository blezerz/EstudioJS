//creamos una clase deportista
class Deportista{
  constructor(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
  }
}

//una clase futbolista que tomara como erencia nombre y apellido de deportista y se le agregara un atributo extra
class Futbolista extends Deportista{
  constructor(nombre, apellido, goles){
    super(nombre, apellido);
    this.goles=goles;
  }
}

//objeto deportista
let deportista1 = new Deportista("Gustavo", "Escobar")

//en consola mostramos el apellido
//deportista1.apellido

//objeto futbolista con erencia de deportista
let futbolista1 = new Futbolista("Gustavo", "Escobar", "10")

