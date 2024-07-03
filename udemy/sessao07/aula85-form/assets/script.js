class ValidaForm {
    constructor () {
        this.formulario = document.querySelector('#form')
        this.eventos();
    }

    eventos () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        const camposValidos = this.checaCampos();
    }

    checaCampos () {
        let valid = true;

        for (let campos of this.formulario.querySelectorAll('.input')) {
            if (typeof campos.value === 'undefined') {
                this.criaError()
            } 
        }
    }

    criaError (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.setAttribute('class', 'msg-error ')
    }
}

const valida = new ValidaForm()