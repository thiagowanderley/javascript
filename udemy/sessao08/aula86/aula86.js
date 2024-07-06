// PROMISES

function random (min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function stringo (msg, time) {

    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            
        })
    })

    
}

stringo('ola 1', random(1, 3));
stringo('ola 2', random(1, 3));
stringo('ola 3', random(1, 3));