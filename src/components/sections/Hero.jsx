import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlay, HiStar, HiUsers, HiBriefcase, HiOfficeBuilding } from 'react-icons/hi'
import LottieAnimation from '../ui/LottieAnimation'

const Hero = () => {
  const [isMobileStatsExpanded, setIsMobileStatsExpanded] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    students: 80, // Start from 80
    placement: 0,
    partners: 0
  })

  // Counter animation effect
  useEffect(() => {
    const duration = 4000 // 4 seconds for slower animation
    const steps = 80 // More steps for smoother animation
    const interval = duration / steps

    const targets = {
      students: 80 + Math.floor(Math.random() * 21), // Random between 80-100
      placement: 95, // Constant at 95%
      partners: 100  // Constant at 100
    }

    let step = 0
    const animationTimer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOutQuint = 1 - Math.pow(1 - progress, 5) // Slower easing function

      setAnimatedValues({
        students: 80 + Math.floor((targets.students - 80) * easeOutQuint), // Start from 80, animate to target
        placement: Math.floor(targets.placement * easeOutQuint),
        partners: Math.floor(targets.partners * easeOutQuint)
      })

      if (step >= steps) {
        clearInterval(animationTimer)
        setAnimatedValues({
          students: targets.students,
          placement: targets.placement,
          partners: targets.partners
        })

        // Start continuous increment after initial animation
        const incrementTimer = setInterval(() => {
          setAnimatedValues(prev => ({
            ...prev,
            students: prev.students + 1
          }))
        }, 60000) // 60000ms = 1 minute

        // Cleanup function will handle this timer
        return () => clearInterval(incrementTimer)
      }
    }, interval)

    return () => {
      clearInterval(animationTimer)
    }
  }, [])

  // Auto-collapse after 30 seconds
  useEffect(() => {
    let timer
    if (isMobileStatsExpanded) {
      timer = setTimeout(() => {
        setIsMobileStatsExpanded(false)
      }, 20000)
    }
    return () => clearTimeout(timer)
  }, [isMobileStatsExpanded])

  const stats = [
    { icon: HiUsers, value: `${animatedValues.students}+`, label: 'Students Trained', color: 'text-blue-600' },
    { icon: HiStar, value: `${animatedValues.placement}%`, label: 'Placement Rate', color: 'text-green-600' },
    { icon: HiBriefcase, value: `${animatedValues.partners}+`, label: 'Hiring Partners', color: 'text-purple-600' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-40 md:pt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Code Your Career with{' '}
              <span className="gradient-text">Industry-Ready Skills</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join India's leading technology training institute. Learn from industry experts, 
              work on live projects, and get placed in top companies with our 100% placement assistance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#courses"
                className="btn btn-primary btn-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-outline btn-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiPlay className="w-5 h-5" />
                <span>Request a Demo Session</span>
              </motion.a>
            </motion.div>

            {/* Company CTA */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="#hire-talent"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm group transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <HiOfficeBuilding className="w-4 h-4" />
                <span>Looking to hire talent?</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="group-hover:text-primary-700"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>            {/* Stats - Mobile Optimized */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Mobile Collapsible Stats */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMobileStatsExpanded(!isMobileStatsExpanded)}
                  className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between shadow-lg border border-white/20"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <HiStar className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">Our Success</h4>
                      <p className="text-gray-600 text-sm">
                        {isMobileStatsExpanded ? 'Tap to hide stats' : 'Tap to view achievements'}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isMobileStatsExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isMobileStatsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 grid grid-cols-3 gap-3 overflow-hidden"
                    >
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-md border border-white/20"
                        >
                          <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                          <h5 className="text-lg font-bold text-gray-900">
                            {stat.value}
                          </h5>
                          <p className="text-gray-600 text-xs">{stat.label}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Stats Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.2 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Animation Container */}
              <motion.div
                className="w-full max-w-lg mx-auto"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Placeholder for Lottie Animation */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                      <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-xl">⭐</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
