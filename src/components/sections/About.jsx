import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiTrendingUp, 
  HiUsers, 
  HiBadgeCheck,
  HiLightBulb,
  HiSupport,
  HiX
} from 'react-icons/hi'

const About = () => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false)
  const [missionIndex, setMissionIndex] = useState(0)
  const [valuesIndex, setValuesIndex] = useState(0)

  const missionContent = [
    {
      icon: HiLightBulb,
      title: 'Democratize Education',
      description: 'To democratize quality tech education and make it accessible to everyone, regardless of their background.',
      color: 'blue'
    },
    {
      icon: HiSupport,
      title: 'Mentor & Guide',
      description: 'Our mission extends beyond just training - we mentor, guide, and support our students throughout their learning journey.',
      color: 'purple'
    },
    {
      icon: HiBadgeCheck,
      title: '100% Placement',
      description: 'We strive to maintain the highest standards of education while ensuring 100% placement assistance for all our graduates.',
      color: 'green'
    }
  ]

  const values = [
    {
      icon: HiAcademicCap,
      title: 'Excellence in Education',
      description: 'We deliver world-class training programs designed by industry experts.',
      color: 'blue'
    },
    {
      icon: HiTrendingUp,
      title: 'Career Growth',
      description: 'Focused on transforming careers with practical, job-ready skills.',
      color: 'green'
    },
    {
      icon: HiUsers,
      title: 'Community Driven',
      description: 'Building a strong community of tech professionals and learners.',
      color: 'purple'
    },
    {
      icon: HiBadgeCheck,
      title: 'Industry Recognition',
      description: 'Partnerships with leading companies for guaranteed placements.',
      color: 'orange'
    }
  ]

  // Mission auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setMissionIndex((prevIndex) => prevIndex + 1);
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (missionIndex >= missionContent.length) {
      const timer = setTimeout(() => {
        setMissionIndex(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [missionIndex, missionContent.length])

  // Values auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setValuesIndex((prevIndex) => prevIndex + 1);
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (valuesIndex >= values.length) {
      const timer = setTimeout(() => {
        setValuesIndex(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [valuesIndex, values.length])

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About <span className="gradient-text">WCC Labs</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering the next generation of tech professionals with cutting-edge skills and guaranteed career opportunities
          </motion.p>
        </motion.div>

        {/* Mobile Simple View */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">About WCC Labs</h3>
            
            {/* Show key stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-xs text-gray-600">Students Trained</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-xs text-gray-600">Placement Rate</div>
              </div>
            </div>

            <div className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
              We are a premier tech training institute dedicated to shaping the future of technology professionals through comprehensive courses and industry-focused training.
            </div>

            {/* View More Button */}
            <motion.button
              onClick={() => setIsMobileExpanded(true)}
              className="w-full bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-3 flex items-center justify-center space-x-2 text-primary-700 font-medium text-sm border border-primary-100 hover:from-primary-100 hover:to-accent-100 transition-colors duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>

          {/* Full About Modal */}
          <AnimatePresence>
            {isMobileExpanded && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileExpanded(false)}
              >
                <motion.div
                  className="bg-white rounded-t-2xl p-6 w-full max-h-[85vh] overflow-y-auto"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">About WCC Labs</h3>
                    <button
                      onClick={() => setIsMobileExpanded(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <HiX className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Our Story */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Our Story</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Founded with a vision to bridge the gap between academic learning and industry requirements, 
                      WCC Labs has been at the forefront of technical education. We understand that the tech industry 
                      evolves rapidly, and so do our curricula.
                    </p>
                  </div>

                  {/* Our Mission */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Our Mission</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our mission extends beyond just training - we mentor, guide, and support our students throughout 
                      their learning journey and career transformation.
                    </p>
                  </div>

                  {/* Our Values */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Our Values</h4>
                    <div className="space-y-3">
                      {[
                        { icon: HiAcademicCap, title: 'Excellence', desc: 'We strive for excellence in everything we do' },
                        { icon: HiUsers, title: 'Community', desc: 'Building a supportive learning community' },
                        { icon: HiLightBulb, title: 'Innovation', desc: 'Embracing new technologies and methods' }
                      ].map((value, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                            <value.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 text-sm">{value.title}</h5>
                            <p className="text-xs text-gray-600">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { number: '1000+', label: 'Students', color: 'blue' },
                      { number: '95%', label: 'Placement', color: 'green' },
                      { number: '50+', label: 'Companies', color: 'purple' },
                      { number: '15+', label: 'Courses', color: 'orange' }
                    ].map((stat, index) => (
                      <div key={index} className={`text-center p-3 bg-${stat.color}-50 rounded-lg`}>
                        <div className={`text-lg font-bold text-${stat.color}-600`}>{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA in Modal */}
                  <div className="pt-4 border-t border-gray-100">
                    <motion.a
                      href="#contact"
                      className="btn btn-primary btn-sm w-full flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileExpanded(false)}
                    >
                      Get In Touch
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Our Story & Mission - Desktop Grid */}
        <div className="hidden md:grid lg:grid-cols-2 gap-16 mb-12 md:mb-20">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <HiLightBulb className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between academic learning and industry requirements, 
                WCC Labs has emerged as India's leading technology training institute.
              </p>
              <p>
                We believe in practical, hands-on learning that prepares students for real-world challenges. 
                Our curriculum is constantly updated to reflect the latest industry trends and technologies.
              </p>
              <p>
                With a team of experienced professionals and strong industry partnerships, we've successfully 
                transformed countless careers and continue to be the preferred choice for aspiring tech professionals.
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mr-4">
                <HiSupport className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To democratize quality tech education and make it accessible to everyone, regardless of their background. 
                We are committed to creating a skilled workforce that drives India's digital transformation.
              </p>
              <p>
                Our mission extends beyond just training - we mentor, guide, and support our students throughout 
                their learning journey and career advancement.
              </p>
              <p>
                We strive to maintain the highest standards of education while ensuring 100% placement assistance 
                for all our graduates.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Values - Desktop Only */}
        <motion.div
          className="mb-12 md:mb-20 hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional educational experiences
            </p>
          </div>

          {/* Desktop Values Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${getColorClasses(value.color)}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
