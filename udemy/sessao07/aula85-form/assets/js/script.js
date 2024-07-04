
class ValidaForm {
    constructor () {
        this.formulario = document.querySelector('#form');
        
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

        if (this.checaCampos()) {
            alert('Formulario enviado')
        } else {
            alert('Não foi')
        }
    }

    checaCampos () {
        let valid = true;
        this.cpf = document.querySelector('.cpf');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.repSenha = document.querySelector('.rep-senha');

        for (let campos of this.formulario.querySelectorAll('.input')) {

            if (!campos.value) {
                this.criaError(campos, `O campo <strong>${campos.previousElementSibling.innerText}</strong> não pode está em branco`);
                
                valid = false;
            } 

        }

        if (this.validaUsuario(this.usuario) !== true) {
            this.criaError(this.usuario, 'Usuario precisa ter entre 3 a 12 caracteres');

            valid = false;
        }

        if (this.validaCPF(this.cpf) !== true) {
            this.criaError(this.cpf, 'Campo CPF Invalido');

            valid = false;
        } 

        if (this.validaSenha(this.senha) !== true) {
            this.criaError(this.senha, 'Usuario precisa ter entre 6 a 12 caracteres');

            valid = false;
        }

        if (this.senha.value !== this.repSenha.value) {
            this.criaError(this.repSenha, 'As senhas precisam ser iguais');

            valid = false;
        }

        return valid
    }


    criaError (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.setAttribute('class', 'msg-error');
        campo.insertAdjacentElement('afterend', div);
        // div => elemento que vai ser inserido apos o campo
    }

    validaCPF (campo) {
        const inputCpf = new Cpf(campo.value);
        return inputCpf.validacao();
    }

    validaUsuario (campo) {
        const validacao = campo.value.length >= 3 || campo.value.length <= 12 ? true : false;
         return validacao
    }

    validaSenha (senha) {
        const validacao = senha.value.length >= 6 || senha.value.length <= 12 ? true : false;
         return validacao
    }

    limpaError () {
        const error = document.querySelectorAll('.msg-error');
        error.forEach( error => error.remove())
    }
}

const valida = new ValidaForm()