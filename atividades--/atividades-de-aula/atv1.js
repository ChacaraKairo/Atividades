const prompt = require("prompt-sync")();
//função require faz uma requisição de algo a ser digitado
const name = prompt("Qual seu nome? ");
//faz receber o que for digitado
console.log(`Olá, ${name}!`);
