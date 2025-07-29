import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiPhone, 
  HiMail, 
  HiChat,
  HiCheckCircle,
  HiExclamationCircle,
  HiX 
} from 'react-icons/hi'
import { submitContactForm, validateField } from '../../utils/emailService'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  // Real-time form validation
  useEffect(() => {
    const requiredFields = ['name', 'email', 'phone', 'message']
    const errors = {}
    let valid = true

    requiredFields.forEach(field => {
      if (touchedFields[field]) {
        const error = validateField(field, formData[field])
        if (error) {
          errors[field] = error
          valid = false
        }
      } else if (!formData[field].trim()) {
        valid = false
      }
    })

    setFieldErrors(errors)
    setIsFormValid(valid && requiredFields.every(field => formData[field].trim()))
  }, [formData, touchedFields])

  const courses = [
    'MERN Stack + Gen AI',
    'Data Science & ML',
    'Java Full Stack + Gen AI',
    'Digital Marketing',
    'Cybersecurity Specialist',
    'Cloud Computing (AWS)',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouchedFields({
      ...touchedFields,
      [name]: true
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched for validation display
    const allFields = ['name', 'email', 'phone', 'message']
    const newTouchedFields = {}
    allFields.forEach(field => newTouchedFields[field] = true)
    setTouchedFields(newTouchedFields)
    
    if (!isFormValid) {
      setErrorMessage('Please fix all form errors before submitting')
      setTimeout(() => setErrorMessage(''), 4000)
      return
    }
    
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        console.log(`✅ Email sent successfully via ${result.method}`)
        
        // Reset form after 6 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            message: ''
          })
          setTouchedFields({})
          setFieldErrors({})
        }, 6000)
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setErrorMessage(error.message || 'Failed to send message. Please try again.')
      
      // Clear error after 6 seconds
      setTimeout(() => {
        setErrorMessage('')
      }, 6000)
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
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
            Ready to <span className="gradient-text">Start Learning</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get in touch with our expert counselors and take the first step towards your dream career
          </motion.p>
          
          {/* Quick Contact Banner - Inspired by clean approach */}
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="tel:+91-9455966988" 
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group"
            >
              <HiPhone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              <span className="font-medium">+91-9455966988</span>
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="mailto:info@wcclabs.com" 
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group"
            >
              <HiMail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              <span className="font-medium">info@wcclabs.com</span>
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="https://wa.me/9455966988" 
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 group"
            >
              <HiChat className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form Layout */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Form - Always Visible */}
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <HiChat className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Get Free Counseling</h3>
                <p className="text-gray-600 text-sm md:text-base">We'll help you choose the right course</p>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                          fieldErrors.name && touchedFields.name
                            ? 'border-red-300 focus:ring-red-500 bg-red-50'
                            : formData.name && !fieldErrors.name
                            ? 'border-green-300 focus:ring-green-500 bg-green-50'
                            : 'border-gray-300 focus:ring-primary-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formData.name && !fieldErrors.name && (
                        <HiCheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <AnimatePresence>
                      {fieldErrors.name && touchedFields.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                          fieldErrors.email && touchedFields.email
                            ? 'border-red-300 focus:ring-red-500 bg-red-50'
                            : formData.email && !fieldErrors.email
                            ? 'border-green-300 focus:ring-green-500 bg-green-50'
                            : 'border-gray-300 focus:ring-primary-500'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {formData.email && !fieldErrors.email && (
                        <HiCheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <AnimatePresence>
                      {fieldErrors.email && touchedFields.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                          fieldErrors.phone && touchedFields.phone
                            ? 'border-red-300 focus:ring-red-500 bg-red-50'
                            : formData.phone && !fieldErrors.phone
                            ? 'border-green-300 focus:ring-green-500 bg-green-50'
                            : 'border-gray-300 focus:ring-primary-500'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {formData.phone && !fieldErrors.phone && (
                        <HiCheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <AnimatePresence>
                      {fieldErrors.phone && touchedFields.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Course
                    </label>
                    <div className="relative">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Select a course (optional)</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${
                        fieldErrors.message && touchedFields.message
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : formData.message && !fieldErrors.message
                          ? 'border-green-300 focus:ring-green-500 bg-green-50'
                          : 'border-gray-300 focus:ring-primary-500'
                      }`}
                      placeholder="Tell us about your career goals, background, and any specific questions you have about our courses..."
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {formData.message.length}/1000
                    </div>
                  </div>
                  <AnimatePresence>
                    {fieldErrors.message && touchedFields.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1 text-sm text-red-600 flex items-center"
                      >
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {fieldErrors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <div className="flex items-center">
                        <HiExclamationCircle className="w-5 h-5 text-red-500 mr-2" />
                        <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isLoading || !isFormValid}
                  className={`w-full btn btn-primary btn-lg relative overflow-hidden ${
                    isLoading || !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={!isLoading && isFormValid ? { scale: 1.02 } : {}}
                  whileTap={!isLoading && isFormValid ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing your request...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <HiChat className="w-5 h-5" />
                      <span>Get Free Counseling</span>
                    </div>
                  )}
                  
                  {/* Submit button progress indicator */}
                  {isLoading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <HiCheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    🎉 Thank You!
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    Your inquiry has been successfully submitted!
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our counselor will review your details and contact you within 24 hours to discuss your career goals.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3">📧 Your email is being prepared</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A professional email with your inquiry details is now ready in your email client. 
                    Please review and send it to complete the process.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center text-green-600">
                      <HiCheckCircle className="w-4 h-4 mr-1" />
                      Form validated
                    </div>
                    <div className="flex items-center text-green-600">
                      <HiCheckCircle className="w-4 h-4 mr-1" />
                      Email prepared
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
