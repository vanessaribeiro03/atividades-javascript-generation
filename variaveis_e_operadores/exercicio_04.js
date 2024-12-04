const leia = require("readline-sync")

let n1 = leia.questionInt("Digite o valor de n1: ");
let n2 = leia.questionInt("Digite o valor de n2: ");
let n3 = leia.questionInt("Digite o valor de n3: ");
let n4 = leia.questionInt("Digite o valor de n4: ");

let calculo = (n1 * n2) - (n3 * n4);

console.log(`\nDiferença: ${calculo}`);

