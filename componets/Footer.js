export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 Multiservicios e Iluminación Veracruz</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" className="hover:text-orange-500">Facebook</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-orange-500">Instagram</a>
          <a href="mailto:contacto@empresa.com" className="hover:text-orange-500">Email</a>
        </div>
      </div>
    </footer>
  )
}
