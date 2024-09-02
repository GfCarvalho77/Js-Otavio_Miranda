const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Carvalho',
    idade: 47
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// stringText.forEach(function(elemento, indice, valor) {
//     console.log(elemento,indice,valor)
// })

// // for (let valor of stringText) {
//     console.log(valor)
// }

// for (let i in stringText) {
//     console.log(stringText[i])
// }


// for (let valor of stringText) {
//     console.log(valor)
// }