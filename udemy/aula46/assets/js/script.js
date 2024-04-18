//relogio

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
    pausarContador()
   relogio.innerHTML = relogioZerado(0);
   relogio.style.color = 'black';
}
