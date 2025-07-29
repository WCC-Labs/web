// WCC Labs Email Service - Web3Forms Integration
// Simple, reliable email delivery to info@wcclabs.com

/**
 * Real-time field validation
 */
export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'name': {
      if (!value.trim()) return 'Name is required'
      if (value.trim().length < 2) return 'Name must be at least 2 characters'
      if (!/^[a-zA-Z\s.]+$/.test(value)) return 'Name can only contain letters and spaces'
      return null
    }

    case 'email': {
      if (!value.trim()) return 'Email is required'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return 'Please enter a valid email address'
      return null
    }

    case 'phone': {
      if (!value.trim()) return 'Phone number is required'
      const cleanPhone = value.replace(/[\s\-()+=]/g, '')
      if (!/^[0-9]{10,15}$/.test(cleanPhone)) return 'Please enter a valid phone number (10-15 digits)'
      return null
    }

    case 'message': {
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 10) return 'Message must be at least 10 characters'
      if (value.trim().length > 1000) return 'Message must be less than 1000 characters'
      return null
    }

    default:
      return null
  }
}

/**
 * Validate entire form
 */
export const validateForm = (formData) => {
  const errors = {}
  const requiredFields = ['name', 'email', 'phone', 'message']
  
  requiredFields.forEach(field => {
    const error = validateField(field, formData[field], formData)
    if (error) errors[field] = error
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Web3Forms email service - Professional email delivery
 */
const sendViaWeb3Forms = async (formData) => {
  console.log('Sending contact form via Web3Forms...')
  
  // Web3Forms access key - directly configured
  const web3FormsKey = '3ed0277e-2c88-4dc0-be68-4f8e2fcc46da'

  const emailData = {
    access_key: web3FormsKey,
    subject: `WCC Labs Contact: ${formData.course || 'General Inquiry'}`,
    from_name: formData.name,
    email: formData.email,
    message: `
NEW CONTACT FORM INQUIRY - WCC LABS
========================================

INFORMATION:
   Name: ${formData.name}
   Email: ${formData.email}
   Phone: ${formData.phone}

COURSE INTEREST:
   ${formData.course || 'General Inquiry'}

💬 MESSAGE:
${formData.message}

📅 Submitted: ${new Date().toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  day: '2-digit',
  month: 'short', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})} (IST)

---
🌐 Sent from WCC Labs website (wcclabs.com)
⚡ Powered by Web3Forms Email Service
    `.trim()
  }

  console.log('Submitting to Web3Forms API...', { 
    access_key: '***configured***', 
    subject: emailData.subject,
    from: formData.email 
  })

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(emailData)
  })

  const result = await response.json()
  console.log('Web3Forms API response:', result)

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to send email via Web3Forms')
  }

  return {
    success: true,
    method: 'Web3Forms',
    message: 'Your message has been sent successfully! We\'ll get back to you soon.',
    details: result
  }
}

/**
 * Track contact form analytics
 */
const trackContactForm = (formData, result) => {
  try {
    const analytics = JSON.parse(localStorage.getItem('wcc_contact_analytics') || '[]')
    
    analytics.push({
      timestamp: new Date().toISOString(),
      course: formData.course || 'General Inquiry',
      method: result.method,
      success: result.success,
      userAgent: navigator.userAgent.split(' ').slice(-2).join(' ')
    })

    // Keep only last 50 submissions
    if (analytics.length > 50) {
      analytics.splice(0, analytics.length - 50)
    }

    localStorage.setItem('wcc_contact_analytics', JSON.stringify(analytics))
    console.log('Contact form analytics updated')
  } catch (error) {
    console.warn('Analytics tracking failed:', error)
  }
}

/**
 * Main contact form submission function
 */
export const submitContactForm = async (formData) => {
  console.log('🚀 WCC Labs Contact Form Submission Started')
  console.log('📝 Form Data:', { 
    name: formData.name, 
    email: formData.email, 
    course: formData.course,
    messageLength: formData.message?.length 
  })

  // Validate form data
  const validation = validateForm(formData)
  if (!validation.isValid) {
    console.error('Form validation failed:', validation.errors)
    throw new Error('Please fix the form errors and try again.')
  }

  try {
    // Send email via Web3Forms
    const result = await sendViaWeb3Forms(formData)
    
    // Track analytics
    trackContactForm(formData, result)
    
    console.log('Contact form submitted successfully!')
    return result

  } catch (error) {
    console.error('Email delivery failed:', error)
    
    // Track failed attempt
    trackContactForm(formData, { success: false, method: 'Web3Forms', error: error.message })
    
    throw new Error(`Sorry, we couldn't send your message. Please try again or contact us directly at info@wcclabs.com or WhatsApp: +91-9455966988`)
  }
}

export default {
  validateField,
  validateForm,
  submitContactForm
}
