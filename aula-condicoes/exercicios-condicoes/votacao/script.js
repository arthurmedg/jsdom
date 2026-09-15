function calcular() {
    const idade = document.getElementById("input-idade").value;
    const resultado = document.getElementById("resultado")

    if (idade >= 18) {
        resultado.innerHTML = "<p>Pode votar</p>"
    } else if (idade < 18 && idade > -1) {
        resultado.innerHTML = "<p>Ainda não pode votar</p>"
    } else {
        resultado.innerHTML = "<p>Valor inválido</p>"
    }


}