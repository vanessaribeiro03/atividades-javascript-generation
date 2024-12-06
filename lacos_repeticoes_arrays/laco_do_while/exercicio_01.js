const leia = require('readline-sync');

let somaPositivos = 0; 
let numero;

do {
    numero = leia.questionInt('Digite um numero: ');
    
    if (numero > 0) { 
        somaPositivos += numero; 
    }
} while (numero !== 0); 

console.log(`\nA soma dos números positivos é: ${somaPositivos}`);