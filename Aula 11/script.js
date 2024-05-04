let bola = window.prompt('Insira uma data! Ex: 02 July 2023')
let dia = document.getElementById('dias-n')
let hor = document.getElementById('horas-n')
let min = document.getElementById('minutos-n')
let sec = document.getElementById('segundos-n')

function contagem(){
    const hoje = new Date()
    const niver_convert = new Date(bola)
    const tempo_sec = (niver_convert - hoje) / 1000
    const tempo_min = Math.floor(tempo_sec / 60) % 60
    const tempo_hr = Math.floor(tempo_sec / 3600) % 24
    const tempo_dia = Math.floor(tempo_sec / 3600 / 24)
    const vlsec = Math.floor(tempo_sec) % 60

    dia.innerText = format_dig (tempo_dia)
    hor.innerText = format_dig (tempo_hr)
    min.innerText = format_dig (tempo_min)
    sec.innerText = format_dig (vlsec)

}

setInterval(contagem, 1000)

function format_dig(tempo){

if (tempo < 10){
    return `0${tempo}`
}
else{

    return tempo
}

}


window.prompt = 