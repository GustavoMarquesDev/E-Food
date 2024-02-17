import Tag from '../Tag'
import * as S from './styles'

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
  <S.FoodCard>
    <S.BoxImg>
      <img src={image} alt={name} />
    </S.BoxImg>
    <S.Infos>
      {infos.map((info) => (
        <Tag key={id}>{info}</Tag>
      ))}
    </S.Infos>
    <S.FoodDetails>
      <S.TitleDetails>
        <S.Title>{name}</S.Title>
        <S.DivNota>
          <S.Title>{nota}</S.Title>
          <S.Estrela>
            <img src={estrela} alt="estrela" />
          </S.Estrela>
        </S.DivNota>
      </S.TitleDetails>

      <S.Descricao>{description}</S.Descricao>
      <S.ButtonSaibaMais to={'/perfil'} title="Veja mais sobre nossa delicias">
        Saiba mais
      </S.ButtonSaibaMais>
    </S.FoodDetails>
  </S.FoodCard>
)

export default Card
