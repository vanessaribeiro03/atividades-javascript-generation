const leia = require("readline-sync")

let novoSalario;

let salario = leia.questionInt("Digite o seu salario: ")
let abono = leia.questionInt("Digite o abono: ")


novoSalario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    }).format(salario + abono);

console.log("Novo salario: ", novoSalario);
