import { FadeLoader } from 'react-spinners'

import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <FadeLoader color={colors.darkPink} />
  </Container>
)

export default Loader
