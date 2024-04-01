//IMC = PESO / ALTURA

function seuImc () {

    const formulario = document.querySelector('form#formulario');
    const peso = document.querySelector('input#peso').value;
    const pesoV = Number(peso.valueOf(peso))
    const altura = document.querySelector('input#altura').value;
    const resultado = document.querySelector('div#resultado');
    const enviar = document.querySelector('button#enviar');
    const imc = peso / altura

    function enviarDados (evento) {
        evento.preventDefault();

        console.log(pesoV)
    }

    formulario.addEventListener('submit', enviarDados)

}

seuImc ();