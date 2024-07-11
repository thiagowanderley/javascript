/*
2. Fetch API Simples:

Faça uma requisição GET para a API pública de usuários (https://jsonplaceholder.typicode.com/users) e exiba os nomes dos usuários no console.
*/

function simuladorFetch () {

    fetch('https://jsonplaceholder.typicode.com/users')

    .then( response => response.json())
    .then( json => {
        const nome = json.map( val => val.name )
        
        console.log(nome)
    })
}

simuladorFetch()