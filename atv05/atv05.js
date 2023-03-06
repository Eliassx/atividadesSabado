const number01 = parseFloat(prompt("Digite o primeiro número:"));
const number02 = parseFloat(prompt("Digite o segundo número:"));

function result (number01, number02) {
    if(number01 === number02) {
        document.getElementById('info').innerHTML = `Verdadeiro`
    } else {
        document.getElementById('info').innerHTML = `Falso`
    }
}
result(number01, number02);