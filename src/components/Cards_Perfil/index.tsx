import { BoxImg, BtnAdicionar, Descricao, FoodCard, Title } from './styles'

type Props = {
  id: number
  image: string
  name: string
  description: string
}

const CardPerfil = ({ id, image, name, description }: Props) => {
  return (
    <>
      <FoodCard>
        <BoxImg>
          <img src={image} alt={name} />
        </BoxImg>
        <Title>{name}</Title>
        <Descricao>{description}</Descricao>
        <BtnAdicionar>Adicionar ao carrinho</BtnAdicionar>
      </FoodCard>
    </>
  )
}

export default CardPerfil
