function saudacao (msg, time) {

    const myPromise = new Promise((res, rej) => {

    setTimeout( () => {
        console.log(msg)
    }, time * 1000)

    if (time < 5) {
        res('Mensagem enviada com sucesso, enviada abaixo de 5 seg')
    } else {
        msg = 'error:'
        rej('Tempo excedido, ultrapassou 5 seg')
    }
})

myPromise.then( data => {
    setTimeout( () => {console.log(data)}, time*1000 + 1)
}).catch( data => {
    setTimeout( () => {console.log(data)}, time*1000 + 1)
})

}

saudacao('ola mundo', 6)
