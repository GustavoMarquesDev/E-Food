import Card from '../../components/Cards_Perfil'
import Header_Perfil from '../../components/Header_Perfil'
import * as S from './styles'
import pizza from '../../assets/imgs/Pizza.png'
import Modal from '../../components/Modal'

const comidas = [
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

export const PerfilContainer = () => {
  return (
    <>
      <Header_Perfil />
      <div className="container">
        <S.MenuSection>
          {comidas.map((comida) => (
            <Card
              key={comida.id}
              description={comida.description}
              name={comida.name}
              image={comida.image}
              id={comida.id}
            />
          ))}
        </S.MenuSection>
        <Modal />
      </div>
    </>
  )
}

export default PerfilContainer
