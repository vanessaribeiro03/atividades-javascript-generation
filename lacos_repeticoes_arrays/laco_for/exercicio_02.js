const leia = require("readline-sync")

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = leia.questionInt(`Digite o ${i} numero: `)
    if(numero % 2 === 0){
        numerosPares++;
    }else{
        numerosImpares++
    }
}

console.log(`Total de números pares: ${numerosPares}`);
console.log(`Total de números ímpares: ${numerosImpares}`);

