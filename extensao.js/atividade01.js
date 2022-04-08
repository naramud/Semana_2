//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.
 

    let valor = 600 //valor da mercadoria
    let vintePorCentoDeDesconto = (20/100) // porcentagem de desconto
    let desconto = valor * vintePorCentoDeDesconto

    const total = valor -  desconto
    console.log(`O valor do desconto de 20% fica ${total}`)

