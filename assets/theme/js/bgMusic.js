var x = document.getElementById("bg_music");

function showVideo() {
    if (document.getElementById('modalWindow').style.display == 'none') {
        document.getElementById('modalWindow').style.display = 'block';
    }
}

function enableAutoPlay() {
    x.volume = 0.1;
    x.autoplay = true;
    x.load();
}

function enableMute() {
    x.muted = true;
}

function disableMute() {
    x.muted = false;
}