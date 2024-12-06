const leia = require("readline-sync");
let contadorMenor21 = 0
let contadorMaior50 = 0
var idade = 0

while (idade >= 0) {
    idade = leia.questionInt("Digite a idade:")
    if (idade < 21) contadorMenor21++;
    if (idade > 50) contadorMaior50++;
}

console.log(`\n Total de pessoas menores de 21 anos: ${contadorMenor21}`)
console.log(`\n Total de pessoas maiores de 50 anos: ${contadorMaior50}`) 