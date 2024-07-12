/*
6. async/await com Tratamento de Erro:

Reescreva o exercício 4 utilizando async/await para simular uma função assíncrona que pode falhar.
*/
async function rescrevendo(time) {

    try {
        const minhaPromise = new Promise ( (res, rej) => {
            setTimeout( () => {
                rej('Algo deu errado...')   
            }, time*1000)
        });

        const mensagem = await minhaPromise;
        console.log(mensagem);
        
    } catch (e) {
        console.log(e)
    }
}

rescrevendo(3)