const num = [1, 2, 3, 4, 5, 6, 7, 8]

for (let x of num) {
    if (x % 2 === 0) {
        continue;
    }
    console.log(x)
}

console.log('##########')

for (let y of num) {
    if (y === 3) {
        break;
    }
    console.log(y)
}

/*
break --> Retorna somente os valores que estão antes da afirmativa se tornar true

continue --> Retorna todos os valores, exceto os que baterem com a condicional
*/