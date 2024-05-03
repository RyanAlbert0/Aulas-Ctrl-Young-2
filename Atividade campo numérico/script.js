let numero = window.prompt('Qual o número que você deseja?')
let texto = document.getElementById('textinho')
let rec = document.getElementById('rec')
let red = document.getElementById('red')
let ava = document.getElementById('ava')
numBack = numero


texto.innerText = `Número Inserido: ${numero}`
rec.addEventListener('click', clickRec)
red.addEventListener('click', clickRed)
ava.addEventListener('click', clickAva)

function clickAva(){
    numero++
    texto.textContent = `Número Inserido: ${numero}`
}

function clickRed(){

    numero = numBack
    texto.textContent = `Número Inserido: ${numero}`
    
}

function clickRec(){
    numero--
    texto.textContent = `Número Inserido: ${numero}`


}



