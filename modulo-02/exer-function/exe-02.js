// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const tabuada = (numero) => {
    if(numero > 10 || numero < 1) {
        console.log('So aceitamos numeros de 1 a 10');
        return
    }
    for (let i = 1; i <= 10; i++){
        console.log(`${1} x ${numero} = ${i * numero}`);
    }   
}


tabuada(9)