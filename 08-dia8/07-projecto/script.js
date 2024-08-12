//creamos una variable con array vacio
let empleados=[];

//una funcion que serivira de constructor para crear objetos
function Empleado(edad,nombre,apellido,fechaNaciimento,cargo){
  this.edad = edad;
  this.nombre = nombre;
  this.apellido = apellido;
  this.fechaNacimiento = fechaNaciimento;
  this.cargo = cargo;
}

//creamos una funcion que sera un boton, que nos dejara crear un objeto
function btnCargar(){
  //creamos una variable conectada a un input y le pedimos que nos de el valor
  let edad = Number(document.getElementById("dtEdad").value);
  let nombre = document.getElementById("dtNombre").value;
  let apellido = document.getElementById("dtApellido").value;
  let fechaNaciimento = document.getElementById("dtFechaNacimiento").value;
  let cargo = document.getElementById("dtCargo").value;
  
  //creamos un objeto con la funcion constructora y le pasamos los parametros obtenidos con las variables
  let objEmpleado = new Empleado(edad,nombre,apellido,fechaNaciimento,cargo);
  empleados.push(objEmpleado);
  alert("empleado creado")
  //y lo agregamos al array vacio con .push
  document.getElementById("dtEdad").value="";
  document.getElementById("dtNombre").value="";
  document.getElementById("dtApellido").value="";
  document.getElementById("dtFechaNacimiento").value="";
  document.getElementById("dtCargo").value="";
}



//creamos una funcion que nos devolvera en texto la lista de los empleados
function crearTexto(){
  //creaos una variable con texto vacio
  let texto = "";
  //creamos uun for para recorrer el array
  for(let i=0;i<empleados.length; i++){
    //a la variable vacia le sumamos un texto con los datos que queremos mostrar del objeto y una etiqueta br para el salto de linea
    texto += "Nombre: "+ empleados[i].nombre +"<br>"+ "Apellido: "+ empleados[i].apellido +"<br>"+ "Edad : "+empleados[i].edad +"<br>"+ "Fecha de nacimiento: "+empleados[i].fechaNacimiento +"<br>"+"Cargo :"+empleados[i].cargo +"<br>"+"<br>";
  }
  //al finalizar el for devolvemos el texto
  return texto;
}

//creamos una funcion que mostrara el texto creado 
function btnMostrar(){
  //a una variable le asignamos el elemento html donde se mostrara el texto
  let texto = document.getElementById("sas");
  //a una variable le asignamos la funcion crear texto, que devolvera el texto creado 
  let emp = crearTexto();
  //a la variable del elemento html le agregamos un archivo html que sera el texto creado
  texto.innerHTML = emp;
  }

