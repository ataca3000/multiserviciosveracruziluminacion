import { useState } from 'react'
import Hero from '../components/Hero'
import Segmento from '../components/Segmento'
import Catalogo from '../components/Catalogo'
import Instalaciones from '../components/Instalaciones'
import Cotiza from '../components/Cotiza'
import QuienesSomos from '../components/QuienesSomos'
import Mapa from '../components/Mapa'
import Footer from '../components/Footer'

export default function Home() {
  // Estado para controlar qué sección está activa
  const [seccionActiva, setSeccionActiva] = useState(null)

  // Función para volver al inicio
  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero principal */}
      <Hero />

      {/* Si no hay sección activa, mostramos los 4 segmentos */}
      {!seccionActiva && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Segmento 
            titulo="LED URBANO" 
            imagen="/img/ledurbano.jpg" 
            onClick={() => setSeccionActiva('catalogo')}
          />
          <Segmento 
            titulo="POSTES COLONIALES" 
            imagen="/img/postes.jpg" 
            onClick={() => setSeccionActiva('catalogo')}
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

      {/* Render condicional según la sección activa */}
      {seccionActiva === 'catalogo' && (
        <div className="p-6">
          <button 
            onClick={handleBack} 
            className="bg-orange-600 px-4 py-2 rounded mb-4"
          >
            ← Regresar
          </button>
          <Catalogo />
        </div>
      )}

      {seccionActiva === 'instalaciones' && (
        <div className="p-6">
          <button 
            onClick={handleBack} 
            className="bg-orange-600 px-4 py-2 rounded mb-4"
          >
            ← Regresar
          </button>
          <Instalaciones />
        </div>
      )}

      {seccionActiva === 'solar' && (
        <div className="p-6">
          <button 
            onClick={handleBack} 
            className="bg-orange-600 px-4 py-2 rounded mb-4"
          >
            ← Regresar
          </button>
          <Cotiza />
        </div>
      )}

      {/* Secciones fijas que siempre estarán al final */}
      <QuienesSomos />
      <Mapa />
      <Footer />
    </div>
  )
}
