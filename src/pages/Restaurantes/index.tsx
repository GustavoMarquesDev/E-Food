import Hero from '../../components/Header_Restaurantes'
import MainContainer from '../../components/Restaurantes'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
  destacado: boolean
  tipo: string
}

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <MainContainer />
      </div>
    </>
  )
}

export default Home
