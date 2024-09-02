function mostraHora() {
    const data= new Date();

    return data.toLocaleTimeString('pt-br',{
        hour12: false
    })
}
const timer= setInterval(function() {
    console.log(mostraHora())
},1000);

setTimeout(function() {
    clearInterval(timer)
},5000)

setTimeout( function(){
    console.log('Acabou...')
},6000) 
