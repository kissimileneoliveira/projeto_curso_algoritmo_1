/*
nome : caractere
numero: real

escreval("digite o nome")
leia(nome)
escreval("digite um numero")
leia(numero)

escreval(nome, " : ", numero)
*/
var nome, numero
nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero
