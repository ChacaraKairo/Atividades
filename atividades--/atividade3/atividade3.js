/*
const prompt = require("prompt-sync")();
const numero = prompt("Você quer saber a tabuada de qual número: ");
console.log(`A tabuada de ${numero} é:`);
for (i = 0; i < 11; i++) {
  console.log(`${numero}X${i}=${numero * i}`);
}
*/
import PromptSync from "prompt-sync";
const prompt = PromptSync();
const numero = prompt("Você quer saber a tabuada de qual número: ");
console.log(`A tabuada de ${numero} é:`);
for (i = 0; i < 11; i++) {
  console.log(`${numero}X${i}=${numero * i}`);
}
