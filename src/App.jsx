import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './View/Home'
import './index.css'
import AltierView from './View/Altier'
import GearView from './View/Gear'
import Catalog from './Component/Gear/CatalogoGear'
import AtelierCatalog from './Component/Altier/CatalogoAltier'
import CustomizerAtelier from './Component/Altier/CustomAltier'
import CustomGear from './Component/Gear/CustomGear'
import Login from './Component/Home/Login'
import AboutSection from './Component/Home/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<AboutSection />} />
        <Route path="/atelier" element={<AltierView />} />
        <Route path="/gear" element={<GearView />} />
        <Route path="/gear/catalog" element={<Catalog />} />
        <Route path="/atelier/catalogo" element={<AtelierCatalog />} />
        <Route path="/atelier/customs" element={<CustomizerAtelier />} />
        <Route path="/gear/customs" element={<CustomGear />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App