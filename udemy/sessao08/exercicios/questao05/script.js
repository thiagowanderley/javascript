/*
5. Fetch API com Post:

Faça uma requisição POST para a API pública (https://jsonplaceholder.typicode.com/posts) enviando um objeto JSON com title e body. Exiba a resposta no console.
*/

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Meu novo post',
        body: 'Este é o conteúdo do meu novo post'
    })
})
.then(response => response.json())
.then(data => console.log(data));
