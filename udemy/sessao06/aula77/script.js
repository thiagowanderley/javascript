// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237 (total)

11 - (total % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

const cpf = '705.484.450';
const cpfLimpo = cpf.replace(/\D+/g, ''); // RegEx
const cpfArray = cpfLimpo.split('');
const cpfNum = cpfArray.map(Number);
const cpfReduce = cpfNum.reduce((acum, val) => {return acum += val}, 0);
const result = [];

for (let i = 0; i < cpfNum.length; i++) {
    result.push(cpfNum[i] * (10 - i))
}
const resultReduce = result.reduce((acum, val) => { return acum += val},0)
console.log(resultReduce);

const primeiroNum = 11 - (resultReduce % 11);
console.log(primeiroNum)


