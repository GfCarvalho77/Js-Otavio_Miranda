
/*1) Seleciona div paragrafos.*/
const listaParagrafos = document.querySelector('.paragrafos')

/*2) Seleciona os parágrafos dentro da div parágrafos.*/
const tagParagrafo = listaParagrafos.querySelectorAll('p')

/*3) Cria variavel recebendo as configurações de estilo de dentro do body que via getComputedStyle().*/

const dadosStyle = getComputedStyle(document.body);

/*4) cria variável recebendo as definições de cor fundo do body de dadosStyle*/

const colorBackground = dadosStyle.backgroundColor;

/*5) Cria laço iterando cada parágrafo para que troque de cor fundo e cor de texto.*/

for (let listaPar of tagParagrafo) {
/* 6) Faz alteração da cor de fundo do parágrafo recebendo valor da variável colorBackground*/
        listaPar.style.backgroundColor = colorBackground;
        listaPar.style.color = 'white';
}