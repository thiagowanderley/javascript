/*
7. Fetch API com Parametros de URL:

Faça uma requisição GET para a API pública (https://jsonplaceholder.typicode.com/users) passando um parâmetro de consulta ?username=Bret. Exiba os dados do usuário no console.
*/

const url = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users?username=Bret'
]

fetch(url[1])
.then(val => val.json())
.then(json => console.log(json))