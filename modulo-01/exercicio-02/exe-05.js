// 5 = [ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.


const person = {
    name:'César',
    age:25,
    gene: 'mascule',
    profession:'Programador',
    nationality:'Brasileiro'
}

if (person.age >= 18 && person.nationality === 'Brasileiro'){
    console.log('Você foi aprovado.');
}else{
    console.log('Você não foi aprovado.');
}

// Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


const jurors = Math.floor(Math.random() * (10 - 1) + 1);

console.log(jurors);


switch (jurors) {
    case 1:
        console.log('Muito mal');
    break;
    case 2:
        console.log('Pessimo');
    break;
    case 3:
        console.log('ruim');
    break;
    case 4:
        console.log('não');
    break;
    case 5:
        console.log('Pode melhorar');
    break;
    case 6:
        console.log('Legal');
    break;
    case 7:
        console.log('Nada mal');
    break;
    case 8:
        console.log('Parabéns');
    break;
    case 9:
        console.log('Muito bom');
    break;
    case 10:
        console.log('Ótimo');
    break;

    default:
    break;
}