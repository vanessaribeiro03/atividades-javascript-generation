const leia = require("readline-sync")

let soma = 0;

for (let i = 1; i <= 4 ; i++) {
    let notas = leia.questionInt(`Digite a nota ${i}: `);
    soma+=notas
}

let media = soma/4

console.log(`A soma das notas: ${soma}`);
console.log(`A média das notas: ${media}`);
