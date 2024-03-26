// FUNÇÕES
/*
function saudacao(nome) {
    //console.log(`Bom dia ${nome}`)
    return `Bom dia ${nome}` //Valor que vai ser retornado ao executar a função
}

const teste = saudacao('Thiago');
// Teste recebe o valor que foi retornado ('Tudo ok')
console.log(teste)
*/
/*
function soma (x, y) {
    const resultado = x + y
    return resultado
// return define um ponto final a função. Tudo que estiver abaixo dela n será executado
}

const resultado = soma(2, 2)
console.log(resultado)
console.log(soma(2, 2)); 
*/

const raiz = function (x, y = 0.5) {
    let calc = x ** y
    return calc
};

console.log(raiz(9))
console.log(2.645713110645 * 2.645713110645)

// ARROW FUNCTION

const raiz2 = x => x ** 0.5
console.log(raiz2(9))

// Não precisa do "return" e nem dos cochetes