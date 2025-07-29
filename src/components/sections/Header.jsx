import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Placements', href: '#placements' },
    { name: 'Hire Talent', href: '#hire-talent' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img 
              src="/wcc.png" 
              alt="WCC Labs Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">Labs</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+91-9455966988"
              className="btn btn-outline btn-md flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiPhone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-primary btn-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Callback
            </motion.a>
          </div>

          {/* Mobile Menu Button - Hidden */}
          <motion.button
            className="md:hidden p-2 hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-900" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu - Hidden */}
        <motion.div
          className={`md:hidden overflow-hidden hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+91-9455966988" className="btn btn-outline btn-md w-full">
                Call Now
              </a>
              <a href="#contact" className="btn btn-primary btn-md w-full">
                Request Callback
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
