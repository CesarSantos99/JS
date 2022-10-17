

const companies = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Inter', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const maisDezPocento = acrecentarValor => {
    acrecentarValor.marketValue = acrecentarValor.marketValue + acrecentarValor.marketValue / 10
    return acrecentarValor
}

const DepoisDeDoisMil = companie => {
    return companie.foundedOn < 2000
}

const valorTotalDeMercado = (acumulador, valorTotal) => {
    return acumulador + valorTotal.marketValue
}


const marketplace = companies.map(maisDezPocento).filter(DepoisDeDoisMil).reduce(valorTotalDeMercado,0)

console.log(marketplace);





// console.log(marketplace, DepoisDeDoisMil, valorTotalDeMercado);