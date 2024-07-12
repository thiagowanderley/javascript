/*
4. Promise com Tratamento de Erro:

Crie uma Promise que rejeita com a mensagem "Algo deu errado!" após 3 segundos. Use setTimeout e trate o erro usando .catch().
*/

const minhaPromise = new Promise( (res, rej) => {

    setTimeout( () => {

        rej('Algo deu errado...')

    }, 3000)
})
.then(res => console.log(res))
.catch(e => console.log(e))
