btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('sexo') //definindo a variavel do form(radio) -- [0]M e [1]F
    var idade = ano - Number(fano.value)
    var genero = ''
    var foto = document.querySelector('img#foto')
    //var img = document.createElement('img')
    //img.setAttribute('id', 'foto')
    

    if (fano.value == 0 || fano.value > ano) {
        alert('Verifique os dados e faça novamente')
        res.innerHTML = 'INVALIDO'

    } else if (fsex[0].checked) {
        var genero = 'Homem'

        if (idade >= 0 && idade < 12) {
            foto.src = 'imagens/criancam.jpg'

        } else if (idade < 21) {
            foto.src = 'imagens/adolescentem.jpg'

        } else if (idade < 60) {
            foto.src = 'imagens/adulto.jpg'

        } else {
            foto.src = 'imagens/idoso.jpg'
        }


    } else if (fsex[1].checked) {
        var genero = 'Mulher'

        if (idade >= 0 && idade < 12) {
            foto.src = 'imagens/criancaf.jpg'

        } else if (idade < 21) {
            foto.src = 'imagens/adolescentef.jpg'

        } else if (idade < 60) {
            foto.src = 'imagens/adulta.jpg'

        } else {
            foto.src = 'imagens/idosa.jpg'
        }

    }
     
    foto.style.display = 'block'
    foto.style.margin = 'auto'
    res.innerHTML = `detectamos um(a) ${genero} com ${idade} anos`
    res.appendChild(foto)
    
}