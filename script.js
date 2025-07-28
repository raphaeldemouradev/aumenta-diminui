var mais = document.getElementById('mais')
mais.addEventListener('click', addmais)

var menos = document.getElementById('menos')
menos.addEventListener('click', addmenos)

var rezero = document.getElementById('rezero')
rezero.addEventListener('click', reiniciar)

var conta = 0

function addmais() {
    conta++
    res.innerHTML = conta

}

function addmenos() {
    conta--
    res.innerHTML = conta
}

function reiniciar() {
    conta = 0
    res.innerHTML = 0
}