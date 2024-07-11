/*
3. async/await Básico:

Reescreva o exercício anterior utilizando async/await.
(https://jsonplaceholder.typicode.com/users)
*/

async function simuladorFetch () {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const json = await response.json();
    const nome = json.map( val => val.name)

    console.log(nome);
}

simuladorFetch()