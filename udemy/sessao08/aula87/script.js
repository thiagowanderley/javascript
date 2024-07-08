// Metodos para Promises:

// Promise.all ; Promise.race ; Promise.resolve ; Promise.reject

// Promise.all ->

function saudação (msg, time) {
    return new Promise ((res, rej) => {

        if (typeof msg !== 'string') rej('BAD VALUE')

        setTimeout( () => {
            res(msg)
        }, time*1000)
    })
}

const promessas = [
    'Val 1',
    saudação('ola 1', 1),
    saudação('ola 2', 3),
    saudação('ola 3', 1.5),
    'Msg Final'
]

Promise.all(promessas)
.then( date => console.log(date))

