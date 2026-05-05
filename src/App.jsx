import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './View/Home'
import './index.css'
import AltierView from './View/Altier/Altier'
import GearView from './View/Gear/Gear'
import Catalog from './View/Gear/CatalogoGear'
import AtelierCatalog from './View/Altier/CatalogoAltier'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/altier" element={<AltierView />} />
        <Route path="/gear" element={<GearView />} />
        <Route path="/gear/catalog" element={<Catalog />} />
        <Route path="/altier/catalogo" element={<AtelierCatalog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App