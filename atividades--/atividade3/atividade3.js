const readline = require("readline");

// Crie uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunte ao usuário para inserir um número
rl.question("Por favor, insira um número: ", (numero) => {
  // Trate o número inserido pelo usuário (aqui você pode realizar a validação necessária)
  console.log(`Você inseriu o número: ${numero}`);

  // Feche a interface de leitura
  rl.close();
});
