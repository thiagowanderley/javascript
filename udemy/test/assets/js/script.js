const valorInput = document.getElementById('texto');
const botaoEnviar = document.getElementById('btn');
const formulario = document.getElementById('formulario');
let meuArray = [];

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    meuArray.push(valorInput.value)
    console.log(meuArray)
})