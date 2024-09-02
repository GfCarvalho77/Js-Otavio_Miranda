const souUmDado = function() {
    console.log('Sou um dado');
}

const teste2 = function() {
    console.log('teste2')
}

function executaFunção(funcao) {
    console.log("execute a função")
    funcao()
}

executaFunção(souUmDado)
executaFunção(teste2)