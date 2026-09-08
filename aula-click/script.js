// const a = window.document.getElementById('area')


// function clickar() {
//     a.innerText = 'Clicou!'
//     a.style.background = 'red'
// }

// function entrar() {
//     a.innerText = 'Entrou!'
// }

// function sair() {
//     a.innerText = 'Saiu!'
//     a.style.background = 'green'
// }

const a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseleave', sair)


function clicar() {
    a.innerText = 'Clicou!'
    a.style.background =     'red'
    
}

function entrar() {
    a.innerText = 'Entrou!'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}