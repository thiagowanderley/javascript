function Calculadora () {

    this.display = document.getElementById('display');
    
    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) {this.addNumDisplay(el)};
            if (el.classList.contains('btn-clear')) {this.clearDisplay()};
            if (el.classList.contains('btn-del')) {this.deletOne()};
            if (el.classList.contains('btn-eq')) {this.realizaConta()};
        });
    };

    this.addNumDisplay = (valor) => {
        this.display.value += valor.innerText;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deletOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        const conta = this.display.value;
        const validarEntrada = /^[\d()+\-*\/]+$/.test(this.display)? true : false; //VERIFICA STRING | REG EX

        if (!conta || validarEntrada) {
            alert('formato invalido')
            this.display.value = '';
        } else {
            this.display.value = eval(conta);
        }
    };


    //=========================================================================
    this.inicia = () => { // PARAMETRO QUE VAI SER CHAMADO PARA INICIAR A FUNÇÃO
        this.capturaClique();
    }

    
}

const calculadora = new Calculadora()
calculadora.inicia();


