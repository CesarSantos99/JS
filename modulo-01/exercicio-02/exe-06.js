// 6 = [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

const number = Math.floor(Math.random() * (10 - 1) + 1);
console.log(number);

if (number % 2 ===  0){
    console.log('Par');
}else{
    console.log('impar');
}