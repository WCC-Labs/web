import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiLightBulb, 
  HiUsers, 
  HiBadgeCheck, 
  HiTrendingUp, 
  HiSupport,
  HiX
} from 'react-icons/hi'

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      icon: HiAcademicCap,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with 10+ years of experience in leading tech companies.',
      color: 'blue',
      benefits: [
        'Industry veterans with 10+ years experience',
        'Working professionals from top tech companies',
        'Hands-on mentorship and career guidance',
        'Real-world insights and best practices',
        'Personalized learning approach'
      ]
    },
    {
      icon: HiLightBulb,
      title: 'Live Projects',
      description: 'Work on real-world projects that enhance your portfolio and practical skills.',
      color: 'yellow',
      benefits: [
        'Real client projects from industry',
        'Build impressive portfolio pieces',
        'Collaborate in team environments',
        'Experience full development lifecycle',
        'GitHub profile enhancement'
      ]
    },
    {
      icon: HiUsers,
      title: 'Small Batch Size',
      description: 'Maximum 20 students per batch ensuring personalized attention and better learning.',
      color: 'green',
      benefits: [
        'Maximum 20 students per batch',
        'Individual attention from instructors',
        'Faster doubt resolution',
        'Better peer-to-peer learning',
        'Customized learning pace'
      ]
    },
    {
      icon: HiBadgeCheck,
      title: '100% Placement',
      description: 'Guaranteed job placement with our extensive network of 100+ hiring partners.',
      color: 'purple',
      benefits: [
        'Guaranteed job placement assistance',
        '100+ hiring partner companies',
        'Resume building and optimization',
        'Mock interview sessions',
        'Salary negotiation guidance'
      ]
    },
    {
      icon: HiTrendingUp,
      title: 'Latest Curriculum',
      description: 'Updated course content aligned with current industry trends and requirements.',
      color: 'red',
      benefits: [
        'Curriculum updated every 6 months',
        'Latest technology stack coverage',
        'Industry-relevant skill development',
        'Trending frameworks and tools',
        'Future-ready programming concepts'
      ]
    },
    {
      icon: HiSupport,
      title: '24/7 Support',
      description: 'Round-the-clock doubt clearing sessions and career guidance support.',
      color: 'indigo',
      benefits: [
        '24/7 doubt clearing support',
        'Dedicated support team',
        'Career counseling sessions',
        'Technical assistance anytime',
        'Community learning platform'
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            Why Choose <span className="gradient-text">WCC Labs</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience world-class education with our comprehensive learning approach designed 
            to make you industry-ready from day one.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-primary-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-8 h-8 transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Arrow */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <button 
                  onClick={() => setSelectedFeature(feature)}
                  className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
                >
                  Learn More 
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Learning Journey
          </motion.a>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedFeature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      selectedFeature.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                      selectedFeature.color === 'green' ? 'bg-green-100 text-green-600' :
                      selectedFeature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      selectedFeature.color === 'red' ? 'bg-red-100 text-red-600' :
                      'bg-indigo-100 text-indigo-600'
                    }`}>
                      <selectedFeature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <HiX className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedFeature.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            selectedFeature.color === 'blue' ? 'bg-blue-500' :
                            selectedFeature.color === 'yellow' ? 'bg-yellow-500' :
                            selectedFeature.color === 'green' ? 'bg-green-500' :
                            selectedFeature.color === 'purple' ? 'bg-purple-500' :
                            selectedFeature.color === 'red' ? 'bg-red-500' :
                            'bg-indigo-500'
                          }`}></div>
                          <span className="text-gray-700 leading-relaxed">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <motion.a
                      href="#contact"
                      className="btn btn-primary btn-lg w-full flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedFeature(null)}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Features
