// FUNÇÕES RECURSIVAS

function recursiva (max) {
    if (max >= 10) return;
    max++
    console.log(max)
    recursiva(max); //Função que se chama dentro dela propria
}

recursiva(0);