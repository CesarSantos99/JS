// function

function aprendendoFuncao(){
    console.log('Estou aprendendo Função.');
}

aprendendoFuncao()

// function sum(number1, number2){
//     const result = number1 + number2            /// ISSO E A MESMO COISA QUE A DE BAIXO 
//     return result
// }

const sum = (number1, number2) => number1 + number2      // issso e a mesma coisa que a de cima so que mais resulmido

const numberOne = 10;
const numberTwo = 20;

console.log(`O primeiro número e ${numberOne}`);
console.log(`O segundo número é ${numberTwo}`);

const result = sum(numberOne, numberTwo)
// console.log(`terceiro número é ${result}`); e a mesma coisa do que a de baixo
console.log(`terceiro número é ${sum(numberOne, numberTwo)}`);

