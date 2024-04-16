// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 ou 5 = FizzBuzz
// Número NÃO é divisível por 3 ou 5 = Número
// *Checar se o número é realmente um número
// Use a função com números de 0 a 100

function eDivisivel(num) {
   
     if (isNaN(num)) {return 'dado invalido';} 
    else if (num % 3 === 0 && num % 5 === 0) {return 'FizzBuzz';}
    else if (num % 3 != 0 && num % 5 != 0) {return num;} 
    else if (num % 3 === 0) {return 'Fizz';} 
    else if (num % 5 === 0) {return 'Buzz';}
}

for (i = 0; i <= 100; i++) {
    console.log(i, eDivisivel(i))
}

//const x = 15
//console.log(eDivisivel(x))
