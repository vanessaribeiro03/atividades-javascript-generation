const leia = require("readline-sync")

let numero1 = leia.questionInt('Digite o primeiro numero do intervalo: ')
let numero2 = leia.questionInt('Digite o segundo numero do intervalo: ')

if(numero1 > numero2){
    console.log('Intervalo inválido.');
    process.exit();
}

console.log(`\nNo intervalo entre ${numero1} e ${numero2}:\n`);

for (let i = numero1; i <= numero2; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} é múltiplo de 3 e 5`);
    }
}