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

        for (let campo of this.formulario.querySelectorAll('.input')) {
            if (!campo.value) return
        }
    }

}

const validaForm = new ValidaForm ()
//console.log(validaForm.events())
