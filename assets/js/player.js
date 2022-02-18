// Elenco delle variabili che mi servono durante le esecuzioni.
var audio = [];     // Array per i dati audio
var video = [];     // Array per i dati video
var playerVideo = $("video"); // jQuery richiamo il player video
var playerAudio = $("audio"); // jQuery richiamo il player audio
var videoList = $("#videoList"); // Lista video
var audioList = $("#audioList"); // Lista audio

// Funzione Ajax che chiama il json
function caricaAJAX() {
  $.ajax({
    type: "GET",
    url: "assets/JSON/media.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      audio = response.audio;
      video = response.video;
      creaLista();
      // assegno ai due array i rispettivi elenchi di dati e creo le due liste nell'html
    },
    error: function (error) {
      console.log(error.status);
    },
  });
}

// Funzione per creare le due liste
// Uso append e il metodo visto nella todo list per dare in automatico un valore alle funzioni che richiamo onclick
function creaLista() {
  for (i = 0; i < audio.length; i++) {
    audioList.append(
      "<li class='list-group-item' onclick='playAudio(" +
        i +
        ")'>" +
        audio[i].title +
        "</li>"
    );
  }
  for (i = 0; i < video.length; i++) {
    videoList.append(
      "<li class='list-group-item' onclick='playVideo(" +
        i +
        ")'>" +
        video[i].title +
        "</li>"
    );
  }
}

// Le due funzioni playAudio e playVideo sono praticamente identiche. Si attivano onclick negli LI e hanno come ID il valore i assegnato durante la creazione, usando per recuperare stavolta non il nome della canzone ma il file stesso
function playAudio(id) {
  playerAudio.attr("src", "assets/audio/" + audio[id].file);
  playerAudio.trigger("play");
  console.log(audio);
}

function playVideo(id) {
  playerVideo.attr("src", "assets/video/" + video[id].file);
  playerVideo.trigger("play");
  console.log(video);
}

// A document ready fa partire caricaAJAX, la funzione iniziale
$(document).ready(caricaAJAX());
