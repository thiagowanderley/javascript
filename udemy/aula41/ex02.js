/*
function ePaisagem (altura, largura) {
   return largura > altura ? 'É paisagem' : 'É retrato';
};
*/

// ou:

const ePaisagem = (altura, largura) => {return largura > altura;}

const imagem = {
   altura: 20,
   largura: 30,
};

console.log(ePaisagem(imagem.altura, imagem.largura))