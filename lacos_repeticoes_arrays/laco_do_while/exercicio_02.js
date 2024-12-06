const leia = require('readline-sync');

let somaMultiplos3 = 0; 
let numerosMultiplos3 = 0;
let numero;

do {
    numero = leia.questionInt('Digite um numero: ');
    
    if (numero !== 0 && numero % 3 === 0) { 
        somaMultiplos3 += numero; 
        numerosMultiplos3++;
    }
} while (numero !== 0); 

if (numerosMultiplos3 > 0) {
    const media = somaMultiplos3 / numerosMultiplos3;
    console.log(`\nA média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
    console.log('\nNenhum número múltiplo de 3 foi digitado.');
}
