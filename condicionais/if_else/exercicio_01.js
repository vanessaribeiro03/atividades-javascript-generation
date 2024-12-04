const leia = require("readline-sync")

let numeroA = leia.questionInt('Digite o numero A: ')
let numeroB = leia.questionInt('Digite o numero B: ')
let numeroC = leia.questionInt('Digite o numero C: ')

let soma = numeroA + numeroB;

if (soma > numeroC) {
    console.log('A soma de A + B é Maior que C');
} else if (soma < numeroC) {
    console.log('A soma de A + B é Menor que C');
} else {
    console.log('A soma de A + B é Igual a C');
}