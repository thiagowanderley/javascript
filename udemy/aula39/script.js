/*
// while ; do while

//Diferença de for ; while ; do while

// WHILE
let i = 0
while (i < 10) {
    i++
    console.log(i)
}
console.log('------------------------')
// FOR
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log('------------------------')
// DO WHILE
let x = 0
do {
    x++
    console.log(x)
} while (x < 10)
*/

function numeroAleatorioEntreDoisNumeros (num1, num2) {
    let numeroAleatorio = Math.round(Math.random() * (num1 - num2) + num2)
    return numeroAleatorio
}
const min = 10;
const max = 50;
let x = numeroAleatorioEntreDoisNumeros(min, max)

while (x != 30) {
    x = numeroAleatorioEntreDoisNumeros(min, max)
    console.log(x)
}


