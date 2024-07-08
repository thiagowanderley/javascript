// Metodo Resolve \ Reject

function esperaAi (msg, time) {
    return new Promise( (res, rej) => {

        if(typeof time !== 'number') rej('BAD VALUE')

        setTimeout( () => {
            res(msg)
        }, time * 1000)
    })
}

function baixarPag () {
    let flag = true

    if (!flag) {
        return Promise.reject('Pagina Baixada')
    } else {
        return esperaAi('Não Baixado', 2)
    }
}

baixarPag()
.then( val => console.log(val))
.catch( e => console.log(e))

