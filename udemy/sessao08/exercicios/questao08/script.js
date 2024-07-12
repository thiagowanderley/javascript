/*
Promise.all:

Crie três Promises que resolvem após diferentes tempos (1s, 2s, e 3s). Use Promise.all para esperar todas resolverem e exibir uma mensagem no console quando todas estiverem completas.
*/

function intervalo (tempo, argumento) {
    setTimeout (()=> {

        console.log(argumento);

    }, tempo*1000)
}

const promise1 = new Promise((res, rej) => {
    res(intervalo(1, 'Promise 1 resolvida...'))
})
const promise2 = new Promise((res, rej) => {
    res(intervalo(2, 'Promise 2 resolvida...'))
})
const promise3 = new Promise((res, rej) => {
    res(intervalo(3, 'Promise 3 resolvida...'))
})

Promise.all([promise1, promise2, promise3])
.then(val => console.log('Todas as promises resolvidas: ' + val))
.catch(e => console.log(e))
