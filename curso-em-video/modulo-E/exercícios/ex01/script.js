function contar() {
    var res = document.getElementById('res')
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    var c = i

    if (i.length == 0 || f.length == 0 || p.length == 0) {
        alert('Preencha todos os campos')
    } else {
        res.innerHTML = 'Contando: <br>'
        
        if (p <= 0) {
            alert('Valor de Passo invalido. Considerando valor 1')
            p = 1
        }

        if (i < f) {
            for(c = i; c <= f; c += p)
            res.innerHTML += `>${c}`
        }
    }

}