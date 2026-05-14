function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad Value')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
};

function numeroAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)) + min;
};

esperaAi('Frase 1', numeroAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', numeroAleatorio(2, 4));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', numeroAleatorio(3, 5));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);
    });  
