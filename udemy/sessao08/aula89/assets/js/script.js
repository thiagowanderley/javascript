// XMLHttpRequest -> AJAX

const url = 'pagina1.html';


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el)  {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };
    
    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('div.resultado');
    resultado.innerHTML = response;
}


