function carregar() {
    const msg = document.getElementById("msg");
    const img = document.getElementById("imagem");

    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = "./assets/manha-image.png"
        document.body.style.background = "#e2cd9f"
        msg.innerHTML = "<p>Bom dia!</p>"
        
    } else if (hora >= 12 && hora < 18) {
        // tarde
        img.src = "./assets/tarde-image.png"
        document.body.style.background = "#03708b"
        msg.innerHTML = "<p>Boa tarde!</p>"
    } else {
        // noite
        img.src = "./assets/noite-image.png"
        document.body.style.background = "#3a3a3a"
        msg.innerHTML = "<p>Boa noite!</p>"
    }
}