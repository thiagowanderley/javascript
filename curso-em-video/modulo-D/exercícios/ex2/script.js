btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var btn = document.getElementById('btn')
    var nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('Verifique os dados e digite novamente [ERRO]')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.getAttribute = ('src', 'criancam.jpg')
            } else if (idade >= 13 && idade < 21) {
                //adolescente
                img.getAttribute = ('src', 'adolescentem.jpg')
            } else if (idade >=21 && idade < 61) {
                //adulto
                img.getAttribute = ('src', 'adulto.jpg')
            } else if (idade >= 61) {
                //idoso
                img.getAttribute = ('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //criança
            } else if (idade >= 13 && idade < 21) {
                //adolescente
            } else if (idade >=21 && idade < 61) {
                //adulto
            } else if (idade >= 61) {
                //idoso
            }
        }
        res.innerText = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}