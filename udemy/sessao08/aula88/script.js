
// Async and Await

function rand (max, min) {
    max *= 1000;
    min *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, time) {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            if (typeof msg !== 'string') {
                rej('CAI NO ERRO');
                return
            }

            res(msg + ' ' + ' - Passei por aqui');
            return
        }, time)
    });
}

/*
esperaAi('Fase 01', rand(0, 3))
    .then( val => {
        console.log(val)
        return esperaAi('Fase 02', rand(0, 3))   <--- Forma Longa
    .then( val => {
        console.log(val)
        return esperaAi('Fase 03', rand(0, 3))
    .then( val => console.log(val))
    })
})
.catch( e => console.log(e));
*/

async function executa () {
  try{
    const fase01 = await esperaAi('Fase 01', rand(0, 3));
    console.log(fase01);

    const fase02 = await esperaAi('Fase 02', rand(0, 3));
    console.log(fase02);

    const fase03 = await esperaAi('Fase 03', rand(0, 3));
    console.log(fase03);

    console.log('Terminamos na fase:' + ' ' + fase03);
  } catch (e) {
    console.log(e)
  }
}

executa();


// PEDIR EXEMPLO REAL DE UMA PROMISE AO GPT


