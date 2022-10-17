

const list = [1, 2, 3, 4]

const sum = list.reduce((acc, current) => {
    return acc + current 
}, 10)

console.log(sum);

const companies = [
    {name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn:1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn:1975},
    {name: 'Inter', marketValue: 117, CEO: 'Brian Krzanich', foundedOn:1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn:2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn:2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
]


const companie = companies.reduce ((acumulador, valorAtual) => {
    return acumulador + valorAtual.marketValue
}, 0)

console.log(companie);