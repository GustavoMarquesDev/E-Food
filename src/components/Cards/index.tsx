import Tag from '../Tag'
import {
  BoxImg,
  ButtonSaibaMais,
  Descricao,
  DivNota,
  Estrela,
  FoodCard,
  FoodDetails,
  Infos,
  Title,
  TitleDetails
} from './styles'

import estrela from '../../assets/imgs/estrela.png'

type Props = {
  id: number
  image: string
  name: string
  description: string
  infos: string[]
  nota: number
}

const Card = ({ id, image, name, description, infos, nota }: Props) => (
  <FoodCard>
    <BoxImg>
      <img src={image} alt={name} />
    </BoxImg>
    <Infos>
      {infos.map((info) => (
        <Tag key={id}>{info}</Tag>
      ))}
    </Infos>
    <FoodDetails>
      <TitleDetails>
        <Title>{name}</Title>
        <DivNota>
          <Title>{nota}</Title>
          <Estrela>
            <img src={estrela} alt="estrela" />
          </Estrela>
        </DivNota>
      </TitleDetails>

      <Descricao>{description}</Descricao>
      <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
    </FoodDetails>
  </FoodCard>
)

export default Card
