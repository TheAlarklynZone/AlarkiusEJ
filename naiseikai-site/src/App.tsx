import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CitySkyline from './components/CitySkyline'
import Home from './pages/Home'
import Universe from './pages/Universe'
import Lore from './pages/Lore'
import Titles from './pages/Titles'
import Songbook from './pages/Songbook'
import Author from './pages/Author'
import TQCTN from './pages/TQCTN'
import Nevertheless from './pages/Nevertheless'
import Dullahan from './pages/Dullahan'
import LonelyAndroid from './pages/LonelyAndroid'
import GyakuTen from './pages/GyakuTen'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/universe"      element={<Universe />} />
            <Route path="/lore"          element={<Lore />} />
            <Route path="/titles"        element={<Titles />} />
            <Route path="/titles/KarasuToNinja-TQCTN" element={<TQCTN />} />
            <Route path="/titles/SorenaoAne-Nevertheless" element={<Nevertheless />} />
            <Route path="/titles/DuraDekiruKoi-Dullahan" element={<Dullahan />} />
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid" element={<LonelyAndroid />} />
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation" element={<GyakuTen />} />
            <Route path="/songbook"      element={<Songbook />} />
            <Route path="/author"        element={<Author />} />
          </Routes>
        </main>
        <Footer />
        {/* Fixed city skyline — sits above bg, below content */}
        <CitySkyline />
      </div>
    </BrowserRouter>
  )
}
