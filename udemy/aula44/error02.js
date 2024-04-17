function retornaHora (data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Aceito apenas instancia de Date')
    }

    if (!data) {
        data = new Date();
    }

    const x = new Date()
    return data = x.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data)
    console.log(hora)
} catch(e) {
    console.log('erro')
} finally {
    console.log('Terminado')
}

























