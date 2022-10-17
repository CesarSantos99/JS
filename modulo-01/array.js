// ARRAY  - vetor

const number = [1, 2, 3, 4];


console.log(number[1]);

const pessoas = [
    {
        name: "César",
        age: 23,
        sex: "masculino",
        address: {
            street: "Santos"
        }
    },
    {
        name: "Cinthia",
        age: 22,
        sex: "feminino",
        address: {
            street: "Santos "
        }
    }
]

                 // Array mais avançado


pessoas.push({
    name: "Maria",
    age: 52,
    sex: "feminino",
    address: {              // push =essa função adiciona mais coisas
        street: "Rua 2 "
    }
}
)      

const person = ['César', 'Maria', 'João', 'Cinthia', 'Katia']
console.log(person);
console.log(person.length);    //length = quantos itens eu tenho dentro do meu array começando do 0
console.log(person.sort()); // sort = organiza por ordem alfabetica
delete person[0]; // delete = vai deletar uma posição do meu array


person.splice(1,2) // splice tira elementos do nosso array
person.splice(1,0,'César')// splice coloca elementos do nosso array
person.slice(1,2) // slice apaga conforme nos da a ordem
person.pop()// apaga o ultimo item do array
person.shift()// apaga o primeiro item do array
