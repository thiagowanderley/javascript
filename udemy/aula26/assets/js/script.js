//IMC = PESO / ALTURA

function seuImc () {

    const formulario = document.querySelector('#formulario')
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura')
    const resultado = document.querySelector('#resultado')
    const enviar = document.querySelector('#enviar')
    const imc = peso.value / altura.value

    function enviarDados (evento) {
        evento.preventDefault();

        console.log(peso.value, altura.value, imc)
    }

    enviar.addEventListener('click', enviarDados)
}

seuImc ();