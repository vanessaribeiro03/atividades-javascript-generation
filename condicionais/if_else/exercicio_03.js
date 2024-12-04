const leia = require("readline-sync");

let nome = leia.question("Digite o Nome do doador: ");
let idade = leia.questionInt("Digite a Idade do doador: ");
let resposta = leia.question("Primeira doação de sangue? (true/false): ");

let primeiraDoacao;
if (resposta === "true") {
  primeiraDoacao = true;
} else {
  primeiraDoacao = false;
}

if (idade >= 18 && idade <= 69) {
  if (idade >= 60 && idade <= 69 && primeiraDoacao) {
    console.log(`${nome} não está apto para doar sangue!`);
  } else {
    console.log(`${nome} está apto para doar sangue!`);
  }
} else {
  console.log(`${nome} não está apto para doar sangue!`);
}
