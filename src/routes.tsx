import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PerfilContainer from './containers/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<PerfilContainer />} />
  </Routes>
)

export default Rotas
