//421.793.158-13
// Multiplicar cada um dos dígitos não-verificadores por um valor que 
// regride de 1 em 1 começando por 10 ]
// Primeiro dígito verificador é 11 - o resto da divisão da soma dos
// valores multiplicados - porém se o valor for maior que nove, o dígito será zero
// Para o segundo dígito o processo é o mesmo porém começando por 11 ao invés de 10 e
// considerando o Primeiro dígito verificador para o cálculo

//  4  2  1  7  9  3  1  5  8
// 10  9  8  7  6  5  4  3  2
// 40 18  8 49 54 15  4 15 16 = 219
// 11 - (219 % 11) = 1 

//  4  2  1  7  9  3  1  5  8  1
// 11 10  9  8  7  6  5  4  3  2
// 44 20  9 56 63 18  5 20 24  2 = 261
// 11 - (261 % 11) = 3

function ValidadorCPF(cpfEnviado) {
    const CPFSemMascara = cpfEnviado.replace(/\D+/g, '');
    const CPFArray = Array.from(CPFSemMascara);

    const digitosVerificadoresOriginais = [...CPFArray.splice(-2, 2)];
    
    let primeiroDigito = 11 - (CPFArray.reduce(
        (acumulador, valor, indice) => acumulador + ((10 - indice) * valor), 0) % 11);

    if (primeiroDigito > 9) primeiroDigito = 0;

    const digitosVerificadoresCalculados = [primeiroDigito.toString()];
    
    CPFArray.push(digitosVerificadoresCalculados[0]);
    
    let segundoDigito = 11 - (CPFArray.reduce(
        (acumulador, valor, indice) => acumulador + ((11 - indice) * valor), 0) % 11);
    
    if (segundoDigito > 9) segundoDigito = 0;
    
    digitosVerificadoresCalculados.push(segundoDigito.toString());
    
    return digitosVerificadoresCalculados.toString() === digitosVerificadoresOriginais.toString();
}

console.log(VerificarCPF('472.708.738-36'));

console.log(VerificarCPF('421.793.158-13'));