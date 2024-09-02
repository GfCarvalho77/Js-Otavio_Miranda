const BancoDados = {
    nome: 'Guilherme',
    sobrenome: 'Carvalho',
    idade: 47,
    endereco: {
        rua: 'Praça Epaminondas Chaves',
        numero: 36
    },
    deslocamento: {
        origem: 'Porto Alegre',
        aeroportoOrigem: 'POA',
        destino: 'Vitória',
        aeroportoDestino: 'VIX'
    }
}

const {deslocamento: {origem: Departure, destino: Arrive, ...resto1},...resto2} = BancoDados;
console.log(Departure, Arrive, resto1, resto2)


// const {endereco:{ rua: r, numero: n}} = BancoDados;
// console.log(r, n)


// const {endereco} = BancoDados;
// console.log(endereco)



// const {sobrenome: cantinho } = BancoDados;

// console.log(cantinho)

// const {sobrenome} = BancoDados;
// console.log(sobrenome)

// // const { sobrenome: bancoSobrenome} = BancoDados 

// // console.log(bancoSobrenome)