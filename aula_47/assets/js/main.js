const data= new Date('2019-10-07T22:52:00.000')
let ano = data.getFullYear();
let diaDaSemana = data.getDay();
let dataDia = data.getDate();
let mesDataTexto;
let mesData = data.getMonth();
let horaData = data.getHours();
let minutosData = data.getMinutes();


switch (mesData) {
    case 0 :
        mesDataTexto = 'Janeiro';
        break;
    case 1 :
        mesDataTexto = 'Fevereiro';
        break;
    case 2 :
        mesDataTexto = 'março';
        break;
    case 3 :
        mesDataTexto = 'Abril';
        break;
    case 4 :
        mesDataTexto = 'Maio';
        break;
    case 5 :
        mesDataTexto = 'Junho';
        break;
    case 6 :
        mesDataTexto = 'Julho';
        break;
    case 7 :
        mesDataTexto = 'Agosto';
        break;
    case 8 :
        mesDataTexto = 'Setembro';
        break;
    case 9 :
        mesDataTexto = 'Outubro';
        break;
    case 10 :
        mesDataTexto = 'Novembro';
        break
    case 11 :
        mesDataTexto = 'Dezembro';
}

let dataTexto = '';
switch (diaDaSemana) {
    case 0 :
        dataTexto = 'Domingo';
        break
    case 1 :
        dataTexto = 'Segunda-feira';
        break
    case 2 :
        dataTexto = 'Terça-feira';
        break
    case 3 :
        dataTexto = 'Quarta-feira';
        break 
    case 4 :
        dataTexto = 'Quinta-feira';
        break 
    case 5 :
        dataTexto = 'Sexta-feira';
        break 
    case 6 :
        dataTexto = 'Sábado';
        break       
}

// console.log(dataTexto);
// console.log(dataDia);
// console.log(mesDataTexto);
// console.log(ano);
// console.log(data.getHours())
// console.log(data.getMinutes())
// horaData
// minutosData

const textoFinal = document.querySelector('p')
textoFinal.textContent = `${dataTexto}, ${dataDia} de ${mesDataTexto} de ${ano} às ${horaData}:${minutosData}`;