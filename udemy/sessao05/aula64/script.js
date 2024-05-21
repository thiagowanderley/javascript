// CONCATENAÇÃO DE ARRAYS

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const concatenacao = num1.concat(num2, [7, 8, 9], 'luiz');
// concat => concatenação 

const concatenacao2 = [...num1, ...num2,...[7, 8, 9], 'thiago'];
// spread => ...elemento

console.log(concatenacao);
console.log(concatenacao2);
