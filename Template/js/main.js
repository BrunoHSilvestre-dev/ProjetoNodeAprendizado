function main() {
    const form = document.querySelector('form');

    recebeEventoForm = evento => {
        evento.preventDefault();

    }
    form.addEventListener('submit', recebeEventoForm);    
}
main();