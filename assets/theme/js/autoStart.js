function autoPlay() {

    var x = document.getElementById("bg_music");
    x.volume = 0.01;
    x.autoplay = true;
    x.load();
}