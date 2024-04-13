const prompt = require("prompt-sync")();
function calcularPrecoComDescont(valor, desconto, callback) {
  let valorFinal = callback(valor, desconto);
  return valorFinal;
}
function calculadora(valor, desconto) {
  if (desconto >= 1) {
    // Desconto aplicado em valor decimal
    return valor * (1 - desconto / 100);
  } else {
    // Desconto aplicado em porcentagem
    return valor * (1 - desconto);
  }
}
console.log(
  calcularPrecoComDescont(500, 80, calculadora).toFixed(2)
); /*limita a duas casas decimais */
