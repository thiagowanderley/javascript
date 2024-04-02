//IMC = PESO / ALTURA
//

function seuImc () {

    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit', enviarDados)

    function enviarDados (event) {
        event.preventDefault();

        const dadosPeso = document.querySelector('#peso');
        const dadosAltura = document.querySelector('#altura');
        const resultado = document.querySelector('#resultado');

        const peso = Number(dadosPeso.value);
        const altura = Number(dadosAltura.value)/100;
        const imc = peso/altura**2;

        if (!peso || !altura) {
            resultado.innerHTML = 'Por favor, preencha os campos acima corretamente'
            
            resultado.style.background = '#ffff'
        } else if (imc < 18.5) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Abaixo do peso`

            resultado.style.background = '#b24747'
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Peso normal`

            resultado.style.background = '#189e4b'
        } else if (imc > 24.9 && imc < 30) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Acima do peso`

            resultado.style.background = '#c2c24d'
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Obesidade grau 1`

            resultado.style.background = '#b51f1f'
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Obesidade grau 2`

            resultado.style.background = '#b51f1f'
        } else if (imc >= 40) {
            resultado.innerHTML = `Seu imc é: ${imc.toFixed(1)} / Obesidade grau 3`

            resultado.style.background = '#b51f1f'
        }

        console.log(`Peso: ${peso} ; Altura: ${altura} ; IMC: ${imc.toFixed(2)}`)
    }

}

seuImc();

