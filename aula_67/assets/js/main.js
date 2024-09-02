const inputTarefa=document.querySelector('.input-tarefa');
const btnTarefa=document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')


function criaLi() {
    const li= document.createElement('li');
    return li;}

function limpaInput() {
    inputTarefa.value='';
    inputTarefa.focus();
}

function botaoApagar(li) {
    li.innerText +=' ';
    const botaoApagar = document.createElement('button');
        botaoApagar.innerText='Apagar';
        li.appendChild(botaoApagar);}


function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode ===13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        inputTarefa.value = '';
    }
})


btnTarefa.addEventListener('click',function() {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    inputTarefa.value = '';
    limpaInput()
});


