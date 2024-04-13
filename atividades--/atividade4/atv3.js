function converterParaBinario(num) {
  // Não remova essa linha.
  // ### Escreva Seu código aqui :) ###
  let binario = [];
  for (let i = 0; num > 0; i++) {
    binario.unshift(num % 2);
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = (num - 1) / 2;
    }
  }
  for (let key of binario) {
    num = `${num}${key}`;
  }
  return String(Number(num));
  // ### FIM do código ###
} // Não remova essa linha.

function callBackDesconto(preco, desconto) {
  // Não remova essa linha.
  // ### Escreva Seu código aqui :) ###
  return preco * (1 - desconto);
  // ### FIM do código ###
} // Não remova essa linha.

function calcularPrecoComDesconto(preco, desconto, callBackDesconto) {
  // Não remova essa linha.
  // ### Escreva Seu código aqui :) ###
  return callBackDesconto(preco, desconto);
  // ### FIM do código ###
} // Não remova essa linha.

module.exports = {
  converterParaBinario,
  calcularPrecoComDesconto,
}; // Não remova essa linha.
