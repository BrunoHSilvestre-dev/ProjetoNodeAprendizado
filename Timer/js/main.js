function main() {
    let tempoTimer = new Date(0, 0, 0, 0, 0, 0);

    const IncrementaTimer = () => {
        tempoTimer.setSeconds(tempoTimer.getSeconds + 1);
        console.log(tempoTimer.toString());  
    }

    //const buttonIniciar = document.getElementById('button-iniciar');
    const timer = setInterval(IncrementaTimer, 1000);
    setTimeout(clearInterval(timer), 10000);
    //buttonIniciar.addEventListener('click', IniciarTimer);

}
main();