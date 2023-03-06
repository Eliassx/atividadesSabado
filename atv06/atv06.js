const number = parseFloat(prompt("Digite um número:"));

function result (number) {
    return document.getElementById('info').innerHTML = `O número arrendondado fica: ${number.toFixed(2)}`;
}
result(number);