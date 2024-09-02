const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Carvalho',
    idade: 47
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


// const chave = 'nome';
// console.log(pessoa[chave])

// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa['idade'])

// for (let chave in pessoa) {
//     console.log(chave)
// }