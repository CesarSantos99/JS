

const students = [
    {nome: 'César', age:25},
    {nome: 'Katia', age:50},
    {nome: 'João', age:19},
    {nome: 'Maria', age:52},
    {nome: 'Mirella', age:4},
    {nome: 'Anthony', age:2},
    {nome: 'Cinthia', age:22},
];


// console.log(students, index);//students mostra os estudantes e index mostra a quantidade array mostra completo
let allStudentsAge=0

students.forEach((students, index, array) => {
    allStudentsAge += students.age //allStudentsAge e igual ela mesmo mais students.age calcular a idade
})

const averageAge = allStudentsAge / students.length // Aqui nos ta vendo a media dos alunos

console.log(`A media dos alunos é de ${averageAge.toFixed(0)}`); //toFixed tira o tanto de casas decimais