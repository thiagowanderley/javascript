
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
        this.limpaError()
        const camposValidos = this.checaCampos();
    }

    checaCampos () {
        let valid = true;
        const usuario = this.formulario.querySelector('#usuario').value;

        for (let campos of this.formulario.querySelectorAll('.input')) {
            if (!campos.value) {
                this.criaError(campos, `O campo <strong>${campos.previousElementSibling.innerText}</strong> não pode está em branco`);
                valid = false;
            } 
        }

        if (this.usuario.lenght < 3 || this.usuario.lenght > 12) {
            this.criaError(usuario, `Usuario precisa ter entre 3 a 12 caracteres`)
        }
    }

    criaError (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.setAttribute('class', 'msg-error');
        campo.insertAdjacentElement('afterend', div);
        // div => elemento que vai ser inserido apos o campo
    }

    limpaError () {
        const error = document.querySelectorAll('.msg-error');
        error.forEach( error => error.remove())
    }
}

const valida = new ValidaForm()