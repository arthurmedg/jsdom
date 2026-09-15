function verificar() {
    const num = document.getElementById("num-input").value;
    const resultado = document.getElementById("resultado");

    if (num % 2 == 0) {
        resultado.innerHTML = "<p>Número par</p>"
    } else if (num % 2 != 0) {
        resultado.innerHTML = "<p>Número ímpar</p>"
    }else {
        resultado.innerHTML = "<p>Número inválido</p>"
    }
}