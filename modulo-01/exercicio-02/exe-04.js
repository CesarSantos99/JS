// 4 = [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.


const numberOne = 40;
const numberTwo = 8;
const numberThree = 44;

if(numberOne > numberTwo && numberOne > numberThree){
    console.log('O primeiro é o maior.');
}else if(numberTwo > numberThree){
    console.log('O segundo é o maior');
}else{
    console.log('O terceiro é o maior');
}