/*
9. async/await com Várias Promises:

Reescreva o exercício 8 utilizando async/await.
*/

async function allPromises () {

    try {
        const promise1 = new Promise( res => {
        setTimeout( () => {
            res('Promise 1 resolvida...')
        }, 1000)
        })
        const promise2 = new Promise( res => {
        setTimeout( () => {
            res('Promise 2 resolvida...')
        }, 2000)
        })
        const promise3 = new Promise( res => {
        setTimeout( () => {
            res('Promise 3 resolvida...')
        }, 3000)
        })

        const mensagem = await Promise.all([promise1, promise2, promise3])
         console.log('Todas as promises resolvidas: ' + mensagem)

    } catch (e) {
        console.log(e)
    }
}

allPromises()