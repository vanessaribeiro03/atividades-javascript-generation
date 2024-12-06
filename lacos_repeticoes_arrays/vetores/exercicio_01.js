const leia = require("readline-sync");

let vetor1 = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

if (vetor1.includes(numero)) {
    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] === numero) {
            console.log(`O número ${numero} está localizado na posição: ${i}`);
            break; 
        }
    }
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
