// Metodos para Promises:

// Promise.all ; Promise.race ; Promise.resolve ; Promise.reject

// Promise.all ->

function saudação (msg, time) {
    return new Promise ((res, rej) => {

        if (typeof msg !== 'string') rej('BAD VALUE')

        setTimeout( () => {
            res(msg.toUpperCase() + ' ' + 'passei por aqui')
        }, time*1000)
    })
}

const promessas = [
    saudação('ola Primario', 0.5),
    saudação('ola 1', 1),
    saudação('ola 2', 3),
    saudação('ola 3', 1.5)
]

// Promise.all
Promise.all(promessas)
.then( date => console.log(date))
.catch( erro => console.log(erro))


// Promise.race
Promise.race(promessas)
.then( date => console.log(date))
// -> retorna o primeiro valor encontrado
// = 'ola primario'

// Promise.resolve

