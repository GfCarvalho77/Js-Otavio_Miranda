const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')


function criaLi() {
    const li= document.createElement('li');
    return li;}

function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
}

btnTarefa.addEventListener('click',function() {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    inputTarefa.value = '';
});

const imageButton = document.querySelector('.btn-image');
const divImage = document.querySelector('.div-image')

function criaImg() {    
    const img = document.createElement('img');    
    return img
}

function insereImg() {
    const img = criaImg()
    const imagem = '/images.jpeg';
    img.src=imagem
    divImage.appendChild(img)
}

imageButton.addEventListener('click',()=> {
    insereImg()
})

