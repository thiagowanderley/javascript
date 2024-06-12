// VALIDANDO CPF

function Cpf (ident) {
    this.ident = ident;
}

Cpf.prototype.primeiroNumCpf = function () {
    const cpfLimpo = this.ident.replace(/\D+/g, '');
    const cpfReduzido = cpfLimpo.slice(0, -2);
    const cpfArray = cpfReduzido.split('');
    const cpfNum = cpfArray.map(Number);
    const result = [];

    for(i = 0; i < cpfNum.length; i++ ) {
        result.push(cpfNum[i] * (10 - i))
    }

    resultReduce = result.reduce((acum, val) => acum + val, 0);
    const primeiroNum = 11 - (resultReduce % 11);

    if (cpfLimpo.length !== 11) {
        throw new TypeError('cpf.lenght !== 9');
        }

        return primeiroNum > 9 ? 0 : primeiroNum; 
    }

Cpf.prototype.concatenandoPrimNum = function () {
    const primeiroNumCpf = this.primeiroNumCpf()
    const concatenando = this.ident.slice(0, -2) + primeiroNumCpf
    return concatenando
};

Cpf.prototype.gerarCpf = function () {
    const cpfIn = this.concatenandoPrimNum();
    const cpfLi = cpfIn.replace(/\D+/g, '');
    const cpfAr = cpfLi.split('');
    const cpfN = cpfAr.map(Number)
    const resultado = [];

    for (let i = 0; i < cpfN.length; i++) {
        resultado.push(cpfN[i] * (11 - i))
    }
    
     const resRedu = resultado.reduce((ac, val) => ac + val, 0)
     const segNum = 11 - (resRedu % 11);

     return segNum > 9 ? 0 : segNum;
}

Cpf.prototype.cpfFinal = function () {
    const segNum = this.gerarCpf();
    const cpfIn = this.concatenandoPrimNum();
    const cpfCompleto = cpfIn + segNum;
    return cpfCompleto
} 

Cpf.prototype.validacao = function () {
    const limpo = this.ident.replace(/\D+/g, '');
    const cpfF = this.cpfFinal();
    
    const validacaoCpf = cpfF !== limpo? 'Invalido' : 'valido';
    return validacaoCpf
}

const cpf = new Cpf ('082070065555');
console.log(cpf.validacao())




