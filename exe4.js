const prompt = require('prompt-sync')();
const numeros=[];

for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}


const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("A soma de todos os elementos do array é:", soma);