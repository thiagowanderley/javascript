var agora = new Date()
var dia = agora.getDay()

/*
    DOMINGO = 0
    SEGUNDA = 1
    TERCA = 2
    QUARTA = 3                                                                  
    QUINTA = 4             
    SEXTA = 5                                                      
    SABADO = 6
*/

console.log(dia)

switch(dia) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break  
}