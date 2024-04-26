// FUNÇÃO DE CALLBACK

function f1() {
    setTimeout(function () {
        console.log('f1')
    }, 1000)  
}

function f2() {
    setTimeout(function () {
        console.log('f2')
    }, 2000)
}

function f3() {
    setTimeout(function () {
        console.log('f3')
    }, 3000)
}

f1();
f2();
f3();
console.log('ola mundo')