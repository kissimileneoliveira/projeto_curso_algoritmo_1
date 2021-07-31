/*
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 01 do aluno: ")
leia(nota1)
escreval("Digite a nota 02 do aluno:: ")
leia(nota2)
escreval("Digite a nota 03 do aluno:: ")
leia(nota3)
media = (nota1 + nota2 + nota3) / 3

se media >= 7 entao
escreval("Aprovado!", nome)
senao
escreval("Recuperação!", nome)
fimse

escreval("Digite a nota recuperação do aluno:: ")
leia(notaR)

se notaR >= 6 entao
escreval("Aprovado!", nome)
senao
escreval("Reprovado!" , nome)
fimse
*/

var nome, nota1, nota2, nota3, notaR;
nome = prompt("digite o nome do aluno:")
nota1 = prompt("Digite a nota 1 do aluno:")
nota2 = prompt("Digite a nota 2 do aluno:")
nota3 = prompt("Digite a nota 3 do aluno:")

media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

if(media >= 70){
    alert("Aprovado!" + nome)
}
else
    alert("Recuperação!" + nome)

notaR = prompt("Digite a notaR do aluno:")

if(media >= 50){
    alert("Aprovado!" + nome)
}
else
    alert("Reprovado!" + nome)