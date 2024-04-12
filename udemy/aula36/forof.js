
const funcionarios = ['Thiago', 'Nayane', 'Katiana'];

for (let x in funcionarios) {console.log(x)}
for (let y of funcionarios) {console.log(y)}

//------------------------------------------

//                              of     in
funcionarios.forEach(function(valor, indice) {
    console.log(valor, indice)
});


/*
    A diferença entre in / of

    in -> responsavel por "percorrer" os INDICES de um array, object
    of -> responsavel por "percorrer" os DADOS/VALORES de um array, object
*/
/*
    of -> não funciona para objects
*/