// 2 = [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO


const person = {
    name:'César',
    age: 23,
    gene:'Mascule',
    nationality: 'Argentino'
}

if(person.nationality === 'Brasileiro'){
    console.log('Parabéns, você e braliseiro.')
}else {
    console.log('Sinto muito, mas você não e brasileiro.');
}