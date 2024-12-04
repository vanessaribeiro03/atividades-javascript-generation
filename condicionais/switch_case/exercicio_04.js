const leia = require("readline-sync");

let saldo = 1000.00;

console.log("\nTabela de Operações Bancárias:");
console.log("--------------------------------------------------");
console.log("| Código | Operação           |");
console.log("--------------------------------------------------");
console.log("|   1    | Saldo              |");
console.log("|   2    | Saque              |");
console.log("|   3    | Depósito           |");
console.log("--------------------------------------------------");

let operacao = leia.questionInt("\nDigite o código da operação (1 a 3): ");

switch (operacao) {
  case 1:
    console.log("\nOperação - Saldo");
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
    break;
  case 2:
    let saque = leia.questionFloat("\nDigite o valor do saque: ");
    console.log("\nOperação - Saque");

    if (saque > saldo) {
      console.log("Saldo Insuficiente!");
    } else {
      saldo -= saque; 
      console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
    }
    break;
  case 3:
    let deposito = leia.questionFloat("\nDigite o valor do depósito: ");
    console.log("\nOperação - Depósito");
    saldo += deposito;
    console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
    break;
  default:
    console.log("\nOperação Inválida!");
    break;
}
