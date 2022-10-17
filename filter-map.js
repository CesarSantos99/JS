

// filter FILTRA AS COISAS

const list = [
    { nome: 'César', vip: true },
    { nome: 'Katia', vip: false },
    { nome: 'João', vip: true },
    { nome: 'Maria', vip: true },
    { nome: 'Mirella', vip: false },
    { nome: 'Anthony', vip: true },
    { nome: 'Cinthia', vip: false },
];

const justVips = list.filter(client => {
    return client.vip
})

console.log(justVips);


const students = [
    { nome: 'César', teste: 7 },
    { nome: 'Katia', teste: 5 },
    { nome: 'João', teste: 8 },
    { nome: 'Maria', teste: 10 },
    { nome: 'Mirella', teste: 6 },
    { nome: 'Anthony', teste: 2 },
    { nome: 'Cinthia', teste: 9 },
]

const newList = students.filter (student => {
    return student.teste >= 7
})

console.log(newList);