function main() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    form.addEventListener('submit', recebeEventoForm)
    recebeEventoForm = evento => {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome')
        const altura = form.querySelector('.altura')
        const peso = form.querySelector('.peso')    
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value
        }) 
        
        pessoas.forEach( (value, index) => {
            console.log(
                pessoas[index].nome,
                pessoas[index].sobrenome,
                pessoas[index].altura,
                pessoas[index].peso,
                index
            )
        })

        //console.log(nome.value, sobrenome.value, altura.value, peso.value)
        //console.log('Prevenido o envio com sucesso')
    }
}
main();