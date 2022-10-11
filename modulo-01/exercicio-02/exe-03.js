// 3 = [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.



const number = Math.floor(Math.random() * (10 - 1) + 1);
const numberWinner = Math.floor(Math.random() * (10 - 1) + 1);
//Math.random() * (max - min) + min;


if (number === numberWinner){
    console.log('Parabéns, você ganhou 1.000.000.000.');
}else{
    console.log('Tende na proxima.');
}

console.log(number);
console.log(numberWinner);