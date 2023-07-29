/*Rules*/
let btnRules = document.querySelector('#btn-rules')
let modal = document.querySelector(".container-modal")
btnRules.addEventListener('click', desplegarModal)
function desplegarModal(){
    if(modal.style.display == "none"){
        modal.style.display = "block"
    } else{
        modal.style.display = "none"
    }
}

let btnQuitarModal = document.querySelector('#quitar-modal')
btnQuitarModal.addEventListener('click', quitarModal)
function quitarModal(){
    modal.style.display = 'none'
}

/*Variables de elementos*/ 
let sectionElements = document.querySelector('.container-elements')
let sectionFight = document.querySelector('.container-ataques')

let inputPaper = document.querySelector('#input-paper')
let inputScissors = document.querySelector('#input-scissors')
let inputRock = document.querySelector('#input-rock')

let figurePaper = document.querySelector('.figure-paper')
let figureScissors = document.querySelector('.figure-scissors')
let figureRock = document.querySelector('.figure-rock')

let containerAtaqueJugador = document.querySelector('.elemento-jugador')
let containerAtaqueEnemigo = document.querySelector('.elemento-enemigo')

let btnSelecElemento = document.querySelector("#seleccionar-elemento")
btnSelecElemento.addEventListener('click', seleccionarElemento)

let btnPlayAgain = document.querySelector(".play-again")
btnPlayAgain.addEventListener('click', reiniciarJuego)

let ataqueJugador
let ataqueEnemigo

function elegirAleatorio(min, max) {
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function reiniciarJuego(){
    location.reload()
}

function seleccionarElemento(){
    if(inputPaper.checked){
        ataqueJugador = 1
        containerAtaqueJugador.appendChild(figurePaper.cloneNode(true))
    } else if(inputScissors.checked){
        ataqueJugador = 2
        containerAtaqueJugador.appendChild(figureScissors.cloneNode(true))
    } else if(inputRock.checked){
        ataqueJugador = 3
        containerAtaqueJugador.appendChild(figureRock.cloneNode(true))
    } else{
        alert('Debes elegir un elemento para jugar!')
        reiniciarJuego()
    }
    sectionElements.style.display = 'none'
    sectionFight.style.display = 'flex'
    seleccionarElementoEnemigo()
}

function seleccionarElementoEnemigo(){
    let elecEnemigo = elegirAleatorio(1, 3)
    if(elecEnemigo == 1){
        ataqueEnemigo = 1
        containerAtaqueEnemigo.appendChild(figurePaper.cloneNode(true))
    } else if(elecEnemigo == 2){
        ataqueEnemigo = 2
        containerAtaqueEnemigo.appendChild(figureScissors.cloneNode(true))
    } else if(elecEnemigo == 3){
        ataqueEnemigo = 3
        containerAtaqueEnemigo.appendChild(figureRock.cloneNode(true))
    }
    combate()
}

function combate(){
    let numberScore = document.querySelector('.number-score')
    let score = parseInt(numberScore.innerHTML)
    let fraseResultado = document.querySelector('.result')
    if(ataqueJugador == ataqueEnemigo){
        fraseResultado.innerHTML = "DRAW"
    } else if((ataqueJugador == 1 && ataqueEnemigo == 2) || (ataqueJugador == 3 && ataqueEnemigo == 1)){
        fraseResultado.innerHTML = "YOU LOSE"
        numberScore.innerHTML = score - 1
    } else{
        fraseResultado.innerHTML = "YOU WIN"
        numberScore.innerHTML = score + 1
    }
}