//               0         1       2       3
const nome = ['thiago', 'davi', 'joao', 'almir'];
const novo = nome // novo
novo.pop(); 
nome[2] = 'neto';
delete nome[2] // delete 

console.log(nome)

/*
    delete => usado quando queremos remover o conteudo de um indice, porem não queremos que os indices sejam alterados

    novo => tudo que for feito no novo, será refletido no nome
*/