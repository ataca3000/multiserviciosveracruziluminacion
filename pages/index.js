import Hero from '../components/Hero'
import Segmento from '../components/Segmento'
import Catalogo from '../components/Catalogo'
import Instalaciones from '../components/Instalaciones'
import Cotiza from '../components/Cotiza'
import QuienesSomos from '../components/QuienesSomos'
import Mapa from '../components/Mapa'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero principal */}
      <Hero />

      {/* Cuatro segmentos principales */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Segmento 
          titulo="LED URBANO" 
          imagen="/img/ledurbano.jpg" 
          link="/led-urbano"
        />
        <Segmento 
          titulo="POSTES COLONIALES" 
          imagen="/img/postes.jpg" 
          link="/postes-coloniales"
        />
        <Segmento 
          titulo="SOLAR INTELIGENTE" 
          imagen="/img/solar.jpg" 
          link="/solar-inteligente"
        />
        <Segmento 
          titulo="INSTALACIONES RECIENTES" 
          imagen="/img/instalaciones.jpg" 
          link="/instalaciones"
        />
      </section>

      {/* Catálogo con tarjetas */}
      <Catalogo />

      {/* Instalaciones tipo periódico */}
      <Instalaciones />

      {/* Cotiza ahora */}
      <Cotiza />

      {/* Quiénes somos */}
      <QuienesSomos />

      {/* Mapa oscuro */}
      <Mapa />

      {/* Footer */}
      <Footer />
    </div>
  )
}
