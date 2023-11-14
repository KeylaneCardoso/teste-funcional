//Referência aos elementos HTML
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const endereco = document.getElementById("endereco")
const numero = document.getElementById("numero")
const ano_rodape = document.getElementById("rodape-ano")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarTxt(nome)
    validarTxt(sobrenome)
    validarTxt(endereco)
    validarTxt(numero)
})

function validarTxt(txt) {
    let nomeValor = txt.value

    if (nomeValor === "" || nomeValor == null) {
        informarCampoObrigatorio(txt)
    } else {
        txt.className = "form-control"
    }
}


function informarCampoObrigatorio(elemento) {
    elemento.innerHTML = "Campo obrigatório"
    elemento.className = "form-control is-invalid"
}

function informarCampoInvalido(elemento) {
    elemento.innerHTML = "Formato inválido"
    elemento.className = "form-control is-invalid"
}


function atualizaAnoAutimaticamente() {
    let d = new Date();
    let ano = d.getFullYear()
    ano_rodape.innerHTML = ano
}


atualizaAnoAutimaticamente()