function body() {
    document.getElementById('gamebody').style.overflow = "auto";
}

function sections() {
    document.getElementById('gameplay').style.display = 'block';
    document.getElementById('nav').style.display = 'none';
}

function showGameplay() {
    if (document.getElementById('gameplay').style.display = 'none') {
        document.getElementById('gameplay').style.display = 'block'
        document.getElementById('nav').style.display = 'none';
    }
}

function showNav() {
    if (document.getElementById('nav').style.display = 'none') {
        document.getElementById('nav').style.display = 'block'
        document.getElementById('gameplay').style.display = 'none';
    }
}