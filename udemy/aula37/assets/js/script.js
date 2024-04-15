const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// COMO EXTRAIR DADOS DO STYLE DE UM ELEMENTO
const estiloBody = getComputedStyle(document.body);
const bkBody = estiloBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = bkBody
    p.style.color = 'white'
    console.log(p)
}