//RETURN

// retorna um valor
// termina a função

const soma = (a, b) => {return a + b;} // Função que retorna algo

const soma2 = (a, b) => {console.log(a + b);} // Não retorna nada, porem tem uma função restrita
soma2(7, 5);

function personalizarBody () { //Funções dentro de outras funções

    document.addEventListener('click', function () { // executa uma ação, porem não retorna nada 
        document.body.style.backgroundColor = 'brown' // ao clicar no body ele fica marrom
    })
    document.addEventListener('dblclick', function () {
        document.body.style.backgroundColor = 'wheat'// ao clicar no body 2x ele fica na cor creme

        function retornaPessoa () { // Função criada para solicitar o nome e sobrenome do usuario e criar um objeto com isso ao clicar 2x
            const pessoa = {
                nome: prompt('Seu primeiro nome').valueOf(),
                sobrenome: prompt('Seu sobrenome').valueOf()
            }
            document.body.innerHTML = pessoa.nome + ' ' + pessoa.sobrenome;
        }
        retornaPessoa();

    })

}
personalizarBody();

function criarMultiplicador (multiplicador) { //retornando uma função dentro de outra função
     return function (n) {
        return multiplicador * n
     };
}

function criarMultiplicador2 (multiplicador, n) {
    return multiplicador * n
}

console.dir(criarMultiplicador(3))
const duplica = criarMultiplicador(2)

console.log(duplica(2))

console.log(criarMultiplicador2(2, 2))