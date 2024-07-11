
/*
fetch('pessoas.json')
    .then( response => response.json())
    .then( json => carregaElement(json))
    .catch( e => console.log(e))
*/
axios('pessoas.json') // script importado no html
    .then(resposta => carregaElement(resposta.data))

 function carregaElement(json) {

    const table = document.createElement('table');
    
    for (let pessoas of json) {

        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoas.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoas.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoas.salario;
        tr.appendChild(td3);

        table.appendChild(tr)
    }

    const divPessoas = document.querySelector('div.pessoas');
    divPessoas.appendChild(table)
 }
    

    