const prompt = require("prompt-sync")();
function converterParaBinario(num) {
  let binario = "";

  // Divide o número por 2 repetidamente até que o resultado seja 0
  while (num > 0) {
    // Obtém o resto da divisão por 2
    let resto = num % 2;

    // Adiciona o resto à esquerda da string binária
    binario = resto + binario;

    // Divide o número por 2 para a próxima iteração
    num = Math.floor(num / 2);
  }
  return binario;
}

function converte(num) {
  let binario = "";
  do {
    let resto = (num % 2).toString();
    binario = resto + binario;
    num = Math.floor(num / 2);
  } while (num > 0);

  return binario;
}

let num = prompt("Digite um número");
console.log(converterParaBinario(num));
console.log(converte(num));
