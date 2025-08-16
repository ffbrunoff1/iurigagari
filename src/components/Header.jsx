import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Eye } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-full ${
              isScrolled 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600' 
                : 'bg-white/20 backdrop-blur-lg'
            }`}>
              <Eye className={`w-8 h-8 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <span className={`text-2xl font-bold ${
              isScrolled 
                ? 'text-primary-800' 
                : 'text-white'
            }`}>
              Iuri Gagari
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Especialidades', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-secondary-600' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block font-semibold py-2 px-6 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
                : 'bg-white/20 backdrop-blur-lg text-white hover:bg-white/30'
            }`}
          >
            Falar Comigo
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg rounded-b-lg shadow-lg"
          >
            <nav className="flex flex-col py-4">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Sobre', id: 'about' },
                { name: 'Especialidades', id: 'services' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-6 py-3 text-primary-700 hover:bg-primary-50 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-6 mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-full font-semibold"
              >
                Falar Comigo
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}