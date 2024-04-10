const resultado = document.getElementById('container')

const elemento = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]



for (let i = 0; i < elemento.length; i++) {
    let {tag, texto} = elemento[i];
    resultado.innerHTML += `<${tag}>${texto}</${tag}>`;
}