// OBJETO DATE

// TODA FUNÇÃO CONSTRUTORA COMEÇA COM LETRA MAIUSCULA
// SINTAXE --> const data = new Date();
//  Os meses em Js são contados do 0 ao 11, ou seja: Janeiro = mes 0

//                    ano  mes dia min seg
const data = new Date(2000, 4, 15, 11, 45);

// OUTRA FORMA DE REPRESENTAR UMA DATA -> atraves de strings
const outraData = new Date('2000-5-15 11:45') 

console.log(outraData) // -> Pode usar o parametro toDateString();
console.log(data)

// COMO EXTRAIR COISAS PONTUAIS
console.log('Dia', outraData.getDate()) //Dia
console.log('Mes', outraData.getMonth() + 1) //Mes -> Lembrar que o mês é sempre dos 0 ao 11
console.log('Ano', data.getFullYear()) //Ano
console.log('Hora', data.getHours()) //Hora
console.log('Minutos', data.getMinutes()) //Minutos


