// Para envio do formulário - capturar evento de submit;

const form = document.querySelector('#formulario') // capturar evento de submit

form.addEventListener('submit',function(e) {
    e.preventDefault();// cancela envio do formulário
    console.log('Evento previnido.');
    setResultado('Olá mundo!');
});

function setResultado(msg){ // exibe informações na div resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``; // insere os dados de msg ni id resultado
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = "Qualquer coisa";
    resultado.appendChild(p);
}

