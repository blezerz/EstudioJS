//exosten expreciones de clases y declaraciones de clases

//empecamos con una declaracion de clase que pueden ser publicas o privadas
//es una clase que sirve como constructor
class Papel{
  constructor(alto,ancho){
    this.alto=alto;
    this.ancho=ancho;
  }
}

//exprecion de clase se hace a traves de una variable

let PapelA=class{
  constructor(alto,ancho){
    this.alto=alto;
    this.ancho=ancho;
  }
}
//clases nombradas, sirven para darle un nombre a la clase que sea distinto a la variable
let PapelB=class Papelx{
    constructor(alto,ancho){
      this.alto=alto;
      this.ancho=ancho;
    }
}