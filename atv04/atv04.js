const number = parseInt(prompt("Digite um número"))

function result (number) {
    if(number % 2 == 0) {
        document.getElementById('info').innerHTML = `Verdadeiro`;
    } else if(number % 2 == 1) {
        document.getElementById('info').innerHTML = `Falso`; 
    } else {
        document.getElementById('info').innerHTML = `Resposta inválida`;
    }
}
result(number);
