const numero= Number(prompt('Digite um número:'));

let numeroPrincipal=document.getElementById('numeroPrincipal');
numeroPrincipal.innerHTML=numero;

//let raiz = document.getElementById('raizQuadrada');
//raiz = Math.sqrt(numero);
raizQuadrada.innerHTML=`Sua raiz quadrada é ${numero **0.5}.`;


//let numintSN = document.getElementById('inteiroTrueFalse');
//numintSN=(Number.isInteger(numero));
inteiroTrueFalse.innerHTML= `${numero} é inteiro: ${Number.isInteger(numero)}.`;


//let numeroIsNan = document.getElementById('nanTrueFalse')
//numeroIsNan = (Number.isNaN(numero));
nanTrueFalse.innerHTML=`${numero} É NaN? ${Number.isNaN(numero)}`;

//let arredBx = document.getElementById('arredondaBaixo');
//arredBx = (Math.floor(numero));
arredondaBaixo.innerHTML=`${numero} arredondando para baixo ${Math.floor(numero)}`;

//let arredCm = document.getElementById('arredondaCima')
//arredCm=(Math.ceil(numero));
arredondaCima.innerHTML= `${numero} Arredondando para cima fica: ${Math.ceil(numero)}`;

//let numDecm = document.getElementById('numeroDecimal');
//numDecm = (numero.toFixed(2));
numeroDecimal.innerHTML=`Ajustando para decimais fica: ${(numero.toFixed(2))}`;

//Sugestão do instrutor:

//1_ Criar html com apenas uma div <div id="texto">

// texto.innerHtml ='';
//numeroPrincipal.innerHTML=numero;
 //texto.innerHtml += ` Sua raiz quadrada é ${numero **0.5}.`
 //texto.innerHtml +=`${numero} é inteiro: ${Number.isInteger(numero)}.`;

//texto.innerHtml +=`${numero} É NaN? ${Number.isNaN(numero)}`;
//texto.innerHtml += `${numero} Arredondando para cima fica: ${Math.ceil(numero)}`;
//texto.innerHtml += `Ajustando para decimais fica: ${(numero.toFixed(2))}`;