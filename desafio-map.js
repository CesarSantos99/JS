

const list = [
    { nome: 'César', vip: true },
    { nome: 'Katia', vip: false },
    { nome: 'João', vip: true },
    { nome: 'Maria', vip: true },
    { nome: 'Mirella', vip: false },
    { nome: 'Anthony', vip: true },
    { nome: 'Cinthia', vip: false },
];

const newList = list.map((client) => {
    const newList = {
        nome: client.nome,
        vip: client.vip,
        sector: client.vip ? 'black' : 'Green'
    }
    return newList
})

console.log(newList);


const student = [
    { nome: 'César', teste: 7 },
    { nome: 'Katia', teste: 5 },
    { nome: 'João', teste: 8 },
    { nome: 'Maria', teste: 10 },
    { nome: 'Mirella', teste: 6 },
    { nome: 'Anthony', teste: 2 },
    { nome: 'Cinthia', teste: 9 },
]

const studentsApproved = student.map(students => {

    // let AppovedOrNot 

    // if (students.teste >= 7) {
    //     AppovedOrNot = 'Approved';
    // } else {
    //     AppovedOrNot = 'Not Approved';
    // }

    const student = {
        nome:students.nome,
        teste:students.teste,
        FinalResult:students.teste >= 7 ? 'Aprovado' : 'Reprovado'
    }
    return student
})

console.log(studentsApproved);
