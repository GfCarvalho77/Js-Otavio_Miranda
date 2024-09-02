const listaDeConvidados=[
    {tag: 'h2', texto: 'Lista Convite:'},
    {tag: 'div', texto: 'Beltrano x Cicrana'},
    {tag: 'section', texto: 'Fulano 2'},
    {tag: 'section', texto: 'Fulano 3'},
    {tag: 'p', texto: 'Fulano 4'},
]

/*1) "Criar variável para selecionar o '.container'";*/ 
const container = document.querySelector('.container')

/*2) "Criar variável para 'criar' nova div";*/
const div = document.createElement('div');

/*3) Criar o laço;*/
for(let i=0; i < listaDeConvidados.length;i++) {

/*4) Fazer a desestruturação para buscar objetos tag e texto;*/
    let {tag, texto} = listaDeConvidados[i];

/*5) Criar variável para 'inserir' tag.*/
    let criarTag = document.createElement(tag);

/*6) Criar variável para 'inserir' texto no html*/
    let creatText = document.createTextNode(texto);
    
/*7) inserir texto na tag (appenchild)*/
    criarTag.appendChild(creatText);
    
/*8) inserir tag na div (appenchild)*/
    div.appendChild(criarTag)
    // console.log(tag, texto);
}
container.appendChild(div)

/*8) inserir div no container*/