const container = document.getElementById('#container');

fetch('pessoas.json')
    .then( resposta => resposta.json())
    .then( json => SeparaEl(json))
        

function SeparaEl(json) {
    const nome = json.map( val => val.nome)
    container.innerText = nome
}