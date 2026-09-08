
// Maneiras de selecionar:

// -- Tag --
const p1 = window.document.getElementsByTagName('p')[0]
p1.style.color = 'blue'

// -- Id --
const d = window.document.getElementById('msg')
d.style.background = "green"
// d.innerText = 'Estou aguardando...'
window.document.getElementById('msg').innerText = 'Estou aguardando...'

const d = window.document.querySelector('div#msg')
d.style.background = 'blue'