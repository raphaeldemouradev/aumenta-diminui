var mais = document.getElementById('mais')
mais.addEventListener('click', addmais)

var menos = document.getElementById('menos')
menos.addEventListener('click', addmenos)

var conta = 0

function addmais() {
    res.innerHTML = conta++
}

function addmenos() {
    res.innerHTML = conta--
}