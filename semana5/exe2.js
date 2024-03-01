const prompt = require('prompt-sync')();

const frutas = [];


for (let i = 0; i < 4; i++) {
    const fruta = prompt(`Digite a ${i + 1}ª fruta: `);
    frutas.push(fruta);
}

frutas.shift();

console.log(`As frutas inseridas são ${frutas}`);