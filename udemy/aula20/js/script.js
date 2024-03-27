function meusDados () {

const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const enviar = document.querySelector('#enviar')
const resultado =document.querySelector('#resultado')

const pessoas = []

enviar.addEventListener('click', enviarD)

    function enviarD(evento) {
        evento.preventDefault();

        resultado.innerHTML += `
        Nome: ${nome.value} ${sobrenome.value}<br/>
        Altura: ${altura.value}<br/>
        peso: ${peso.value}<br/> <br/>
        `

        pessoas.push = ({
            nome:nome.value,
            sobrenome:sobrenome.value,
            altura:altura.value,
            peso:peso.value
        });

        console.log(pessoas)

    }
}

meusDados()


    








/*
function criarArrays(nome, sobrenome, altura, peso) {
    return nome, sobrenome, altura, peso

    let pessoa = criarArrays([{
        nome: nome.value,
        sobrenome: sobrenome.value,
        altura: altura.value,
        peso: peso.value
    }]);

    console.log(`${pessoa}`)

}
*/