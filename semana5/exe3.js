const prompt = require('prompt-sync')();
const numeros=[];

for (let i =0; i<5; i++){
    const numero= prompt(`Digite o numero ${i+1}: `);
    numeros.push(numero)
}


console.log(`Os numeros do array são: ${numeros}`)