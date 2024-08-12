 miLoop:
for(y=1 ; y<=10 ; y++){
  if(y == 4){
    break miLoop;//vuelve a iniciar el loop saltando el resto del codigo en cambio con brack, quebraria el codigo en donde se pondria la etiqueta
  }
  document.write(y)
}