// CONSTANTES
//const != let/var
//Não podemos modificar o valor de uma constante
/*
uma constante tem que ser criada e inicializada, ex:
    const nome;
    nome = 'Thiago';
*/
const paisDeOrigem = 'Brasil';
const nome = 'Thiago';
console.log(paisDeOrigem, nome);
//os valores acima seguiram o mesmo até o fim do programa. Não podemos redeclara-las
/*
const primeiroNumero = 10
const segundoNumero = 20
if (primeiroNumero < 10) {
    segundoNumero++
} else {
    segundoNumero--
}
console.log(segundoNumero)
*/
// O programa acima vai dar erro pois o mesmo impõe uma alteração no valor de uma constante
// Se alterarmos a const por let o erro sumirá. Ex:
let primeiroNumero = 10
let segundoNumero = 20

if (primeiroNumero < 10) {
    segundoNumero++
} else {
    segundoNumero--
}
console.log(segundoNumero)

segundoNumero+=5
console.log(segundoNumero)