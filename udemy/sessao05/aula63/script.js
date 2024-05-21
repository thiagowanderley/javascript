// Metodo Splice

//              -4        -3         -2          -1
//               0         1          2           3
const nome = ['Thiago', 'Rafael', 'Eduardo', 'Patricia'];
//nome.splice(3, 1);
// nome.splice(indice, delete, elem1, elem2, elem3);
const deletado = nome.splice(-1, 2);

console.log(nome, deletado)
