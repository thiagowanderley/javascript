function meuEscopo () {
    const formulario = document.querySelector('#formulario');
    const resultado =document.querySelector('#resultado');

    const pessoas = [];

    function enviarDados(evento) {
        evento.preventDefault();

        const nome = document.querySelector('#nome')
        const sobrenome = document.querySelector('#sobrenome')
        const altura = document.querySelector('#altura')
        const peso = document.querySelector('#peso')
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value,

            /*  
            nomeCompleto() {
                console.log(`Nome completo: ${this.nome.value} ${this.sobrenome.value}`)
            }
            */
        });

        console.log(pessoas)

        resultado.innerHTML += `
        <p>Nome Completo: ${nome.value} ${sobrenome.value}<p/>        
        <p>Altura: ${altura.value}cm<p/>
        <p>Peso: ${peso.value}kg<p/>        
        `
        
    }

    formulario.addEventListener('submit', enviarDados)
}

meuEscopo();