function criaCalculadora () {
    return {
        display: document.querySelector('input#display'),
        clear: document.querySelector('button#clear'),

        //Metodos
        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
