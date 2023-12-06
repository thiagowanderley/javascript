 var x = new Date()
 var y = x.getHours()

 console.log(`Agora são ${y}h`)
 if (y >= 0 || y <= 5 ) {
    console.log('Boa madrugada') 
 } else if (y < 12) {
    console.log('Bom dia!')
 } else if (y < 18) {
    console.log('Boa tarde')
 } else if (y <= 24) {
    console.log('Boa noite')
 }