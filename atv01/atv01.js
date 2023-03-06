let tempo;
tempo = parseInt(prompt("Digite o tempo em segundos: \n"));

let tempoH;
tempoH = parseInt(tempo / 3600);

let tempoM;
tempoM = parseInt(tempo / 60);

let tempoS;
tempoS = parseInt(tempo % 60);

if(tempoS >= 60) {
    tempoM = tempoM + 1;
} else if(tempoM >= 60) {
    tempoH = tempoH + 1;
    tempoM = tempoM % 60;
}

function time(hour, min, seg) {
    document.getElementById('info').innerHTML = `O tempo em horas, minutos e segundos ficou: ${tempoH} hrs ${tempoM} min ${tempoS} seg`
}
time(3600, 60, 1)