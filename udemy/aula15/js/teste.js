const num = Number(prompt('Digite um número'))

let numeroEscolhido = document.getElementById('numero-selecionado')
let resultado = document.getElementById('resultado')

numeroEscolhido.innerHTML = num
resultado.innerHTML = `

- A raiz quadrada do seu número é: ${num ** 0.5} <br/> <br/>
- ${num} é inteiro?: ${Number.isInteger(num)} <br/> <br/>
- O número selecionado é NaN?: ${Number.isNaN(num)} <br/> <br/>
- Arredondado para baixo: ${Math.floor(num)} <br/> <br/>
- Arredondado para cima: ${Math.ceil(num)} <br/> <br/>
- Seu numero com duas casas decimais: ${num.toFixed(2)}
`