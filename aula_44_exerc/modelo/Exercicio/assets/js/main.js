// captura o formulário
const form = document.querySelector('#form');
// captura o evento de submit e cria uma função prevent default
// função para disparar um evento quando clicado no submit
form.addEventListener('submit', function (e){
    //previne zerar página ao dar submit
    e.preventDefault();
    //e.target refere-se à form
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Valor inválido',false); // segundo argumento para indicar 
        //uma cor diferente (vermelho/erro)
        return;
    }

    if (!altura) {
        setResultado('Valor inválido',false)
        return;
    }
    const imc = getImc(peso,altura);
    const nivelImc = getNivel(imc)

    const msg = `Seu imc é ${imc} (${nivelImc})`;
    setResultado(msg,true)
    });
    
    function getImc(peso,altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2)
    }

    function getNivel(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso','Obesidade grau 1', 'Obesidade grau 2','Obesidade grau 3'];

        if(imc >= 39.9) {
            return nivel[5];
        }
        if (imc >=34.9) {
            return nivel[4];
        }
        if (imc >= 29.9) {
            return nivel[3]
        }
        if (imc >=24.9) {
            return nivel[2]
        }
        if (imc >=18.5) {
            return nivel[1]
        }
        if (imc < 18.5) {
            return nivel[0]
        }

    }
    
    function criaP(){
    //cria elemento p
    const p = document.createElement('p');
    return p;
    // cria e adiciona classe no parágrafo 
    // p.classList.add('paragrafo-resultado');
}

// função para criar uma campo e inserir dados
function setResultado(msg,isValid){
    //captura tag existente resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML='';

    const p = criaP();
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }
    p.innerHTML=msg;
    resultado.appendChild(p);
}