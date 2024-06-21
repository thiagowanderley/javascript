class ValidaForm {
    constructor () {
        this.formulario = document.querySelector('#form');

        this.events() // Carrega automaticamente o metodo
    }

    events () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit (e) {
        e.preventDefault ();
        const camposValidos = this.camposValidos();
    }

    camposValidos () {
        let valid = true;

        for (let error of this.formulario.querySelectorAll('.error-text')) {
            error.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.input')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaError (campo, `O campo "${label}" não pode estar vazio`);
                valid = false
            }
        }
    }

    criaError (campo, msg) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = msg;
        newDiv.style.color = 'red';
        newDiv.style.fontSize = '0.8em'
        newDiv.classList.add('error-text');
        campo.insertAdjacentElement('afterend', newDiv);
    }

}

const validaForm = new ValidaForm ()
//console.log(validaForm.events())
