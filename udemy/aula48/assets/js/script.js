const tarefas = document.getElementById('input-nova-tarefa');
const btnEnviar = document.getElementById('btn-add-tarefa');
const listaTarefas = document.getElementById('tarefas');

btnEnviar.addEventListener('click', enviarDados);
tarefas.addEventListener('keypress', pressEnter);


function pressEnter (e) {
    if (e.charCode === 13) {
        if (!tarefas.value) return;
        criarTarefa(tarefas.value);
    }
}

function limparInput () {
    tarefas.value = ''
    tarefas.focus()
}

function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}


function criarLi () {
    const li = document.createElement('li');
    return li;
}

function criarTarefa(texto) {
    const li = criarLi();
    li.innerHTML = texto;
    listaTarefas.appendChild(li);
    limparInput();
    criaBotaoApagar(li)
    salvarTarefa();
}

function enviarDados() {
    if (!tarefas.value) return;
    criarTarefa(tarefas.value)
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
    salvarTarefa()
})

function salvarTarefa() {
    const liTarefas = listaTarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '')
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas()