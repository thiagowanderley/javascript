// SWITCH / CASE

// FAZENDO O MESMO PROGRAMA COM SWITCH E IF ELSE

const data = new Date();
let diaDaSemana = data.getDay();
let diaEscrito = ''
//diaDaSemana = 7

/*
if (diaDaSemana === 0){
    diaEscrito = 'Domingo'
} else if (diaDaSemana === 1){
    diaEscrito = 'Segunda'
} else if (diaDaSemana === 2){
    diaEscrito = 'Terça'
} else if (diaDaSemana === 3){
    diaEscrito = 'Quarta'
} else if (diaDaSemana === 4){
    diaEscrito = 'Quinta'
} else if (diaDaSemana === 5){
    diaEscrito = 'Sexta'
} else if (diaDaSemana === 6){
    diaEscrito = 'Sabado'
}
*/

switch (diaDaSemana) {
    case 0:
        diaEscrito = 'Domingo'
        break;
    case 1:
        diaEscrito = 'Segunda'
        break;
    case 2:
        diaEscrito = 'Terça'
        break;
    case 3:
        diaEscrito = 'Quarta'
        break;
    case 4:
        diaEscrito = 'Quinta'
        break;
    case 5:
        diaEscrito = 'Sexta'
        break;
    case 6:
        diaEscrito = 'Sabado'
        break;
    default: diaEscrito = 'Dia Invalido'
}


console.log(diaDaSemana, diaEscrito)