

function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var body = document.getElementById('body')
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    msg.innerText = `Agora são ${hora} horas`

    
    
    if (hora >= 0 && hora < 12) {

        imagem.src = 'imagens/manha250.png'
        msg.innerHTML = `<p>Agora são ${hora} horas <br> Tenha um <strong>Bom dia</strong></p>`
        body.style.background = '#efed88'

    } else if (hora >= 12 && hora < 18) {

        imagem.src = 'imagens/tarde250.png'
        msg.innerHTML = `<p>Agora são ${hora} horas <br> Tenha uma <strong>Boa tarde</strong></p>`
        body.style.background = '#D28871'

    } else if (hora >= 18) {

        imagem.src = 'imagens/noite250.png'
        msg.innerHTML = `<p>Agora são ${hora} horas <br> Tenha uma <strong>Boa Noite</strong></p>`
        body.style.background = '#131a49'

    }                
}



