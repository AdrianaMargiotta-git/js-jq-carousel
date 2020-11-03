/*Creare uno slider di immagini. Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider*/

$(document).ready(function(){

  //10-11 seleziono rispettivamente le classi next e prev, alle quali associo rispettivamente la funzione nextImg e prevImg al click
  $(".next").click(nextImg);
  $(".prev").click(prevImg);


  /********************FUNZIONI**********************************/

  //funzione per l'avanti
  function nextImg() {
    //mi creo una variabile dove mi salvo la selezione di img che ha classe active
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    //se dove sono è l'ultima img allora
      //ciclo per controllare che vi sia un'immagine bianca
    if (imgAttiva.hasClass("last")){
      //torna alla prima img
      $("img.first").addClass("active");
    } else {//altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.next("img").addClass("active");
    };
  };

  //funzione per l'indietro
  function prevImg() {
    //mi creo una variabile dove mi salvo la selezione di img che ha classe active
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    //se dove sono è l'ultima img allora
      //ciclo per controllare che vi sia un'immagine bianca
    if (imgAttiva.hasClass("first")){
      //torna alla prima img
      $("img.last").addClass("active");
    } else {//altrimenti
      //fai diventare attiva l'immagine precente
      imgAttiva.prev("img").addClass("active");
    };
  };

  //funzione per cambiare immagini con frecce sx e dx (37 e 39)
  $(document).keydown(function(change){
    if (change.keyCode === 37) {
      prevImg();
    } else if (change.keyCode === 39) {
      nextImg();
    };
  });

  //funzione per cambiare immagini con frecce sopra e sotto (38 e 40)
  $(document).keydown(function(change){
    if (change.keyCode === 38) {
      prevImg();
    } else if (change.keyCode === 40) {
      nextImg();
    };
  });

});
