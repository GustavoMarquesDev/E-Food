import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PerfilContainer from './containers/Perfil'
// import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<PerfilContainer />} />
  </Routes>
)

export default Rotas
