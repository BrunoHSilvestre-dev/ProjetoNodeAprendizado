function main() {
    const form = document.querySelector('form');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ]

    recebeEventoForm = evento => {
        evento.preventDefault();
        
        const blocoResultado = document.querySelector('#blocoResultado');
        for (let index = 0; index < elementos.length; index++) {
            let {tag, texto} = elementos[index];
            const element = document.createElement(tag);
            element.innerText = texto;
            blocoResultado.appendChild(element);
        }        
    }
    form.addEventListener('submit', recebeEventoForm);    
}
main();