let tituloPeli = document.getElementById("tituloPeli");
let edadInput = document.getElementById("edad");
let imgPeli = document.getElementById("imgPeli");


function recomendar(genero){
  let edad= +edadInput.value;
  if (genero == "comedia" && edad >= 16)
  {//clasificacion adulto comedia
    tituloPeli.textContent = "El lobo de wallStreet";
    imgPeli.src = "elLobo.jpg";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "El lobo de wallStreet es una comedia adulto + 16"; 
  }else if(genero == "comedia" && edad >= 13 && edad < 16) {
    //clasificacion adolcente comedia
    tituloPeli.textContent = "El Show de Truman";
    imgPeli.src="truman.jfif";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "El show de truman es una comedia para adolecentes +13"
    
  }else if(genero == "comedia"){
    //Todo Publico
    tituloPeli.textContent="Volver al futuro";
    imgPeli.src="volver.jfif";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "Volver al futuro es una comedia para todo publico"
    
  };

  //genero crimen---------------------------------------------------------

  if (genero == "crimen" && edad >= 16)
  {//clasificacion adulto crimen
    tituloPeli.textContent = "El Abuelo";
    imgPeli.src = "abuelo.jfif";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "El abuelo es una pelicula de crimen para adulto + 16"; 
  }else if(genero == "crimen" && edad >= 13 && edad < 16) {
    //clasificacion adolcente crimen
    tituloPeli.textContent = "el secreto de tus ojos";
    imgPeli.src="secreto.jpg";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "El secreto de tus ojos es una pelicuala de crimen  para adolecentes +13";

  }else if(genero == "crimen"){
    //Todo Publico
    tituloPeli.textContent="No ahi";
  

  };

  //drama------------------------------------------------------

  
  if (genero == "drama" && edad >= 16)
  {//clasificacion adulto drama
    tituloPeli.textContent = "El Abuelo";
    imgPeli.src = "abuelo.jfif";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "El abuelo es una pelicula de crimen para adulto + 16"; 
  }else if(genero == "drama" && edad >= 13 && edad < 16) {
    //clasificacion adolcente drama
    tituloPeli.textContent = "The Shawshank Redemption";
    imgPeli.src="red.webp";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "The Shawshank Redemption es una pelicuala de drama para adolecentes +13";

  }else if(genero == "drama"){
    //Todo Publico
    tituloPeli.textContent="casablanca";
    imgPeli.src="casablanca.webp";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "casablanca es una pelicula de drama para todo publico";


  };

  //musica------------------------------------------------------
  if (genero == "musica" && edad >= 16)
  {//clasificacion adulto musica
    tituloPeli.textContent = "The Rocky Horror Picture Show";
    imgPeli.src = "horror.jpg";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "The Rocky Horror Picture Show es una pelicula de musica para adulto + 16"; 
  }else if(genero == "musica" && edad >= 13 && edad < 16) {
    //clasificacion adolcente musica
    tituloPeli.textContent = "Les Miseranbles";
    imgPeli.src="lesMiserables.webp";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "Les Miserables es una pelicuala de crimen para adolecentes +13";

  }else if(genero == "musica"){
    //Todo Publico
    tituloPeli.textContent="LA la LAND";
    imgPeli.src="lalaland.jpg";
    imgPeli.style.width = "300px";
    textoPeli.textContent = "LA la LAnd es una pelicula de Musica para todo publico";


  }
}



