let lista = [];
lista = [1, 2, 3, 4, 8, 6, 54, 54, 2, 5, 8, 65, 5, 55, 6, 58, 8, 5, 65];
let maior = lista[0];
let menor = lista[0];
console.log(lista);
for (i = 0; i < lista.length; i++) {
  if (lista[i] > maior) {
    maior = lista[i];
  }
  if (lista[i] < menor) {
    menor = lista[i];
  }
}
console.log(maior);
console.log(menor);
let novalista = lista.map((num) => num * 3);
//map repassa o array com as condições instauradas
console.log(`a lista multiplicada por 3 ${novalista}`);
novalista = lista.find((num) => num > 25);
//.find() repassa o primeiro numero que corresponde a consição
console.log(`${novalista}`);
novalista = lista.filter((num) => num > 25);
//.filter()usada para criar um novo array contendo todos os elementos de um array original que satisfaçam uma determinada condição
console.log(`${novalista}`);
novalista = lista.reduce((accumulator, current) => accumulator + current, 0);
//executa uma função de callback em cada elemento do array, resultando em um único valor de retorno. Ele percorre o array da esquerda para a direita, acumulando o resultado da função callback em um único valor
console.log(`${novalista}`);
novalista = lista.some((num) => num > 105);
//verificar se pelo menos um elemento de um array satisfaz uma determinada condição especificada por uma função de teste
console.log(`${novalista}`);
novalista = lista.includes(54);
//usada para verificar se um elemento específico está presente em um array, retornando true se o elemento for encontrado e false caso contrário
console.log(`${novalista}`);
/*SPREAD*/
//refere-se a uma sintaxe que permite espalhar os elementos de um objeto iterável (como um array ou uma string) ou as propriedades de um objeto por todo o lugar onde valores ou propriedades são esperados
let lista2 = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 0];
let lista3 = [...lista, ...lista2];
console.log(lista3);
/*REST*/
//sintaxe que permite coletar múltiplos argumentos de uma função em um único array. O operador é representado pelo uso de três pontos consecutivos (...) seguidos do nome de um parâmetro em uma função. Esse parâmetro é chamado de "parâmetro rest".
function somar(...valores) {
  let resultados = 0;
  for (const valor of valores) {
    resultados += valor;
  }
  return resultados;
}
const total = somar(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(total);
