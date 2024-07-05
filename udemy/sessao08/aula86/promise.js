let minhaPromise = new Promise ( (resolve, reject) => {

    let sucesso = Math.floor(Math.random() * (50 - 25 + 1)) + 25

    if (sucesso === 37) {
        resolve('OK')
    } else {
        reject('not OK')
    }

    
});

minhaPromise.then( (msgS) => {
    console.log(msgS)
}).catch( (msgE) => {
    console.log(msgE)
})