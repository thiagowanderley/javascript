const nome = 'Thiago';
const sobrenome = 'Wanderley';
const idade = 23;
const peso = 75;
const altura = 1.76;
let imc = peso/(altura**2);
let anoDeNascimento = 2000;

console.log(
    `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu indice de massa corporal é igual a ${imc.toFixed(2)}imc . ${nome} ${sobrenome} nasceu em ${anoDeNascimento}`
    );