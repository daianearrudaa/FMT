const prompt = require('prompt-sync')();

const numeros= [];


for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}

const numerosOrdenados = numeros.sort();

console.log("A ordem crescente dos numeros do array é:", numerosOrdenados);

