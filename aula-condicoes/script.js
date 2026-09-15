function calcular() {
    const paisOrigem = document.getElementById("txt-input").value;
    const resultado = document.getElementById("resultado")

    if (paisOrigem == "brasileiro" || paisOrigem == "Brasileiro") {
        resultado.innerHTML = "<p>Você é brasileiro</p>";
    } else {
        resultado.innerHTML = "<P>Você é estrangeiro</P>";
    }

}
