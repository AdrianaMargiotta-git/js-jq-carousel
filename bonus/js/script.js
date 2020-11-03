//Esercizio base + i pallini si evidenziano in accordo alla img corrispondente
$
(document).ready( function() {

  // seleziono rispettivamente le classi next e prev, alle quali associo rispettivamente la funzione nextImg e prevImg al click
  $(".prev").click( function(){
    imgTotale("prev");
  });

  $(".next").click( function(){
    imgTotale("next");
  });


/********************FUNZIONI**********************************/

  // funzioni
  function imgTotale(direzione) {
    //mi creo una variabile dove mi salvo la selezione di img che ha classe active
    var imgAttiva = $("img.active");
    //BONUS: mi creo una variabile dove mi salvo la selezione di i che ha classe active
    var cerchioAttivo = $("i.active");

    //si rimuovono in entrambi la classe active precedente per non sovrapporle
    imgAttiva.removeClass("active");
    cerchioAttivo.removeClass("active");

    //immagini avanti
    if (direzione === "next") {
      //se dove sono è l'ultima img allora
        //ciclo per controllare che vi sia un'immagine bianca
      if(imgAttiva.hasClass("last")){
        //torna alla prima img
        $("img.first").addClass("active");
        $("i.first").addClass("active");
      } else {//altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.next("img").addClass("active");
        cerchioAttivo.next("i").addClass("active");
      };
    };

    //immagini indietro
    if (direzione === "prev") {
      //se dove sono è l'ultima img allora
        //ciclo per controllare che vi sia un'immagine bianca
      if (imgAttiva.hasClass("first")) {
        //torna alla prima img
        $("img.last").addClass("active");
        $("i.last").addClass("active");
      } else {//altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.prev("img").addClass("active");
        cerchioAttivo.prev("i").addClass("active");
      };
    };

  };

  //funzione per cambiare immagini con frecce sx e dx (37 e 39)
  $(document).keydown(function(change){
    if (change.keyCode === 37) {
      imgTotale("prev");
    } else if (change.keyCode === 39) {
      imgTotale("next");
    };
  });

  //funzione per cambiare immagini con frecce sopra e sotto (38 e 40)
  $(document).keydown(function(change){
    if (change.keyCode === 38) {
      imgTotale("prev");
    } else if (change.keyCode === 40) {
      imgTotale("next");
    };
  });


});
