// PROMISES

function random (min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
}

function stringo (msg, time) {
    setTimeout( () => {
        console.log(msg)
    }, time)
}

stringo('ola', 3000)
random(10, 20)