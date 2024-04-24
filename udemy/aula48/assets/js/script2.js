function meuEscopo () {

const formulario = document.getElementById('formulario');
const inputTarefas = document.getElementById('input-nova-tarefa');
const ulTarefas = document.getElementById('tarefas');
let meuArray = [];

formulario.addEventListener('submit', function enviarForm (e) {
    e.preventDefault();
    expressarNaTela();
    reniciarInput();
})

function criarArray () {
    meuArray.push(inputTarefas.value)
    console.log(meuArray)
}


function expressarNaTela () {
    if (!inputTarefas.value) return //não cria lista caso o input esteja vazio
    const li = document.createElement('li');
    li.setAttribute('class', 'elemento-lista');
    li.innerText = inputTarefas.value;
    ulTarefas.appendChild(li);
    criarBotaoApagar(li);
    criarArray();
 }   

function reniciarInput () {
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criarBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.textContent = 'Apagar';
    li.appendChild(botaoApagar);

    botaoApagar.addEventListener('click', function() {
        botaoApagar.parentElement.remove();
    // Função oculta criada para quando o botão "apagar" for clicado, apagar o seu elemento pai
    })
}

}

meuEscopo();

