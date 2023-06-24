var tema = document.getElementById('link-css');
var logo = document.getElementById('logo');
var pokeball = document.querySelector('.pokeball');

function MudarTema() {

    if (tema.getAttribute('href') == './css/estilo.css') {
        tema.setAttribute('href', './css/estilo-noturno.css');
        logo.setAttribute('src', './imagens/moon.png');
    } else {
        tema.setAttribute('href', './css/estilo.css');
        logo.setAttribute('src', './imagens/sun.png');
    }
}
var musica = new Audio('./audio/pokemonmusica.mp3');

function TocarMusica() {
    pokeball.setAttribute('src', './imagens/pikachu.gif');
    pokeball.setAttribute('id', 'pikachu');
    musica.play();

}

function PararMusica() {
    pokeball.setAttribute('src', './imagens/pokeball.png');
    pokeball.setAttribute('id', 'pokebola');
    musica.pause();
}


function TocarParar() {
    if (pokeball.getAttribute('id') == 'pokebola') {
        TocarMusica();
    } else {
        PararMusica();
    }
}






