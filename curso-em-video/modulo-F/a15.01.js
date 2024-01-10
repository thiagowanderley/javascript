var a = [1, 2, 3, 4, 5, 6, 7]
/*
console.log(`${a}`)
for(var x = 0; x < a.length; x++) {
    console.log(`${a[x]}`)
}
*/

for (var x in a) {
    console.log(`A posicão ${x} tem o valor ${a[x]}`)
}
console.log(`${a.indexOf(4)}`) //solicito que ele me mostre em qual indice està o valor solicitado