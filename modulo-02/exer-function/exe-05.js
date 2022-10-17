// [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior


const numbers = (number1, number2) => {
    if (number1 > number2) 
        console.log(`${number1} e maior`); 
        else
       console.log(`${number2} e menor`); 
}

numbers(5, 8)