// XMLHttpRequest -> AJAX

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

function carregaPagina(el)  {
    const href = el.getAttribute('href');
        
    fetch(href)
    .then( resposta => {
        if (!resposta.ok) throw new Error('error' + ' ' + resposta.status)
        return resposta.text()
    })
    .then( html => {
        carregaResultado(html);
    })
    .catch( e => console.warn(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('div.resultado');
    resultado.innerHTML = response;
}


