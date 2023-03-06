const number = parseInt(prompt("Digite um número"));
const porcent = parseInt(prompt("Digite a porcentagem que queira saber:"));

const object = {
    number: number,
    porcent: porcent / 100
}

function result (object) {
    result = object.number * object.porcent;
    return document.getElementById('info').innerHTML = `O resultado foi: ${result}`;
}
result(object);