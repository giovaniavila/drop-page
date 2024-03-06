const checkboxMensal = document.getElementById('monthlyCheckbox')
const checkboxAnual = document.getElementById('yearlyCheckbox')
const cardsPreco = document.querySelectorAll('.informacoesCard p:nth-child(3)')

checkboxMensal.addEventListener('click', () => {
    cardsPreco.forEach((card, index) => {
        checkboxAnual.checked = false;
        if(index === 0 ){
            card.innerHTML = '<strong> R$ 108/mês </strong>'
        } else if(index === 1) {
            card.innerHTML = '<strong> R$ 118/mês por usuário </strong>'
        } else if(index === 2){
            card.innerHTML = '<strong> R$ 157/mês por usuário </strong>'
        }
    })
})

checkboxAnual.addEventListener('click', () => {
    checkboxMensal.checked = false;
    cardsPreco.forEach((card, index) => {
        if(index === 0){
            card.innerHTML = '<strong> R$ 89/mês </strong>'
        } else if (index === 1){
            card.innerHTML = '<strong> R$ 99/mês por usuário </strong>'
        } else if (index === 2) {
            card.innerHTML = '<strong> R$ 128/mês por usuário'
        }
    })
})
