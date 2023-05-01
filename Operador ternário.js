/*
------ ====== Operador Ternário OU Operador de Condicional ====== ------

?  --->  ? - SE
:  --->  : - SE NÃO
*/

console.log("----------------------------------------Se----------------------------------------")

const rain = true

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)

console.log("---------------------------------------//-----------------------------------------")


console.log("--------------------------------------Se Não--------------------------------------")

const rainSeNão = false

const umbrelaSeNão = rainSeNão ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrelaSeNão)

console.log("---------------------------------------//-----------------------------------------")
console.log("---------------------------------------//-----------------------------------------")
console.log("-------------------------------------Exemplo--------------------------------------")
console.log("-------------------------------TRANSFERENCIA - SE---------------------------------")
const balance = true
const inNotBlocked = true
const accontExist = true

const transferOk = balance && inNotBlocked && accontExist ? 'TRANFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'
console.log(transferOk)

console.log("---------------------------------------//-----------------------------------------")
console.log("-------------------------------------Exemplo--------------------------------------")
console.log("----------------------------TRANSFERENCIA - SE-NAO--------------------------------")

const balanceNao = true
const inNotBlockedNao = true
const accontExistNao = true

const transferNao = balanceNao && inNotBlockedNao && accontExistNao ? 'TRANFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'
console.log(transferNao)