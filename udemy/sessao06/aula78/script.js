// POLIMORFISMO

// Superclasse 
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        return console.log('Saldo insuficiente')
    } else { 
        this.saldo -= valor;
        return console.log(this.verSaldo());
    }  
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    return console.log(this.verSaldo());
};
Conta.prototype.verSaldo = function () {
    return `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo}`
};

const conta1 = new Conta(11, 44067, 10);

//##############################################################

function contaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo); // Chamando os mesmos parametros da função Conta
    this.limite = limite 
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        return console.log('Saldo insuficiente')
    } else { 
        this.saldo -= valor;
        return console.log(this.verSaldo());
    }  
}

function CP (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo); // Chamando os mesmos parametros da função Conta
    this.limite = limite 
}

CP.prototype = Object.create(Conta.prototype);
CP.constructor = CP;

const cc = new contaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);