import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cardapios from './pages/Cardapios'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapios/:id" element={<Cardapios />} />
  </Routes>
)

export default Rotas
