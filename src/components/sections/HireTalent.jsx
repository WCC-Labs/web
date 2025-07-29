import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiOfficeBuilding, 
  HiUserGroup, 
  HiAcademicCap,
  HiCheckCircle,
  HiStar,
  HiClock,
  HiPhone,
  HiMail,
  HiChat,
  HiExclamationCircle
} from 'react-icons/hi'
import { submitContactForm, validateField } from '../../utils/emailService'

const HireTalent = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    jobTitle: '',
    skillsRequired: '',
    experience: '',
    location: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  // Real-time form validation
  React.useEffect(() => {
    const requiredFields = ['companyName', 'contactPerson', 'email', 'phone', 'jobTitle', 'message']
    const errors = {}
    let valid = true

    requiredFields.forEach(field => {
      if (touchedFields[field]) {
        let error = null
        
        // Use existing validation for common fields
        if (field === 'email' || field === 'phone') {
          error = validateField(field === 'contactPerson' ? 'name' : field, formData[field])
        } else if (field === 'contactPerson') {
          error = validateField('name', formData[field])
        } else if (!formData[field].trim()) {
          error = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`
        } else if (field === 'message' && formData[field].trim().length < 20) {
          error = 'Please provide more details about your hiring requirements (minimum 20 characters)'
        }
        
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

  const benefits = [
    {
      icon: HiAcademicCap,
      title: 'Industry-Ready Candidates',
      description: 'Our students are trained in the latest technologies and industry best practices.',
      color: 'blue'
    },
    {
      icon: HiUserGroup,
      title: 'Pre-Screened Talent',
      description: 'All candidates go through rigorous training and assessment processes.',
      color: 'green'
    },
    {
      icon: HiStar,
      title: 'High Performance',
      description: '95% of our placed candidates receive excellent performance ratings.',
      color: 'purple'
    },
    {
      icon: HiClock,
      title: 'Quick Hiring',
      description: 'Fast-track your hiring process with our ready-to-work professionals.',
      color: 'orange'
    }
  ]

  const skills = [
    'MERN Stack Development',
    'Java Full Stack',
    'Data Science & ML',
    'Cloud Computing (AWS)',
    'Digital Marketing',
    'Cybersecurity',
    'Gen AI Integration',
    'DevOps & Automation'
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
    const allFields = ['companyName', 'contactPerson', 'email', 'phone', 'jobTitle', 'message']
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
      // Format the form data for hiring inquiry
      const hiringFormData = {
        name: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        course: 'HIRING INQUIRY',
        message: `
COMPANY HIRING INQUIRY:

Company: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Job Title: ${formData.jobTitle}
Skills Required: ${formData.skillsRequired || 'Not specified'}
Experience Level: ${formData.experience || 'Not specified'}
Location: ${formData.location || 'Not specified'}

Requirements:
${formData.message}
        `.trim()
      }
      
      const result = await submitContactForm(hiringFormData)
      
      if (result.success) {
        setIsSubmitted(true)
        console.log(`✅ Hiring inquiry sent successfully via ${result.method}`)
        
        // Reset form after 6 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            jobTitle: '',
            skillsRequired: '',
            experience: '',
            location: '',
            message: ''
          })
          setTouchedFields({})
          setFieldErrors({})
        }, 6000)
      }
      
    } catch (error) {
      console.error('Hiring form submission error:', error)
      setErrorMessage(error.message || 'Failed to send hiring inquiry. Please try again.')
      
      // Clear error after 6 seconds
      setTimeout(() => {
        setErrorMessage('')
      }, 6000)
      
    } finally {
      setIsLoading(false)
    }
  }

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
    <section id="hire-talent" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <HiOfficeBuilding className="w-4 h-4" />
            <span>For Companies</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hire <span className="gradient-text">Industry-Ready</span> Talent
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with our pool of trained professionals who are ready to contribute to your organization from day one
          </motion.p>
          
          {/* Quick Contact Banner */}
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

        {/* Benefits Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(benefit.color)}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Skills & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Available Skills */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hidden md:block">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Skills</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hiring Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <HiUserGroup className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Hire Our Graduates</h3>
                <p className="text-gray-600">Tell us about your hiring requirements</p>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.companyName && touchedFields.companyName
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : formData.companyName && !fieldErrors.companyName
                          ? 'border-green-300 focus:ring-green-500 bg-green-50'
                          : 'border-gray-300 focus:ring-primary-500'
                      }`}
                      placeholder="Enter your company name"
                    />
                    <AnimatePresence>
                      {fieldErrors.companyName && touchedFields.companyName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.companyName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.contactPerson && touchedFields.contactPerson
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : formData.contactPerson && !fieldErrors.contactPerson
                          ? 'border-green-300 focus:ring-green-500 bg-green-50'
                          : 'border-gray-300 focus:ring-primary-500'
                      }`}
                      placeholder="Your name"
                    />
                    <AnimatePresence>
                      {fieldErrors.contactPerson && touchedFields.contactPerson && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.contactPerson}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
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
                      placeholder="your.email@company.com"
                    />
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
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
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.jobTitle && touchedFields.jobTitle
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : formData.jobTitle && !fieldErrors.jobTitle
                          ? 'border-green-300 focus:ring-green-500 bg-green-50'
                          : 'border-gray-300 focus:ring-primary-500'
                      }`}
                      placeholder="e.g., Full Stack Developer"
                    />
                    <AnimatePresence>
                      {fieldErrors.jobTitle && touchedFields.jobTitle && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 flex items-center"
                        >
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {fieldErrors.jobTitle}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1 years">0-1 years (Fresher)</option>
                      <option value="1-3 years">1-3 years (Junior)</option>
                      <option value="3-5 years">3-5 years (Mid-level)</option>
                      <option value="5+ years">5+ years (Senior)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills Required
                    </label>
                    <input
                      type="text"
                      name="skillsRequired"
                      value={formData.skillsRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Pune, Bangalore, Remote"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Requirements & Details *
                  </label>
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
                    placeholder="Please describe the role, responsibilities, salary range, benefits, and any specific requirements..."
                  />
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
                  <div className="mt-1 text-xs text-gray-400 text-right">
                    {formData.message.length}/1000
                  </div>
                </div>

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
                  whileHover={!isLoading && isFormValid ? { scale: 1.02 } : {}}
                  whileTap={!isLoading && isFormValid ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting your request...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <HiUserGroup className="w-5 h-5" />
                      <span>Submit Hiring Request</span>
                    </div>
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
                    Your hiring request has been successfully submitted!
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our HR team will review your requirements and connect you with suitable candidates within 48 hours.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HireTalent
