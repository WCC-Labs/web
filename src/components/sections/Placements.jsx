import React from 'react'
import { motion } from 'framer-motion'

const Placements = () => {
  const stats = [
    { number: '95%', label: 'Placement Rate', color: 'blue' },
    { number: '₹12L', label: 'Highest Package', color: 'green' },
    { number: '₹6.5L', label: 'Average Package', color: 'purple' },
    { number: '500+', label: 'Hiring Partners', color: 'orange' }
  ]

  return (
    <section id="placements" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            Our <span className="gradient-text">Placement Success</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join thousands of successful graduates who have transformed their careers with our proven placement program
          </motion.p>
        </motion.div>

        {/* Placement Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className={`text-3xl md:text-4xl font-bold mb-2 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Teaser */}
        <motion.div
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Join our proven placement program and get personalized career guidance, 
                interview preparation, and direct connections with top employers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Resume building and portfolio review
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Mock interviews with industry experts
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Direct referrals to hiring partners
                </div>
              </div>
              <motion.a
                href="#contact"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Placement Assistance
              </motion.a>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Latest Placement</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Student:</span>
                    <span className="font-semibold">Naveen Cenrayan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Company:</span>
                    <span className="font-semibold">Paytech Neo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="font-semibold">₹10 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Course:</span>
                    <span className="font-semibold">FULL Stack</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
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
                <span className="text-xl">🎉</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Placements
