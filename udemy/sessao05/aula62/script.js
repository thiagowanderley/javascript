//               0         1       2       3
const nome = ['thiago', 'davi', 'joao', 'almir'];
let nomeCompleto = 'Thiago de Souza Vanderlei';
let nomeArray = ['Thiago', 'de', 'Souza', 'Vanderlei'];

const novo = nome; // novo
const novo02 = [...nome]; // copia
let novo03 = [...nome];

nome[2] = 'neto';
delete novo[2] // delete

novo02.pop(); // Remove
novo02.push('clessio'); // Adiciona ao fim
novo02.unshift('lorenzo'); //Adiciona ao inicio

novo03 = novo03.slice(1, 3); //slice

nomeCompleto = nomeCompleto.split(' ') // Split

nomeArray = nomeArray.join(' ') // Join

console.log(nome)
console.log(novo02)
console.log(novo03)
console.log(nomeCompleto);
console.log(nomeArray)

/*
    delete => usado quando queremos remover o conteudo de um indice, porem não queremos que os indices sejam alterados;

    novo => tudo que for feito no novo, será refletido no nome;

    copia => utilizando "[...nome];" é feita uma copia do array sem interligar com o mesmo 

    slice => tem a função de "fatiar" o array. No exemplo usado ele fatia do do indice 1 ate o 3

    split => metodo utilizado para transformar uma string em uma array

    join => metodo utilizado para transformar um array em uma string
*/