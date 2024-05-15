//FUNÇÕES GERADORAS 
// Seria basicamnete uma função que pode ser pausada
// Pode realizar varios comandos em momentos distintos
// Yield tem uma função semelhante a 'return', porem alem de retornar um valor, ela delimita o fim de um "bloco"

// Sintaxe: function*

function* geradora1 () {
    // codigo
    yield 'valor 01'
    // codigo
    yield 'valor 02'
    // codigo
    yield 'valor 03'
}

const g1 = geradora1()

//Função next() => chama o yield
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
//done: true => acabou a função

for (let x of g1) {
  console.log(x)
}

function* geradora2 () {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log('############')

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('#############')

function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 () {
    yield* geradora3(); //Chama os valores da geradora 3 para a geradora 4
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let x of g4) {
    console.log(x)
}

console.log('#############')


function* geradora5 () {
    yield function () {console.log('ola 01')};
    yield function () {console.log('ola 02')};
}

const g5 = geradora5();
func01 = g5.next().value
func02 = g5.next().value

func01();
func02();