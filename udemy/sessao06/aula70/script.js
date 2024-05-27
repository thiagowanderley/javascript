// OBJETOS => Parte 01

// Chamando OBJ por chaves
const pessoas = {
    nome:'Thiago',
    sobrenome:'Wanderley'
};

const chave = 'nome';
console.log(pessoas[chave]);

// Criando objetos com 'New' (construtor)

const carro = new Object;
carro.marca = 'Mitsubishi';
carro.modelo = 'Pajero Sport';

console.log(carro);

// Deletando Itens de Arrays

const pessoas01 = {
    nome: 'Leonardo',
    sobrenome: 'Dourado'
};
delete pessoas01.sobrenome;
console.log(pessoas01);

// Metodos dentro de objetos com Function callBack

const pessoas02 = new Object(); 
    pessoas02.nome = 'Patricia';
    pessoas02.sobrenome = 'Leal';
    pessoas02.idade = 24;


pessoas02.falaNome = () => {console.log(`${pessoas02.nome} está dizendo 'ola'!!`)};
pessoas02.falaNome();

pessoas02.dataNasc = () => {return 2024 - pessoas02.idade}
console.log(pessoas02.dataNasc());

// Descobrindo valores e chaves com for (in, [])

const pessoas03 = {
    nome: 'Leo',
    sobrenome: 'Ramalho'
};

for (let x in pessoas03) {console.log(x)} // Chaves
for (let y in pessoas03) {console.log(pessoas03[y])} // Valor 


