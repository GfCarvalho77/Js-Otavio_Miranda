const carro = {
    nome: 'Chevette',
    ano: 1986,
    fabricante: 'Chevrolet',
    motor: 1.6
}

for (let chave in carro ) {
    console.log(chave, carro[chave])
}