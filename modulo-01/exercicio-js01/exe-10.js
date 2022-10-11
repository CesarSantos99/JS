//10 = [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const firstPerson = {
    name: "César",
    age: 23,
    sex: "masculine",
    profession: "Programador",
    cpf: 94645
}

const secondPerson = {
    name: "Cinthia",
    age: 22,
    sex: "female",
    profession: "Agente de Saude",
    cpf: 8451
}

const compare = firstPerson.name === secondPerson.name;

console.log(compare);