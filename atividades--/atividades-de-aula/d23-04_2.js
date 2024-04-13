const prompt = require("prompt-sync")();
console.log("Digite o numero ao qual você deseja ver a tabuada");
let num = prompt(`:`);
console.log("Até qual numero ele será multiplicado?");
let a = prompt(":");
for (i = 0; i <= a; i++) {
  console.log(`${num}x${i}=${num * i}`);
}
//
function tabuada(x, y) {
  for (i = 0; i <= y; i++) {
    console.log(`${x}x${i}=${num * i}`);
  }
}
tabuada(num, a);
