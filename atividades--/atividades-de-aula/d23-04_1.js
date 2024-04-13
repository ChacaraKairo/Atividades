const prompt = require("prompt-sync")();

function maior() {
  //printa a mensagem
  console.log("digite 3 números");
  //variavel principal
  let numero = [];
  //gravação de dados dentro da variavel
  for (i = 0; i <= 2; i++) {
    numero.push(prompt(`${i + 1}º`));
  }
  //imprime os dados
  console.log(numero);
  //imprime o maior
  numero.sort();
  console.log(`O maior número que foi digitado foi o ${numero[2]}`);
}
//maior();
//--------------------------//
console.log("Digite 3 numeros");
let a, b, c;
a = prompt(`1º: `);
b = prompt(`2º: `);
c = prompt(`3º: `);
function maior2(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(`o maior numero digitado é o ${c}`);
  }
}
maior2(a, b, c);
