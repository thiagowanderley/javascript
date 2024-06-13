// OBJETO MAP - Estudo de caso

const pessoas = [
    { id: 3, nome: 'Thiago'},
    { id: 2, nome: 'Luiz'},
    { id: 1, nome: 'Lucas'}
];

const novasPessoas = new Map();

for (const unidade of pessoas) {
    const { id } = unidade
    novasPessoas.set(id, {...unidade});
};

console.log(novasPessoas)

/*
const novasPessoas = {};

for (const unidade of pessoas) {
    const { id } = unidade
    novasPessoas[id] = {...unidade};
};

console.log(novasPessoas)
*/