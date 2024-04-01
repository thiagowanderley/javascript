// IF ELSE - CONDICIONAIS

function saudacao () {

const hora = 22
const bomDia = 'Bom dia!'
const boaTarde = 'Boa tarde!'
const boaNoite = 'Boa noite!'
let resultado = ''

if (hora > 0 && hora <= 12) {

    let resultado = bomDia
    console.log(resultado)

} else if ( hora >= 13 && hora <= 17) {

    let resultado = boaTarde
    console.log(resultado)

} else {

    let resultado = boaNoite
    console.log(resultado)
}

}

saudacao()