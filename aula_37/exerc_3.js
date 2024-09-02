const actualDate = new Date();

function formataData(actualDate) {
    const dia = (actualDate.getDate());
    const mes = (actualDate.getMonth());
    const ano = (actualDate.getFullYear());
    const hora = (actualDate.getHours());
    const minuto = (actualDate.getMinutes());
    

    return [dia, mes, ano, hora, minuto]    
}

const data = formataData(actualDate);
console.log(data);