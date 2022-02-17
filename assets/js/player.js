var audio = [];
var video = [];
var playerVideo = $("video");
var playerAudio = $("audio");
var videoList = $("#videoList");
var audioList = $("#audioList");

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
        },
        error: function (error) {
            console.log(error.status);
        },
    });
};

function creaLista() {
    for (i = 0; i < audio.length; i++) {
        audioList.append("<li class='list-group-item' onclick='playAudio(" + i + ")'>" + audio[i].title + "</li>");
    };
    for (i = 0; i < video.length; i++) {
        videoList.append("<li class='list-group-item' onclick='playVideo("+i+")'>" +video[i].title +"</li>");
    }
};

function playAudio(id) {
    playerAudio.attr("src", "assets/audio/" + audio[id].file);
    playerAudio.trigger("play");
    console.log(audio);
};

function playVideo(id) {
    playerVideo.attr("src", "assets/video/" + video[id].file);
    playerVideo.trigger("play");
    console.log(video);
};

$(document).ready(caricaAJAX())