/*
1. Promise Básica:

Crie uma Promise que resolve com a mensagem "Promise resolvida!" após 2 segundos. Use setTimeout para simular o atraso.
*/
function simulaPromise (time) {

    const minhaPromise = new Promise( (res, rej) => {

    setTimeout(() => {

        if(time !== 2) rej('tempo invalido')
        res('Promise resolvida')

    }, time*1000)
})

minhaPromise.then( res => console.log(res))
            .catch( e => console.log(e))

}

simulaPromise(2)
