export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.preco) {
      return (acumulador += valorAtual.preco)
    }
    return 0
  }, 0)
}

export const capitalize = (termo: string) => {
  return termo.charAt(0).toUpperCase() + termo.slice(1)
}

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
