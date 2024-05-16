
function estilizar () {
    return {
        botao01: document.querySelector('.custom01'),
        botao02: document.querySelector('.custom02'),

        custom () {
            document.addEventListener('click', event => {
               const el = event.target;

               if (el.classList.contains('custom01')) {
                this.botao01.style.backgroundColor = 'red';
               }

               if (el.classList.contains('custom02')) {
                this.botao02.style.backgroundColor = 'green';
               }
            })
        },

        enviarComando() {
            this.custom();
        },

        customizar() {
            this.enviarComando();
        },
    };
}

const realizarFuncao = estilizar();
realizarFuncao.customizar();
console.log(typeof(realizarFuncao));