function loginResult() {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("userpassword-input").value;
    const resultado = document.getElementById("resultado");

    if (username == "medina" && password == "123top") {
        resultado.innerHTML = "<p>Bem-Vindo, Medina</p>"
    } else {
        resultado.innerHTML = "<p>Nome de usuário ou senha inválido</p>"
    }

}