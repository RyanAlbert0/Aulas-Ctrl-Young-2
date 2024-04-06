const divs = document.getElementsByTagName('div')
const div = document.getElementById('area')
const div_class = document.getElementsByClassName('area')
let contador_click = 0

for (var i = 0; i < divs.length ; i++){
    div_class[i].style.backgroundColor= 'gray'
    divs[i].innerText = 'Robson'
}

div.style.backgroundColor = 'gray'

// EVENTINHOS

  div.addEventListener('click', clicar)
//  div.addEventListener('mouseenter', entrar)
//  div.addEventListener('mouseout', sair)
//  div.addEventListener('mouseup', clicado)
//  div.addEventListener('mousedown', desclicado)

 function clicar (){
    div.innerText = 'Saifora lek kk'
    div.style.backgroundColor = 'green'
    contador_click++
    if (contador_click == 5)
        div.remove

 }
 function entrar() {
    div.innerText = 'Mim estar limpado'
    div.style.backgroundColor = 'green'

 }
 
 function sair() {
    div.innerText = 'Estou cagueido'
    div.style.backgroundColor = 'gray'

 }
 
 function clicado() {
    div.style.backgroundColor = 'white'

 }

 
 function desclicado() {
    div.style.backgroundColor = 'gray'

 }