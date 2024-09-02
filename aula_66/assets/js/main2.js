function relogio(){
    function contagemSegundoDasHoras(segundos) {
        const contagem = new Date (segundos * 1000 );
        return contagem.toLocaleTimeString('pt-br',{
            hour12: false,
            timeZone: 'UTC'
        })
    }
    console.log(contagemSegundoDasHoras(25))
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.reset');
    let segundos=0;
    let time;
    
    
    function iniciaRelogio() {
        time = setInterval(function() {
            segundos++;
            relogio.innerHTML=contagemSegundoDasHoras(segundos);
        },1000)
    }
    
    document.addEventListener('click', function(e) {
        let el = e.target;
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
        clearInterval(time)
        iniciaRelogio()
        }
    
        if(el.classList.contains('pausado')) {
            relogio.classList.add('pausado');
            clearInterval(time)
        }
    
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(time)
            relogio.innerHTML='00:00:00';
            segundos = 0;
        }
     });
}
relogio()

