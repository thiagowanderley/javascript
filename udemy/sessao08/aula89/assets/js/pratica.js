// PRATICANDO SOBRE FETCH API

const url = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts () {

    try {
        const response = await fetch(url);
        //console.log(response.ok);

        if (!response.ok) {
            console.log('Erro na requisição. Status:' + ' ' + response.status)
        }

        const data = await response.json()
       
        const title = data.map( val => val.title)
        console.log(title)

    } catch (e) {
        console.log(e)
    }
}

fetchPosts()