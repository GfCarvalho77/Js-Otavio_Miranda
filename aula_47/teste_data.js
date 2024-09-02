
// const preFormatação = new Date(); 

// const data = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
// console.log(dataFormat)
const data = new Date();

// const data = new Date(dataFormat);



function getDiaSemanaTexto(diaSemana) {
    let diasSemana;
    diasSemana = ['domingo','segunda-feira','terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) { // 

    let meses;
    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes]; 
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const diaMes = data.getMonth();
    const nomeMes = getNomeMes(numeroMes)
    const dataHora = data.getHours();
    const dataMinutes = data.getMinutes();

    return(`${nomeDia}, ${diaMes} de ${nomeMes}. Horário: ${dataHora}:${dataMinutes}`)
}
const h1 = document.querySelector('.container h1')
h1.innerHTML= criaData(data)





