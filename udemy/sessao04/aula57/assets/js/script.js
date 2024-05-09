function criaCalculadora () {
    return {
        display: document.querySelector('input#display'),
        btnClear: document.querySelector('button#clear'),

        //Metodos
        inicia() {
            this.cliqueBotoes();
        },

        realizarConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deletOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deletOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizarConta();
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
