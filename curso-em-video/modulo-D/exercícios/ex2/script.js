btn.addEventListener('click', clicar)

function clicar() {
    var nasc = document.getElementById('nasc')
    var n = Number(nasc.value)
    var idade = 2024 - n
    var masculino = document.getElementById('masculino')
    var feminino = document.getElementById('feminino')
    var btn = document.getElementById('btn')
    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `<p> Você tem${idade} anos</p>`
}