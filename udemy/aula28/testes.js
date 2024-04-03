// Criando Funções com Data

function geral () {

    function zeroAEsquerda (num) {
        return num < 10 ? num + '0' : num 
    }

    const numero = 8
    console.log(zeroAEsquerda(numero))

const dataGeral = new Date();

function formataData () {
    const dia = dataGeral.getDate();
    const mes = dataGeral.getMonth() + 1;
    const ano = dataGeral.getFullYear();
    const hora = dataGeral.getHours();
    const min = dataGeral.getMinutes();

    return data = `${dia}/${mes}/${ano}  ${hora}:${min}`
}


const dataBrasil = formataData(dataGeral)
console.log(dataBrasil)


}



geral()
