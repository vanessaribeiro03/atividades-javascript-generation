const leia = require("readline-sync");

console.log("\nTabela de Operações:");
console.log("--------------------------------------------------");
console.log("| Código | Operação          |");
console.log("--------------------------------------------------");
console.log("|   1    | Soma              |");
console.log("|   2    | Subtração         |");
console.log("|   3    | Multiplicação     |");
console.log("|   4    | Divisão           |");
console.log("--------------------------------------------------");

let numero1 = leia.questionFloat("\nDigite o primeiro numero: ");
let numero2 = leia.questionFloat("Digite o segundo numero: ");
let codigoOperacao = leia.questionInt("Digite o codigo da operação (1 a 4): ");

let resultado;

switch (codigoOperacao) {
  case 1:
    resultado = numero1 + numero2;
    console.log(`\n${numero1} + ${numero2} = ${resultado}`);
    break;
  case 2:
    resultado = numero1 - numero2;
    console.log(`\n${numero1} - ${numero2} = ${resultado}`);
    break;
  case 3:
    resultado = numero1 * numero2;
    console.log(`\n${numero1} * ${numero2} = ${resultado}`);
    break;
  case 4:
    if (numero2 === 0) {
      console.log("\nErro: Divisão por zero não é permitida!");
    } else {
      resultado = numero1 / numero2;
      console.log(`\n${numero1} / ${numero2} = ${resultado}`);
    }
    break;
  default:
    console.log("\nOperação Inválida!");
    break;
}
