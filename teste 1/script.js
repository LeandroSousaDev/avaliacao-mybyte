const nome = document.querySelector(".nome")
const email = document.querySelector(".email")
const resposta = document.querySelector(".resposta")
const botao = document.querySelector(".botao")


botao.addEventListener("click", () => {
    if (nome.value === "" || email.value === "") {
        resposta.innerHTML = "preencha os campos!"
    } else {
        resposta.innerHTML = "cadastrado"
    }
})