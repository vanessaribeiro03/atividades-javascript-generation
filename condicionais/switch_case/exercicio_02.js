const leia = require("readline-sync");

console.log("\nTabela de Cargos:");
console.log("--------------------------------------------------");
console.log("| Código | Cargo            | Percentual Reajuste |");
console.log("--------------------------------------------------");
console.log("|   1    | Gerente          | 10%                 |");
console.log("|   2    | Vendedor         | 7%                  |");
console.log("|   3    | Supervisor       | 9%                  |");
console.log("|   4    | Motorista        | 6%                  |");
console.log("|   5    | Estoquista       | 5%                  |");
console.log("|   6    | Técnico de TI    | 8%                  |");
console.log("--------------------------------------------------");

let nome = leia.question("\nDigite o nome do colaborador: ");
let codigoCargo = leia.questionInt("Digite o codigo do cargo (1 a 6): ");
let salarioAtual = leia.questionFloat("Digite o salario atual: R$ ");

let cargo;
let percentualReajuste;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08;
        break;
    default:
        console.log("\nCódigo do cargo inválido! Tente novamente com um número entre 1 e 6.");
        break;
}

let novoSalario = salarioAtual + (percentualReajuste * salarioAtual);
console.log(`\nNome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);

