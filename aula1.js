// const prompt = require("prompt-sync")();

// var nome = prompt("Digite seu nome: ")

// console.log('Seja bem vindo ' + nome)

// function adicao(num1, num2, funcao_anonima) {
//     let resultado = num1 + num2;
//     funcao_anonima(resultado);
// }

// // Exemplo de uso:
// adicao(3, 5, function(resultado) {
//     console.log("O resultado é:", resultado);
// });

// function adicao (num1,num2, funcaoAnonima){
//     let resultado = num1 +num2;
//     funcaoAnonima(resultado)
// }

// num1=2;
// num2=3;

// adicao(num1,num2, function(resultado) {
//     console.log("O resultado é:", resultado);
// });

// const calcularMedia = array => {
//     if (array.length === 0) {
//         return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
//     }
    
//     const soma = array.reduce((total, numero) => total + numero, 0);
//     return soma / array.length;
// };

// // Exemplo de uso:
// const numeros = [10, 20, 30, 40, 50];
// console.log(calcularMedia(numeros));

// const Calcular = array =>{
//     const soma = array.reduce((total , numero) => total + numero, 0);
//     return soma / array.length;
// };

// const numero= [10,20,30,40];
// console.log(Calcular(numero))

// const prompt = require('prompt-sync')();

// let contadorRuim = 0;
// let contadorUsuarios = 0;

// while (contadorUsuarios < 4) {
//     const avaliacao = prompt(`Qual é a sua avaliação para a série "Stranger Things" (ruim, bom, excelente)? `).toLowerCase();

//     if (avaliacao === 'ruim') {
//         contadorRuim++;
//     } else if (avaliacao !== 'bom' && avaliacao !== 'excelente') {
//         console.log('Opção inválida. Por favor, escolha entre ruim, bom ou excelente.');
//         continue; // Pula para a próxima iteração do loop
//     }

//     contadorUsuarios++;
// }

// console.log(`Número de pessoas que classificaram a série como ruim: ${contadorRuim}`);

// for (let i = 0; i <= 10; i++) {
//     const resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado}`);
// }

const prompt = require('prompt-sync')();

const frutas = [];


for (let i = 0; i < 4; i++) {
    const fruta = prompt(`Digite a ${i + 1}ª fruta: `);
    frutas.push(fruta);
}

frutas.shift();

console.log(`As frutas inseridas são ${frutas}`);


const prompt = require('prompt-sync')();
const numeros=[];

for (let i =0; i<5; i++){
    const numero= prompt(`Digite o numero ${i+1}: `);
    numeros.push(numero)
}


console.log(`Os numeros do array são: ${numeros}`)

const prompt = require('prompt-sync')();
const numeros=[];

for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}


const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("A soma de todos os elementos do array é:", soma);

const prompt = require('prompt-sync')();


const numeros= [];


for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}

const numerosOrdenados = numeros.sort();

console.log("A ordem crescente dos numeros do array é:", numerosOrdenados);

const prompt = require('prompt-sync')();


const numeros= [];

for (let i =0; i<5; i++){
    const numero = parseInt(prompt(`Digite o numero ${i + 1}: `));
    numeros.push(numero)
}

const pares = numeros.filter(num =>{
    if(num%2 ==0){
        return true
    }
});

console.log("Os numeros pares do array é:", pares);




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