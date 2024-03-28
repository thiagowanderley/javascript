/*
Alguns valores no JS são considerados "falsos" em sua essência. São eles:

FALSO:
- false  -> Valor falso literal
- 0  -> Valor zero
'' "" ``  -> Strings vazias
null / undefined
NaN
*/


console.log('Thiago' && 'Daniel' && 'Luiz' && '' && 'Otavio'); //Ele retorna o valor falso (string vazia)
console.log('ola' && 0 && 'mundo') //Ele retorna o valor falso (0)

function olaMundo() {
    return 'ola mundo!'
}

const valorFalso = NaN

console.log(valorFalso && olaMundo()); //Retorna o valor falso(NaN)
console.log(`Thiago` && 'tudo bem' && olaMundo()); //Caso todos sejam verdadeiros ele retorna o ultimo valor

// CIRCUIT BRAKER COM || -> OU
// Retorna sempre o primeiro valor verdadeiro, Ex:

console.log('' || null || false || 'Thiago' || undefined); //Retorna o primeiro valor verdadeiro(Thiago)

const a = ''
const b = null
const c = 'false'
const d = false

console.log(a || b || c || d); // Retorna o primeiro verdadeiro (false) PEGADINHA!!
