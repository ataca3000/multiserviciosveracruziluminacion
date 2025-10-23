import { useState } from 'react'
import Hero from '../componentes/Hero.js'
import Segmento from '../components/Segmento.js'
import CatalogoLed from '../components/CatalogoLed.js'
import CatalogoPostes from '../components/CatalogoPostes.js'
import CatalogoSolar from '../components/CatalogoSolar.js'
import Instalaciones from '../components/Instalaciones.js'
import Cotiza from '../components/Cotiza.js'
import QuienesSomos from '../componentes/QuienesSomos.js'
import Mapa from '../components/Mapa.js'
import Footer from '../components/Footer.js'

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)

  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero principal */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* Segmentos principales */}
      {!seccionActiva && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Segmento 
            titulo="LED URBANO" 
            imagen="/img/ledurbano.jpg" 
            onClick={() => setSeccionActiva('led')}
          />
          <Segmento 
            titulo="POSTES COLONIALES" 
            imagen="/img/postes.jpg" 
            onClick={() => setSeccionActiva('postes')}
          />
          <Segmento 
            titulo="SOLAR INTELIGENTE" 
            imagen="/img/solar.jpg" 
            onClick={() => setSeccionActiva('solar')}
          />
          <Segmento 
            titulo="INSTALACIONES RECIENTES" 
            imagen="/img/instalaciones.jpg" 
            onClick={() => setSeccionActiva('instalaciones')}
          />
        </section>
      )}

      {/* Render condicional */}
      {seccionActiva === 'led' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoLed />
        </div>
      )}

      {seccionActiva === 'postes' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoPostes />
        </div>
      )}

      {seccionActiva === 'solar' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoSolar />
        </div>
      )}

      {seccionActiva === 'instalaciones' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Instalaciones />
        </div>
      )}

      {seccionActiva === 'cotiza' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Cotiza />
        </div>
      )}

      {seccionActiva === 'conocenos' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <QuienesSomos />
        </div>
      )}

      {seccionActiva === 'mapa' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Mapa />
        </div>
      )}

      {/* Footer siempre visible */}
      <Footer />
    </div>
  )
      }
