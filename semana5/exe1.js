const prompt = require('prompt-sync')();

const frutas = [];


for (let i = 0; i < 3; i++) {
    const fruta = prompt(`Digite a ${i + 1}ª fruta: `);
    frutas.push(fruta);
}

console.log(`A segunda fruta é: ${frutas[1]}`);