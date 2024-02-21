const prompt = require('prompt-sync')();


const numeros= [];

for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}

const quadrado = numeros.map(num =>{
    return num ** 2
});

console.log("O quadrado de cada numero é:", quadrado);