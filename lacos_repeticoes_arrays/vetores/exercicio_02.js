const leia = require("readline-sync");

let vetorNumeros = [];
let indicesImpares = [];
let indicesPares = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let numerosParaVetor = leia.questionInt('Digite um numero: ')
    vetorNumeros.push(numerosParaVetor)
    soma+=numerosParaVetor
}

for (let i = 0; i < vetorNumeros.length; i++) {
    if(i % 2 != 0){
        indicesImpares.push(vetorNumeros[i])
    }

}

for (let i = 0; i < vetorNumeros.length; i++) {
    if(vetorNumeros[i] % 2 === 0){
        indicesPares.push(vetorNumeros[i])
    }
}


console.log('Elementos nos indices ímpares: ', indicesImpares.join(" "));
console.log('Elementos nos indices pares: ', indicesPares. join(" "));
console.log('Soma: ', soma);
console.log('Média: ', soma/vetorNumeros.length);



