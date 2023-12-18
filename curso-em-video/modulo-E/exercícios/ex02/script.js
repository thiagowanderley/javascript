function tabuada() {
    var res = document.getElementById('res')
    var nume = document.getElementById('nume')
    var n = Number(nume.value)
    var t = 0


    if (n == 0) {
        alert('Preencha os campos abaixo')
    } else {
        res.innerHTML = 'Contando... <br>'
    }
        if (n != 0){
        while (t <= 9) {
            var x = n * t
            ++t
            res.innerHTML += `<p><strong>${n} x ${t} = ${n*t}</strong></p>`
    }
    }
}
