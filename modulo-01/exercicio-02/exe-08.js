// 8 = [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.


const numberOne = 55;
const numberTwo = 29;
const numberThree = 41;
const nuberFour = 69;

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && nuberFour % 2 === 0) {
    console.log('Todos são pares.');
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && nuberFour % 2 !== 0) {
    console.log('Todos são ímpares.');
} else {
    console.log('Estão todos misturados, pares e ímpares.');
}