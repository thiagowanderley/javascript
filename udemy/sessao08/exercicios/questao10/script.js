/*
10. Fetch API com Async/Await e Tratamento de Erro:

Faça uma requisição GET para uma URL inválida utilizando fetch, async/await, e trate o erro com try/catch.
*/

const url = [
    'https://jsonplaceholder.typicode.com/invalidurl',
    'https://jsonplaceholder.typicode.com/users'
]

async function tratarDados () {
    try {
        const response = await fetch(url[1]); 
        if(!response.ok) throw new Error('Error na requisição: ' + response.status)

        const data = await response.json()
        console.log(data);

    } catch (e) {
        console.log(e)
    }
}

tratarDados()