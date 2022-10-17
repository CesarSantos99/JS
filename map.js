

const students = [
    {nome: 'César', age:25},
    {nome: 'Katia', age:50},
    {nome: 'João', age:19},
    {nome: 'Maria', age:52},
    {nome: 'Mirella', age:47},
    {nome: 'Anthony', age:24},
    {nome: 'Cinthia', age:22},
];


 const newStudents = students.map( (student) => {
    const newStudent = {
        name: student.nome + ' dos Santos',
        age: student.age - 10
    }
    return newStudent
 })

 console.log(newStudents);


 const numbers = [1, 2 , 3, 4]

 const double = number => number * 2
 const sum = number => number + 10

 const newArray = numbers.map(double).map(sum)

 console.log(newArray);