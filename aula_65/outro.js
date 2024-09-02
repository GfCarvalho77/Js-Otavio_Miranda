function mostraHora() {
    const data= new Date();

    return data.toLocaleTimeString('pt-br',{
        hour12: false
    })
}

function funcaoDoInterval(){
console.log(mostrarHora())
}
setInterval(funcaoDoInterval,1000)

