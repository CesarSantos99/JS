// [ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou


const numbers = (teste) => {
    for(i = 1; i < teste; i++) {
        console.log('Contando', i)
    }
}

numbers(7)