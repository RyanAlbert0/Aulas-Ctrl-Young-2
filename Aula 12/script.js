// Lista of Perguntes

const QUESTOES_QUIZ = [
{
    questao: "Qual é o símbolo do Dia das Mães?",
    a: 'Flor',
    b: 'Coração',
    c: 'Presente',
    d: 'Robson',
    correta: 'Flor',
},
{
    questao: "Qual a data do Dia das Mães?",
    a: 'Segundo Domingo de Maio',
    b: 'Domingo de Maio',
    c: 'Primeiro de Maio',
    d: 'Onze de Setembro',
    correta: 'Segundo Domingo de Maio',
},
{
    questao: "Em qual país foi comemorado pela primeira vez o Dia das Mães",
    a: 'Brasil',
    b: 'Estados Unidos',
    c: 'França',
    d: 'Estônia',
    correta: 'Estados Unidos',
},

]

// Identificar Elementos
const QUIZ_TITULO = document.getElementById('questao')
const ALTERNATIVA_A = document.getElementById('text_a')
const ALTERNATIVA_B = document.getElementById('text_b')
const ALTERNATIVA_C = document.getElementById('text_c')
const ALTERNATIVA_D = document.getElementById('text_d')
const BOTAO = document.getElementById('enviar')
const QUIZ_CONTEINER = document.getElementById('quiz')
const RESPOSTAS = document.querySelectorAll('.resposta')

// Variáveis

let questao_atual = 0
let corretas = 0

carregar_quiz()

function carregar_quiz()
{
    console.log(QUIZ_TITULO)
    const INFO_QUESTAO = QUESTOES_QUIZ[questao_atual]
    QUIZ_TITULO.innerText = INFO_QUESTAO.questao
    ALTERNATIVA_A.innerText = INFO_QUESTAO.a
    ALTERNATIVA_B.innerText = INFO_QUESTAO.b
    ALTERNATIVA_C.innerText = INFO_QUESTAO.c
    ALTERNATIVA_D.innerText = INFO_QUESTAO.d
}

function pegar_resposta()
{
    let resposta = undefined

    RESPOSTAS.forEach((resp_elemento) => {
        if (resp_elemento.checked){

            resposta = resp_elemento.id
        }
    })
    return resposta
}

function clicado(){

    const RESPOSTA_JOGADOR = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length
    console.log(TOTAL_PERGUNTAS)

    if (RESPOSTA_JOGADOR)
    {
        if (RESPOSTA_JOGADOR === QUESTOES_QUIZ[questao_atual].correta)
        {
            corretas++
        }
        questao_atual++
        if (questao_atual < TOTAL_PERGUNTAS)
        {
            carregar_quiz()
        }
        
    }
}

BOTAO.addEventListener('click', clicado)