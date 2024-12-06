const leia = require("readline-sync");

let devBack = 0,
    mulherCisTransDevFront = 0,
    homensCisTransDevMobMais40 = 0,
    naoBinarioDevFullMenor30 = 0,
    totalPessoas = 0,
    somaIdades = 0,
    continua = 'S';

while (continua === 'S') {
    let idade = leia.questionInt('Idade: ');

    while (idade < 0) {
        console.log('Informe uma idade valida.');
        idade = leia.questionInt('Idade: ');
    }

    console.log('\nIdentidade de Gênero:');
    console.log('1 - Mulher Cis');
    console.log('2 - Homem Cis');
    console.log('3 - Não Binário');
    console.log('4 - Mulher Trans');
    console.log('5 - Homem Trans');
    console.log('6 - Outros');

    let genero = leia.questionInt('Escolha um numero (1-6): ');
    while (genero < 1 || genero > 6) {
        console.log('Digite um número entre 1 e 6.');
        genero = leia.questionInt('Escolha um numero (1-6): ');
    }

    console.log('\nPessoa Desenvolvedora:');
    console.log('1 - Backend');
    console.log('2 - Frontend');
    console.log('3 - Mobile');
    console.log('4 - FullStack');

    let stack = leia.questionInt('Escolha um numero (1-4): ');
    while (stack < 1 || stack > 4) {
        console.log('Digite um número entre 1 e 4.');
        stack = leia.questionInt('Escolha um numero (1-4): ');
    }

    totalPessoas++;
    somaIdades += idade;

    if (stack === 1) {
        devBack++;
    }

    if (stack === 2 && (genero === 1 || genero === 4)) {
        mulherCisTransDevFront++;
    }

    if (stack === 3 && (genero === 2 || genero === 5) && idade > 40) {
        homensCisTransDevMobMais40++;
    }

    if (stack === 4 && genero === 3 && idade < 30) {
        naoBinarioDevFullMenor30++;
    }

    continua = leia.question('\nDeseja continuar a pesquisa (S/N)? ').toUpperCase();
    while (continua !== 'S' && continua !== 'N') {
        console.log('Digite "S" para continuar ou "N" para encerrar.');
        continua = leia.question('Deseja continuar a pesquisa (S/N)? ').toUpperCase();
    }
}

let mediaIdade = somaIdades / totalPessoas;

console.log('\nRESULTADOS DA PESQUISA:');
console.log(`1. Número de pessoas desenvolvedoras Backend: ${devBack}`);
console.log(`2. Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherCisTransDevFront}`);
console.log(`3. Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensCisTransDevMobMais40}`);
console.log(`4. Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinarioDevFullMenor30}`);
console.log(`5. Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`6. Média de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)}`);
