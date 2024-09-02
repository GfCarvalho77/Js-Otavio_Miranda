function fraseTotal(inicio) {
    
    function finalFrase (final) {
        return inicio + ' ' + final
    }
    return finalFrase
}

const primeiraExpressão = fraseTotal('Olá')
const complemento = primeiraExpressão('Mundo')
console.log(complemento) 
