declare type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurante = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
  destacado: boolean
  tipo: string
}

declare type Restaurant = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: boolean
  tipo: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}
