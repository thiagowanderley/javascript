export default class Cpf {
    constructor (cpf) {
        this.cpf = cpf;
    }

    condicional () {
        if (!this.cpf || typeof this.cpf !== 'number' || this.cpf.length !== 11) {
            throw new Error ('error')
        }
    }

    cpfReduzido () {
        const cpfReduzido = this.cpf.slice(0, -2);

        return cpfReduzido;
    }

    cpfArray () {
        const cpf = this.cpfReduzido();
        const cpfString = cpf.split('');
        const cpfArray = cpfString.map(Number);
        
        return cpfArray;
    }

    primeiroDigito () {
        const cpf = this.cpfArray();
        const result = [];

        for (let i = 0; i < cpf.length; i++) {
            result.push(cpf[i] * (10 - i))
        }

        const cpfReduce = result.reduce((acum, val) => acum + val, 0);
        const primeiroDigito = 11 - (cpfReduce % 11)

        return primeiroDigito > 9 ? 0 : primeiroDigito;
    }

    cpfIncompleto () {
        const primeiroDigito = this.primeiroDigito();
        const cpfReduzido = this.cpfReduzido();

        return cpfReduzido + primeiroDigito;
    }

    arrayIncompleto () {
        const cpf = this.cpfIncompleto();
        const array = cpf.split('');
        const number = array.map(Number);

        return number;
    }

    segundoDigito () {
        const cpf = this.arrayIncompleto();
        const result = [];

        for (let i = 0; i < cpf.length; i++) {
            result.push(cpf[i] * (11 - i))
        }

        const reduce = result.reduce( (acum, val) => acum + val, 0);
        const segundoNum = 11 - (reduce % 11);

        return segundoNum > 9 ? 0 : segundoNum;
    }

    validacao () {
        const cpfReduzido = this.cpfReduzido()
        const primeiroNum = this.primeiroDigito()
        const segundoNum = this.segundoDigito()

        return this.cpf === cpfReduzido + primeiroNum + segundoNum ? true : false;
        
    }
}

console.log('cheguei')