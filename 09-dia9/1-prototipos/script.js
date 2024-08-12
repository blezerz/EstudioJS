//Creamos un objeto vacio
//let perro = {};

//creamos un objeto prototipo 
let perro={nombre:"simba"};

//creamos un objeto con create y parametro el prototipo
let perro1=Object.create(perro)

//el objeto perro1 queda vacio pero queda con los atributos del prototipo(perro),y sus atributos los edera del protitipo(perro)

//si en el la consola ponemos perro1.__proto__ nos dara el prototipo de perro1 que seran los datos del 