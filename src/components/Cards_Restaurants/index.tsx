import Tag from '../Tag'

import estrela from '../../assets/imgs/estrela.png'

import * as S from './styles'

type Props = {
  id: number
  image: string
  name: string
  description: string
  destacado: boolean
  tipo: string
  nota: number
}

const Card = ({
  id,
  image,
  name,
  description,
  destacado,
  tipo,
  nota
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 245) + '...'
    }

    return descricao
  }

  return (
    <S.FoodCard>
      <S.BoxImg>
        <img src={image} alt={name} />
      </S.BoxImg>
      <S.Infos>
        {destacado ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{tipo}</Tag>
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
        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <S.ButtonSaibaMais
          to={`/cardapios/${id}`}
          title="Veja mais sobre nossa delicias"
        >
          Saiba mais
        </S.ButtonSaibaMais>
      </S.FoodDetails>
    </S.FoodCard>
  )
}

export default Card
