function geral () {

    const resultado = document.getElementById('container')
    const data = new Date()
    let diaDaSemana = data.getDay()
    const dataNumero = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    let diaEscrito = ''
    let mesEscrito = ''

    //---------------------------------------
    
        switch (diaDaSemana) {
            case 0: diaEscrito = 'Domingo'
            break;
            case 1: diaEscrito = 'Segunda-feira'
            break;
            case 2: diaEscrito = 'Terça-feira'
            break;
            case 3: diaEscrito = 'Quarta-feira'
            break;
            case 4: diaEscrito = 'Quinta-feira'
            break;
            case 5: diaEscrito = 'Sexta-feira'
            break;
            case 5: diaEscrito = 'Sabado'
            break;

    }

    //---------------------------------------

    switch (mes) {
        case 0: mesEscrito = 'Janeiro'
        break;
        case 1: mesEscrito = 'Fevereiro'
        break;
        case 2: mesEscrito = 'Março'
        break;
        case 3: mesEscrito = 'Abril'
        break;
        case 4: mesEscrito = 'Maio'
        break;
        case 5: mesEscrito = 'Junho'
        break;
        case 6: mesEscrito = 'Julho'
        break;
        case 7: mesEscrito = 'Agosto'
        break;
        case 8: mesEscrito = 'Setembro'
        break;
        case 9: mesEscrito = 'Outubro'
        break;
        case 10: mesEscrito = 'Novembro'
        break;
        case 11: mesEscrito = 'Dezembro'
        break;
    }
    
    resultado.innerHTML = `
    ${diaEscrito}, ${dataNumero} de ${mesEscrito} de ${ano} <br/> 
    ${hora}:${minuto}
    
    `

    //console.log(diaEscrito)
}

geral()