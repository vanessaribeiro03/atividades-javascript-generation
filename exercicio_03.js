const leia = require("readline-sync")

let salarioBruto = leia.questionInt('Digite seu salario: ');
let adicionalNoturno = leia.questionInt('Digite seu adicional noturno: ');
let horasExtras = leia.questionInt('Digite suas horas extras: ');
let desconto = leia.questionInt('Digite seu desconto: ');

let salarioLiquido = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto);

console.log(`\nSeu salário liquido é de ${salarioLiquido}`);
