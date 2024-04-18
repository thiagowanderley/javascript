//relogio - timer
function relogio () {

const relogio = document.querySelector('#timer');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let contador = 0;
let timer;

iniciar.addEventListener('click', iniciarContador);
pausar.addEventListener('click', pausarContador);
zerar.addEventListener('click', zerarContador);

function relogioZerado (segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UCT'
    })
}

function iniciarContador () {
    clearInterval(timer)
    timer = setInterval(function () {
        contador++
        relogio.innerHTML = relogioZerado(contador)
    }, 1000)
    relogio.style.color = 'black';
    
}

function pausarContador () {
    clearInterval(timer)
    relogio.style.color = 'red';
}

function zerarContador () {
    clearInterval(timer)
    contador = 0;
   relogio.innerHTML = '00:00:00';
   relogio.style.color = 'black';
}

}

relogio()