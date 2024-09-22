let codGreen = 0;
let codBlue = 0;
let codRed = 0;
let numeroMaximo = 255;


function exibeNaTela(elemento, texto){
    document.querySelector(elemento).innerHTML = texto;
}

function sorteaRed(){
    codRed = parseInt((Math.random())*numeroMaximo);
    exibeNaTela('#red',codRed);
    document.querySelector('.cor').style.background = `rgb(${codRed}, ${codGreen}, ${codBlue})`;
}

function sorteaGreen(){
    codGreen = parseInt((Math.random())*numeroMaximo);
    exibeNaTela('#green',codGreen);
    document.querySelector('.cor').style.background = `rgb(${codRed}, ${codGreen}, ${codBlue})`;
}

function sorteaBlue(){
    codBlue = parseInt((Math.random())*numeroMaximo);
    exibeNaTela('#blue',codBlue);
    document.querySelector('.cor').style.background = `rgb(${codRed}, ${codGreen}, ${codBlue})`;
}

function sorteaTodos(){
    let codRed = parseInt((Math.random())*numeroMaximo);
    let codGreen = parseInt((Math.random())*numeroMaximo);
    let codBlue = parseInt((Math.random())*numeroMaximo);
    exibeNaTela('#red',codRed);
    exibeNaTela('#green',codGreen);
    exibeNaTela('#blue',codBlue);
    document.querySelector('.cor').style.background = `rgb(${codRed}, ${codGreen}, ${codBlue})`;
}

function salva(){
    let red = document.querySelector("#red").textContent;
    let green = document.querySelector("#green").textContent;
    let blue = document.querySelector("#blue").textContent;
    document.querySelector('#cod-salvo').innerHTML =`${red}, ${green}, ${blue}`;
}

function limpa(){
    document.querySelector('#cod-salvo').innerHTML = `---, ---, ---`;
}

function reinicia(){
    limpa();
    exibeNaTela('#red', '---');
    exibeNaTela('#green', '---');
    exibeNaTela('#blue', '---');
    document.querySelector('.cor').style.background = 'rgb(0, 0, 0)';
}



/*
FUNCOES PARA INCREMENTAR

function verificaConteudo(classe){
    document.querySelector(classe).textContent;
}

let mudaCor = document.querySelector('.cor').style.background = `rgb(${codRed}, ${codGreen}, ${codBlue})`;

function sorteaCor(codigo){
    let codigo = parseInt((Math.random())*numeroMaximo);;
}
*/
