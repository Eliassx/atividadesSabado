let horaInicio = parseFloat(prompt("Digite a hora que deu início a partida (Ex: 19,30 = 19:30): \n"))
let horaTermino = parseFloat(prompt("Digite a hora que finalizou a partida (Ex: 21,30 = 21:30): \n"))

let conversaoInicio;
conversaoInicio = horaInicio * 60;

let conversaoFinal;
conversaoFinal = horaTermino * 60;

let tempoFinal;
tempoFinal = conversaoFinal - conversaoInicio;

function horas (horaInicio, horaTermino) {
    document.getElementById('info').innerHTML = `O tempo de duração em minutos foi de: ${tempoFinal}min`
}
horas();