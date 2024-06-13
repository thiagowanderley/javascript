// EXERCITANDO

function Carro (marca, modelo, ano, tipo, potencia) {
    Veiculo.call (this, marca, ano)
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.quilometragem = 0;
    this.motor = new Motor (tipo, potencia)
}

function Motor (tipo, potencia) {
    this.tipo = tipo;
    this.potencia = potencia
}

function Veiculo (marca, ano) {
    this.marca = marca;
    this.ano = ano;
}

Carro.prototype.descrever = function () {
    return `O seu carro é: Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano} | Km: ${this.quilometragem} | Motor: ${this.motor.tipo} ${this.motor.potencia} CV`
}

Veiculo.prototype.descreverVeic = function () {
    return `Marca: ${this.marca} , Ano: ${this.ano}`
}
 
Carro.prototype.novaQuilometragem = function (newKm) {
    if (newKm > this.quilometragem) {
        this.quilometragem += newKm
        return this.quilometragem
    } else {
        return 'Km invalida'
    }
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

const carro = new Carro ('Mitsubishi', 'L200', 2022, 'Diesel', 192);
const veiculo = new Veiculo('Chevrolet', '2025')



console.log(carro.descreverVeic())
console.log(veiculo.descreverVeic())