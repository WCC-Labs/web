import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Singh',
      role: 'Software Engineer',
      company: 'Google',
      image: '👩‍💻',
      rating: 5,
      text: 'WCC Labs transformed my career completely. The MERN Stack course was comprehensive and the instructors were amazing. I landed my dream job at Google within 2 months of graduation!',
      course: 'MERN Stack Development',
      package: '₹22 LPA'
    },
    {
      id: 2,
      name: 'Amit Kumar',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: '👨‍💼',
      rating: 5,
      text: 'The Data Science course exceeded my expectations. Real-world projects and industry mentorship made all the difference. The placement support was excellent.',
      course: 'Data Science & ML',
      package: '₹18 LPA'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Full Stack Developer',
      company: 'Amazon',
      image: '👩‍🎓',
      rating: 5,
      text: 'Best decision I made was joining TechEdu. The curriculum is up-to-date, instructors are supportive, and the placement assistance is top-notch. Highly recommended!',
      course: 'Java Full Stack',
      package: '₹16 LPA'
    },
    {
      id: 4,
      name: 'Rohit Sharma',
      role: 'Cloud Engineer',
      company: 'Meta',
      image: '👨‍💻',
      rating: 5,
      text: 'The Cloud Computing course prepared me well for the industry. Hands-on labs and real AWS projects gave me the confidence to crack interviews at top companies.',
      course: 'Cloud Computing (AWS)',
      package: '₹20 LPA'
    },
    {
      id: 5,
      name: 'Anita Verma',
      role: 'Digital Marketing Manager',
      company: 'Flipkart',
      image: '👩‍🚀',
      rating: 5,
      text: 'The Digital Marketing course was comprehensive and practical. I learned everything from SEO to paid advertising. The job placement was quick and efficient.',
      course: 'Digital Marketing',
      package: '₹12 LPA'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white">
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
            What Our <span className="gradient-text">Students Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hear from our successful graduates who have transformed their careers with WCC Labs
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Student Info */}
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {currentTestimonial.image}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {currentTestimonial.company}
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {currentTestimonial.package}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <HiStar className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic text-center md:text-left">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Course Badge */}
                  <div className="text-center md:text-left">
                    <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                      Course: {currentTestimonial.course}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            More Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-xl mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{testimonial.course}</span>
                  <span className="text-sm font-semibold text-green-600">{testimonial.package}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
