// EXPORT AND IMPORT

/*
import { 
    nome as nome2 ,
    sobrenome,
    idade,
    soma
} from './modulo1';
// Definindo variaveis importadas com outra identidade
// Didatica: exporta "nome" como "nome2"
// nome as => nome2

const nome = 'Tadeu'

console.log(nome, sobrenome, idade);
console.log(soma(2, 5));

import { Pessoa } from './modulo1';
const pessoa01 = new Pessoa('Thiago', 'Wanderley')

console.log(pessoa01)
*/

/*
// IMPORTANDO TUDO DE VEZ
import * as meuModulo from './modulo1'

console.log(meuModulo)
*/

//importando um padrão
import subtracao from './modulo1';
console.log(subtracao(4, 2))