//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let km = 10 // km percorrido
let kmRodado = 0.15 //  centavos por cada km
let tempoComVeiculo = 2 // tempo que ficou com o vaiculo (dias)
let diariaDoCarro = 60 //  reais
const total = km * kmRodado + tempoComVeiculo * diariaDoCarro
console.log(`A quantidade de km percorrido e de dias é de ${total}`)
