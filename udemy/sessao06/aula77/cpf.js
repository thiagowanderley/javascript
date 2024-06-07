// VALIDANDO CPF

function Cpf (ident) {
    this.ident = ident;
}

Cpf.prototype.primeiroNumCpf = function () {
    const cpfLimpo = this.ident.replace(/\D+/g, '');
    const cpfArray = cpfLimpo.split('');
    const cpfNum = cpfArray.map(Number);
    const result = [];

    for(i = 0; i < cpfNum.length; i++ ) {
        result.push(cpfNum[i] * (10 - i))
    }

    resultReduce = result.reduce((acum, val) => acum + val, 0);
    const primeiroNum = 11 - (resultReduce % 11);
    return primeiroNum > 9 ? 0 : primeiroNum; 
};

Cpf.prototype.concatenandoPrimNum = function () {
    const primeiroNumCpf = this.primeiroNumCpf()
    const concatenando = this.ident + primeiroNumCpf
    return concatenando
};

Cpf.prototype.gerarCpf = function () {
    const cpfIn = this.concatenandoPrimNum();
    const cpfLi = cpfIn.replace(/\D+/g, '');
    const cpfAr = cpfLi.split('');
    const cpfN = cpfAr.map(Number)
    const resultado = [];

    for (let i = 0; i < cpfN.length; i++) {
        resultado.push(cpfIn[i] * (11 - i))
        console.log(i)
    }
    return resultado;
}

const cpf = new Cpf ('705.484.450-');
console.log(cpf.primeiroNumCpf());
console.log(cpf.concatenandoPrimNum());
console.log(cpf.gerarCpf())


