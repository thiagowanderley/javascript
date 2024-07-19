import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css'
import Cpf from './modules/Cpf';

(function() {
    const gera = new Cpf
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf()

})