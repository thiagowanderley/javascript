function Calculadora () {
const display = document.getElementById('display');

    this.limparDisplay = () => {
        this.display.innerText = '';
    }

    expressarDisplay = (valor) => {
        display.innerText += valor
    }

    this.clickBotoes = () => {

        document.addEventListener('click', (e) => {
            const ev = e.target;

            if(ev.classList.contains('btn-num')) {
                expressarDisplay(ev.innerText);
            }

            if(ev.classList.contains('btn-clear')) {
                limparDisplay()
            }
        })
    }
}

const calculadora = new Calculadora()

