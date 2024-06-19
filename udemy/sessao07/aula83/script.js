// MÉTODOS DE INSTÂNCIA E ESTÁTICOS

class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume () {
        this.volume += 2;
    }

    diminirVolume () {
        this.volume -= 2;
    }

    static soma = (x, y) => x + y
}

/*
    => Quando é criado um método com static na chamada, esse metodo faz referencia ao objeto pai, nesse caso (ControleRemoto). Ele não vai funcionar para objetos criados com " New ". É utilizado mais como uma forma de organização do codigo
*/

const controle1 = new ControleRemoto (`lg`);

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminirVolume()

console.log(controle1)
console.log(ControleRemoto.soma(2, 5))