AOS.init();

const dataDoEvento = new Date("Jul 23, 2024 19:00:00");
const timeStampEvento = dataDoEvento.getTime();

//Função para sempre atualizar a data atual.

const contandoAsHoras = setInterval(function() {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diastanciaAteOEvento = timeStampEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(diastanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((diastanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((diastanciaAteOEvento % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((diastanciaAteOEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(diastanciaAteOEvento < 0) {
        clearInterval(contandoAsHoras);
        document.getElementById('acabou').innerHTML = '';
        document.getElementById('contador').innerHTML = ' :Tempo expirado'
    }
}, 1000)