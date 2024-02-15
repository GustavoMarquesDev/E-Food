import Card from '../../components/Cards_Perfil'
import Header_Perfil from '../../components/Header_Perfil'
import { MenuSection } from './styles'
import pizza from '../../assets/imgs/Pizza.png'

const comidas = [
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

export const PerfilContainer = () => (
  <>
    <Header_Perfil />
    <div className="container">
      <MenuSection>
        {comidas.map((comida) => (
          <Card
            key={comida.id}
            description={comida.description}
            name={comida.name}
            image={comida.image}
            id={comida.id}
          />
        ))}
      </MenuSection>
    </div>
  </>
)

export default PerfilContainer
