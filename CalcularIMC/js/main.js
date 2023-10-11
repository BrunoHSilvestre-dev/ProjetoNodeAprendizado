function main() {
    const form = document.querySelector('form');

    recebeEventoForm = evento => {
        evento.preventDefault();

        const PESO = Number(document.getElementById('Peso').value);
        if (!PESO) {
            exibirResultado('Peso Inválido', false);
            return;
        }
        const ALTURA = Number(document.getElementById('Altura').value);
        if (!ALTURA) {
            exibirResultado('Altura Inválida', false)
            return;
        }

        const IMC = getIMC(PESO, ALTURA);
      
        exibirResultado('Seu IMC é: ' + IMC + ' ' + getMsgIMC(IMC), true);
    }
    form.addEventListener('submit', recebeEventoForm);

    function exibirResultado(msg, isValid) {
        const blocoResultado = document.querySelector('#blocoResultado');
        blocoResultado.innerHTML = '';
        
        const p = document.createElement('p');
        p.innerHTML = msg;
        
        const classListparagrafo = isValid ? 'resultadoValido':'resultadoInvalido';
        p.classList.add(classListparagrafo);

        blocoResultado.appendChild(p);
    }

    function getIMC(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2)
    }

    function getMsgIMC(IMC) {
        const msgs = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1',
            'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (IMC < 18.5) return msgs[0];
        if (IMC < 24.9) return msgs[1];
        if (IMC < 29.9) return msgs[2];
        if (IMC < 34.9) return msgs[3];
        if (IMC < 39.9) return msgs[4];

        return msgs[5];
    }
}
main();