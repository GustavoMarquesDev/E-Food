import { FadeLoader } from 'react-spinners'

import { Container } from './styles'
import { cores } from '../styles'

const Loader = () => (
  <Container>
    <FadeLoader color={cores.rosaEscuro} />
  </Container>
)

export default Loader
