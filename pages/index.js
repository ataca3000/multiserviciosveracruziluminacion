import { useState } from 'react'
import Hero from '../componets/Hero'
import Segmento from '../componets/Segmento'
import CatalogoLed from '../componets/CatalogoLed'
import CatalogoPostes from '../componets/CatalogoPostes'
import CatalogoSolar from '../componets/CatalogoSolar'
import Instalaciones from '../componets/Instalaciones'
import Cotiza from '../componets/Cotiza'
import QuienesSomos from '../componets/QuienesSomos'
import Mapa from '../componets/Mapa'
import Footer from '../componets/Footer'

export default function Home() {
  const [seccionActiva, setSeccionActiva] = useState(null)

  const handleBack = () => setSeccionActiva(null)

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      
      {/* HERO */}
      {!seccionActiva && <Hero onSelect={setSeccionActiva} />}

      {/* GRID DE SEGMENTOS */}
      {!seccionActiva && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <Segmento 
            titulo="LED URBANO" 
            imagen="/img/ledurbano.jpg" 
            onClick={() => setSeccionActiva('CatalogoLed')}
          />
          <Segmento 
            titulo="POSTES COLONIALES" 
            imagen="/img/postes.jpg" 
            onClick={() => setSeccionActiva('CatalogoPostes')}
          />
          <Segmento 
            titulo="SOLAR INTELIGENTE" 
            imagen="/img/solar.jpg" 
            onClick={() => setSeccionActiva('CatalogoSolar')}
          />
          <Segmento 
            titulo="INSTALACIONES RECIENTES" 
            imagen="/img/instalaciones.jpg" 
            onClick={() => setSeccionActiva('Instalaciones')}
          />
        </section>
      )}

      {/* SECCIONES ACTIVAS */}
      {seccionActiva === 'CatalogoLed' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoLed />
        </div>
      )}

      {seccionActiva === 'CatalogoPostes' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoPostes />
        </div>
      )}

      {seccionActiva === 'CatalogoSolar' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <CatalogoSolar />
        </div>
      )}

      {seccionActiva === 'Instalaciones' && (
        <div className="p-6">
          <button onClick={handleBack} className="bg-orange-600 px-4 py-2 rounded mb-4">
            ← Regresar
          </button>
          <Instalaciones />
        </div>
      )}

      {seccionActiva === 'Cotiza' && (
        <div className="p-6">
