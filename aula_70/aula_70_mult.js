function funcaoMultiplic(multiplicador) {
    function calculoArgumento(n) {
        return n * multiplicador
    }
    return calculoArgumento
}

const duplica = funcaoMultiplic(2);
const triplica = funcaoMultiplic(3);
const quadriplica = funcaoMultiplic(4);

console.log(duplica(7))
console.log(triplica(7))
console.log(quadriplica(7))