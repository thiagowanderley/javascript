// Criando Funções com Data
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

