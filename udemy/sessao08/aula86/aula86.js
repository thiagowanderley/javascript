// PROMISES

function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function stringo (msg, time) {

    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            resolve(msg)
        }, time*1000)
    })

    
}

stringo('ola 1', random(1, 3))
    .then( resposta => {
        console.log(resposta);
        return stringo('Ola 2', random(1, 3))
    })
    .then( resposta => {
        console.log(resposta);
        return stringo('Ola 3', random(1, 3))
    })
    .then( resposta => {
        console.log(resposta);
    })
    .catch()
