// Uau primeiro código em JavaScript muito 

/*
Comentários
com múltiplas
linhas
*/

/*
* NUMBER => int/float/NaN
* STRING => texto
* BOOLEAN => Verdadeiro ou False
* NULL => Vazio
* UNDEFINDE => Indefinido
*/

// CONVERTER TIPOS

/*
* var = 4
* de num para string
* var.toString()
*
* de string para num
* parseInt(var) / parseFloat(var)
*/

// OPERADORES ARITMÉTICOS

/*
* + = Soma
* - = Subtração
* * = Multiplicação
* / = Divisão
* % = Resto de Divisão
* ** = Potência
*/

// Operadores Relacional

/*
* < = Menor que
* > = Maior que
* == = Igual a (2 iguais)
* === = Igual a tipos de dados (3 iguais)
* != = Diferente
* >= = Maior ou Igual
* <= = Menor ou Igual
*/

// Operadores Lógicos

/*
* ! = não - negação
* && = e - conjunção
* || = ou - disjunção
*/

// Variáveis

/*
* Var - Variável (Pode redefinir valor e tipo) - Escopo global
* Let - Variável (Não pode redefinir tipo) - Escopo local
* Const - Constante (Não modificável)
*/

// Outros tipos de dados

/*
* Array = Lista
* Object = Dicíonário
* JSON = JavaScrip Object Notation {chave: valor}
*/

// Funções = Ações

/**
 * Function <nome da função>(parametros)
 * {
 *    comandos
 * }
 * 
 */

// Condicionais

/**
 * If = (Condição A)
 * {
 *    Plano A
 * }
 * 
 * Else If (Condição B)
 * {
 *    Plano B
 * }
 * 
 * Else
 * 
 * {
 *     Plano Resto
 * }
 */

// Estrutura de Repetição

/**
 * For i in range(10)
 * 
 * for (let i = 1; i < 11; i++)
 * {
 *    o que tem que ser repetido
 * }
 * 
 */

/*
let x = 5
let y = 3

let soma = x + y
// window.alert(soma)
document.write(soma)
document.write(`<h1> ${soma} </h1>`)
console.log(soma)

let resposta = window.prompt('Digite um número')
console.log(resposta)
document.write(resposta)


let numero = window.prompt('Insira um número')

let valor = numero % 2

if (valor == 1)
{
    document.write('Valor ímpar')
    window.alert(`O número ${numero} é um valor impar`)
}
else
{
    document.write('Valor par')
     window.alert(`O número ${numero} é um valor par`)
}


let numero1 = parseInt(window.prompt('Insira um número'))
let numero2 = parseInt(window.prompt('Insira um número'))
let soma = numero1 + numero2
window.alert(`O resultado do número ${numero1} somado com o número ${numero2} resulta no valor ${soma}`)
*/

/*
let numero = parseInt(window.prompt('Insira seu número desejado'))
nu1 = numero * 1
nu2 = numero * 2
nu3 = numero * 3
nu4 = numero * 4
nu5 = numero * 5
nu6 = numero * 6
nu7 = numero * 7
nu8 = numero * 8
nu9 = numero * 9
nu10 = numero * 10

window.alert(`os valores são: ${nu1}, ${nu2}, ${nu3}, ${nu4}, ${nu5}, ${nu6}, ${nu7}, ${nu8}, ${nu9}, ${nu10}`)
*/

let numero = parseFloat(window.prompt('Insira seu número desejado'))


for (let i = 1; i < 10001; i++ )
{
    result = numero * i
    document.write(` Se fizermos ${i} vezes ${numero} dá ${result}.<br>`)    
}
