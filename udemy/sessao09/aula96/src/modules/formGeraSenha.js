import gerarSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qntd-char').value;
const checkMaiuscula = document.querySelector('.check-maiuscula');
const checkMinuscula = document.querySelector('.check-minuscula');
const checkSimbolos = document.querySelector('.check-simbolos');
const checkNumeros = document.querySelector('.check-numeros');
const btnGerarSenha = document.querySelector('gerar-senha');

export default () => {
    btnGerarSenha.addEventListener('click', function() {
        senhaGerada.innerHTML = gera();
    });
};

function gera () {
    const senha = gerarSenha(
        qtdCaracteres.value, 
        checkMaiuscula.Checked,
        checkMinuscula.checked,
        checkNumeros.checked, 
        checkSimbolos.checked
    );

    return senha;
}