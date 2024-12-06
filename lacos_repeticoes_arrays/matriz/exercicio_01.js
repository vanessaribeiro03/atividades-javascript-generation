let matriz = [];
let contador = 1;
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;
let elementosDiagonalPrincipal = [];
let elementosDiagonalSecundaria = [];

// criando a matriz 3x3 pra exemplo
for (let i = 0; i < 3; i++) {
    let linha = [];
    
    for (let j = 0; j < 3; j++) {
        linha.push(contador);
        contador++;
    }
    matriz.push(linha);
}

console.table(matriz);

// percorrendo a matriz, separando os elementos da diagonal principal, adicionando eles em um array e somando eles
for (let i = 0; i < matriz.length; i++) {
    elementosDiagonalPrincipal.push(matriz[i][i])
    somaDiagonalPrincipal+= matriz[i][i]
}

// percorrendo a matriz, separando os elementos da diagonal secundaria, adicionando eles em um array e somando eles
for (let i = 0; i < matriz.length; i++) {
    elementosDiagonalSecundaria.push(matriz[i][matriz.length - 1 - i]); // acessando os elementos da diagonal secundária (última coluna - índice da linha) 
    somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
    
}

console.log('Elemetos da diagonal principal: ', elementosDiagonalPrincipal.join(" ")); // transformando o array dos elementos em string usando join
console.log('Elemetos da diagonal secundaria: ', elementosDiagonalSecundaria.join(" "));
console.log('Soma dos Elemetos da diagonal principal: ', somaDiagonalPrincipal);
console.log('Soma dos Elemetos da diagonal secundaria: ', somaDiagonalSecundaria);


