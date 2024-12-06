const leia = require("readline-sync")

let idadesMenor21= 0, idadesMaior50 = 0;

while (true) {
    let idade = leia.questionInt('Digite uma idade: ')

    if (idade < 0) {
        break;
    } else if (idade < 21) {
        idadesMenor21++;
    } else if (idade > 50) {
        idadesMaior50++;
    }
    
}

console.log(`\nTotal de pessoas menores de 21 anos: ${idadesMenor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${idadesMaior50}`);