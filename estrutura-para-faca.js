/*
numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("digite o numero para calcular o fatorial.")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
     fatorial := fatorial * contador
   fimpara
   escreva("o fatorial de ", numero, " é: ", fatorial)
   */

   function acaoBotao() {
       var numero, fatorial 
       numero = prompt("Digite o numero para calcular o fatorial.")
       fatorial = 1
       for (contador = 1; contador <= numero; contador++) {
           fatorial = fatorial * contador    
       }
       document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
   }