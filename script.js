var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

/* -------- Trabalhar o Orçamento -------- */

/* Verifica se houve evento change no campo */
document.querySelector("#qtde").addEventListener("change", atualizarPreco) 
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas` 
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100
    if (temJS) preco *= 1.1  /* calcula 10% sobre o valor do preço */
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML =`R$ ${preco.toFixed(2)}` /* Fixa em 2 casas decimais */ 
}
