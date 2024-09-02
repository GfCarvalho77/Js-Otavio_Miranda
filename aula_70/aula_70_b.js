function dadosPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    }
}

const p1 = dadosPessoa ('Guilherme','Figueiro', 48)
const p2 = {
    nome: 'Guilherme',
    sobrenome: ' Figueiro',
    idade:'48'
}
console.log(p1)
console.log(p2)
