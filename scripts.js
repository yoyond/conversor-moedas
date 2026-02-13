// cotação de moedas (price)
const USD = 5.19
const EUR = 6.18
const GBP = 7.11



const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// input recebe apenas numeros 
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g   // verifica letras globais
    amount.value = amount.value.replace(hasCharactersRegex, "") //substitui as letras por nada
})

// obtem moeda selecionada 
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value){
        case "USD": 
        convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP": 
        convertCurrency(amount.value, GBP, "£")
            break
    }
}

// converte a moeda 
function convertCurrency(amount, price, symbol){
  try {
    //na const description edita o texto apresentando simbolo e preço que foi definido anteriormente
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calculo + formatação em reais
    let total = amount * price 

    if (isNaN(total)) {
        return alert("Por favor, digite o valor corretamente para converter.")
    }

    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`



    //exibe o footer com o resultado
    footer.classList.add("show-result")
  } 
  catch (error) {
    //remove o footer 
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possivel converter agora! Tente novamente mais tarde.")
  }
}

//formata a moeda em reais 
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",

    })
}

//calcular o total dinamicamente 

