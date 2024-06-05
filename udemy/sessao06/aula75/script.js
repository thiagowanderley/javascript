// MANIPULANDO PROTOTYPE

const objA = {
    chaveA: 'a'
};

const objB = {
    chaveB: 'b'
};

const objC = new Object();
objC.chaveC = 'c'

// Transferindo o prototype de um OBJ para outro -> (transferindo de: objA, para: objB )
// O objB vai poder receber todas a propriedades do objA
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)

