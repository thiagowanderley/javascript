/*
    GETTER => é para acessar o valor.
    SETTER => é para definir ou mudar o valor.
*/

class Cofre {
    constructor () {
        this._moeda = 0
    }

    get verMoeda () {
        return this._moeda
    }

    set adcMoeda (val) {
        if (val <= 0) {
            return console.log('error')
        } else {
            this._moeda += val
        }
    } 
}

const cofre = new Cofre();
cofre.adcMoeda = 23
console.log(cofre.verMoeda)

