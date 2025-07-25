import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiClock, 
  HiStar, 
  HiUsers, 
  HiPlay,
  HiCode,
  HiDatabase,
  HiChartBar,
  HiDeviceMobile,
  HiShieldCheck,
  HiCloud,
  HiX,
  HiCheckCircle,
  HiDownload
} from 'react-icons/hi'

const Courses = () => {
  const [activeTab, setActiveTab] = useState('popular')
  const [selectedCourse, setSelectedCourse] = useState(null)

  // Modern PDF generation function
  const downloadSyllabus = async (course) => {
    try {
      // Create PDF content with modern styling
      const pdfContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${course.title} - Curriculum Syllabus</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            :root {
              --primary-color: #3B82F6;
              --primary-dark: #1E40AF;
              --accent-color: #10B981;
              --text-primary: #1F2937;
              --text-secondary: #6B7280;
              --text-light: #9CA3AF;
              --bg-light: #F9FAFB;
              --bg-card: #FFFFFF;
              --border-color: #E5E7EB;
              --success-color: #10B981;
              --warning-color: #F59E0B;
            }
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.5;
              color: var(--text-primary);
              background: white;
              font-size: 13px;
              padding: 0;
              margin: 0;
            }
            
            .container {
              max-width: 210mm;
              width: 100%;
              margin: 0 auto;
              padding: 15mm 20mm;
              min-height: 297mm;
            }
            
            /* Header Section */
            .header {
              background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
              color: white;
              padding: 25px;
              border-radius: 16px;
              margin-bottom: 25px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            .header::before {
              content: '';
              position: absolute;
              top: -50%;
              right: -50%;
              width: 100%;
              height: 100%;
              background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
              pointer-events: none;
            }
            
            .header-content {
              position: relative;
              z-index: 2;
            }
            
            .course-title {
              font-size: 24px;
              font-weight: 800;
              margin-bottom: 6px;
              letter-spacing: -0.3px;
            }
            
            .course-subtitle {
              font-size: 14px;
              opacity: 0.9;
              margin-bottom: 0;
              font-weight: 400;
            }
            
            .course-meta {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 20px;
              margin-top: 30px;
            }
            
            .meta-item {
              background: rgba(255,255,255,0.1);
              backdrop-filter: blur(10px);
              padding: 15px;
              border-radius: 12px;
              text-align: center;
              border: 1px solid rgba(255,255,255,0.2);
            }
            
            .meta-label {
              font-size: 12px;
              opacity: 0.8;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            
            .meta-value {
              font-size: 16px;
              font-weight: 600;
            }
            
            /* Pricing Section */
            .pricing-section {
              background: linear-gradient(135deg, var(--success-color) 0%, #059669 100%);
              color: white;
              padding: 25px;
              border-radius: 16px;
              text-align: center;
              margin: 30px 0;
              position: relative;
              overflow: hidden;
            }
            
            .pricing-section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
              opacity: 0.3;
            }
            
            .price-content {
              position: relative;
              z-index: 2;
            }
            
            .current-price {
              font-size: 28px;
              font-weight: 800;
              margin-bottom: 8px;
            }
            
            .original-price {
              font-size: 16px;
              text-decoration: line-through;
              opacity: 0.7;
              margin-left: 10px;
            }
            
            .price-note {
              font-size: 14px;
              opacity: 0.9;
              margin-top: 10px;
            }
            
            /* Content Section */
            .content-section {
              margin-bottom: 25px;
            }
            
            .section-title {
              font-size: 20px;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 18px;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            
            .section-title::before {
              content: '';
              font-size: 24px;
            }
            
            /* Level Styling */
            .level {
              margin-bottom: 20px;
              page-break-inside: avoid;
              break-inside: avoid;
            }
            
            .level-header {
              background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
              color: white;
              padding: 12px 16px;
              border-radius: 10px;
              margin-bottom: 12px;
              display: flex;
              align-items: center;
              gap: 10px;
              box-shadow: 0 3px 15px rgba(59, 130, 246, 0.12);
            }
            
            .level-number {
              width: 36px;
              height: 36px;
              background: rgba(255,255,255,0.2);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 16px;
              border: 2px solid rgba(255,255,255,0.3);
            }
            
            .level-info h3 {
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 2px;
            }
            
            .level-info p {
              opacity: 0.9;
              font-size: 12px;
            }
            
            /* Week Styling */
            .weeks-container {
              margin-left: 18px;
              border-left: 2px solid var(--border-color);
              padding-left: 0;
            }
            
            .week {
              position: relative;
              margin-bottom: 12px;
              padding-left: 22px;
            }
            
            .week::before {
              content: '';
              position: absolute;
              left: -5px;
              top: 6px;
              width: 8px;
              height: 8px;
              background: var(--primary-color);
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 0 0 2px var(--primary-color);
            }
            
            .week-card {
              background: var(--bg-card);
              border: 1px solid var(--border-color);
              border-radius: 8px;
              padding: 12px;
              box-shadow: 0 2px 6px rgba(0,0,0,0.03);
              transition: all 0.3s ease;
            }
            
            .week-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 10px;
              flex-wrap: wrap;
              gap: 6px;
            }
            
            .week-title {
              font-weight: 700;
              color: var(--text-primary);
              font-size: 14px;
            }
            
            .week-badge {
              background: var(--bg-light);
              color: var(--text-secondary);
              padding: 3px 8px;
              border-radius: 12px;
              font-size: 10px;
              font-weight: 500;
              border: 1px solid var(--border-color);
            }
            
            .topics-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
              gap: 6px;
            }
            
            .topic-item {
              display: flex;
              align-items: center;
              gap: 5px;
              color: var(--text-secondary);
              font-size: 11px;
              padding: 3px 0;
              line-height: 1.3;
            }
            
            .topic-check {
              width: 12px;
              height: 12px;
              background: var(--success-color);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 8px;
              font-weight: bold;
              flex-shrink: 0;
            }
            
            .topic-check::before {
              content: '✓';
            }
            
            /* Features Section */
            .features-section {
              background: var(--bg-light);
              padding: 16px;
              border-radius: 10px;
              margin: 20px 0;
            }
            
            .features-title {
              font-size: 16px;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 12px;
              display: flex;
              align-items: center;
              gap: 6px;
            }
            
            .features-title::before {
              content: '🎯';
              font-size: 18px;
            }
            
            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
              gap: 8px;
            }
            
            .feature-item {
              background: white;
              padding: 10px;
              border-radius: 6px;
              text-align: center;
              border: 1px solid var(--border-color);
              font-size: 11px;
              font-weight: 500;
              color: var(--text-primary);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 5px;
              line-height: 1.3;
            }
            
            .feature-item::before {
              content: '✨';
              font-size: 14px;
            }
            
            /* Print Styles for A4 Paper */
            @page {
              size: A4;
              margin: 15mm 20mm;
            }
            
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              body {
                font-size: 10px !important;
                line-height: 1.4 !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              .container {
                padding: 0 !important;
                margin: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
                min-height: auto !important;
              }
              
              .header {
                padding: 15px !important;
                margin-bottom: 15px !important;
                border-radius: 8px !important;
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              .content-section {
                margin-bottom: 15px !important;
              }
              
              .section-title {
                font-size: 14px !important;
                margin-bottom: 12px !important;
              }
              
              .level {
                page-break-inside: avoid;
                break-inside: avoid;
                margin-bottom: 15px !important;
              }
              
              .level-header {
                padding: 8px 12px !important;
                margin-bottom: 8px !important;
                border-radius: 6px !important;
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              .level-number {
                width: 28px !important;
                height: 28px !important;
                font-size: 12px !important;
              }
              
              .level-info h3 {
                font-size: 12px !important;
              }
              
              .level-info p {
                font-size: 9px !important;
              }
              
              .week {
                page-break-inside: avoid;
                break-inside: avoid;
                margin-bottom: 8px !important;
                padding-left: 18px !important;
              }
              
              .week-card {
                padding: 8px !important;
                border-radius: 4px !important;
              }
              
              .week-title {
                font-size: 11px !important;
              }
              
              .week-badge {
                font-size: 8px !important;
                padding: 2px 6px !important;
              }
              
              .topic-item {
                font-size: 9px !important;
                padding: 1px 0 !important;
              }
              
              .topic-check {
                width: 10px !important;
                height: 10px !important;
                font-size: 6px !important;
              }
              
              .features-section {
                margin: 12px 0 !important;
                padding: 10px !important;
                page-break-inside: avoid;
                break-inside: avoid;
              }
              
              .features-title {
                font-size: 12px !important;
                margin-bottom: 8px !important;
              }
              
              .feature-item {
                padding: 6px !important;
                font-size: 9px !important;
              }
              
              .course-title {
                font-size: 18px !important;
                margin-bottom: 4px !important;
              }
              
              .course-subtitle {
                font-size: 11px !important;
              }
              
              .topics-grid {
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
                gap: 4px !important;
              }
              
              .features-grid {
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
                gap: 6px !important;
              }
            }
            
            /* Responsive Design */
            @media (max-width: 600px) {
              .container {
                padding: 15mm 10mm;
              }
              
              .course-title {
                font-size: 20px;
              }
              
              .topics-grid {
                grid-template-columns: 1fr;
              }
              
              .features-grid {
                grid-template-columns: 1fr;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header Section - Course Title Only -->
            <div class="header">
              <div class="header-content">
                <h1 class="course-title">${course.title}</h1>
                <p class="course-subtitle">${course.description}</p>
              </div>
            </div>

            <!-- Curriculum Content -->
            <div class="content-section">
              <h2 class="section-title">Complete Course Curriculum</h2>
              
              ${course.curriculum.levels.map(level => `
                <div class="level">
                  <div class="level-header">
                    <div class="level-number">${level.level}</div>
                    <div class="level-info">
                      <h3>Level ${level.level}: ${level.title}</h3>
                      <p>Comprehensive ${level.title.toLowerCase()} training</p>
                    </div>
                  </div>
                  
                  <div class="weeks-container">
                    ${level.weeks.map(week => `
                      <div class="week">
                        <div class="week-card">
                          <div class="week-header">
                            <div class="week-title">Week ${week.week}</div>
                            <div class="week-badge">${week.title}</div>
                          </div>
                          
                          <div class="topics-grid">
                            ${week.topics.map(topic => `
                              <div class="topic-item">
                                <div class="topic-check"></div>
                                <span>${topic}</span>
                              </div>
                            `).join('')}
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Key Features -->
            <div class="features-section">
              <h3 class="features-title">Key Course Features</h3>
              <div class="features-grid">
                ${course.features.map(feature => `
                  <div class="feature-item">${feature}</div>
                `).join('')}
              </div>
            </div>

            <!-- Company Footer Section -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid var(--border-color); text-align: center;">
              <div style="font-size: 18px; font-weight: bold; color: var(--text-primary); margin-bottom: 6px;">WCC Labs</div>
              <div style="color: var(--text-secondary); margin-bottom: 15px; font-style: italic; font-size: 14px;">"Code Your Career with Industry-Ready Skills"</div>
              
              <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p style="margin: 0 0 8px 0; font-weight: bold;">📞 Ready to Start Your Journey?</p>
                <p style="margin: 0 0 5px 0; font-size: 14px;">Contact our admissions team for enrollment guidance</p>
                <p style="margin: 0; font-size: 14px;">🌐 Visit our website for more courses and details</p>
              </div>
              
              <div style="font-size: 11px; color: var(--text-light); margin-top: 15px; line-height: 1.4;">
                <p style="margin: 0 0 5px 0;">Syllabus generated on ${new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} | © ${new Date().getFullYear()} WCC Labs. All rights reserved.</p>
                <p style="margin: 0;">This curriculum is subject to updates based on industry trends and student feedback.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `

      // Create a new window with better handling
      const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes')
      
      if (!printWindow) {
        throw new Error('Popup blocked. Please allow popups and try again.')
      }

      // Write content and handle loading
      printWindow.document.write(pdfContent)
      printWindow.document.close()
      
      // Add better print handling
      const handlePrint = () => {
        setTimeout(() => {
          printWindow.focus()
          printWindow.print()
          
          // Close window after print dialog
          setTimeout(() => {
            printWindow.close()
          }, 1000)
        }, 1000) // Increased delay for better font loading
      }

      // Handle different loading states
      if (printWindow.document.readyState === 'complete') {
        handlePrint()
      } else {
        printWindow.addEventListener('load', handlePrint)
        // Fallback timeout
        setTimeout(handlePrint, 2000)
      }

    } catch (error) {
      console.error('PDF generation failed:', error)
      
      // Enhanced fallback with better formatting
      const cleanTitle = course.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')
      const timestamp = new Date().toISOString().split('T')[0]
      
      const syllabusContent = `
WCC LABS - COURSE SYLLABUS
${'='.repeat(50)}

COURSE: ${course.title}
DESCRIPTION: ${course.description}
DURATION: ${course.duration}
LEVEL: ${course.level}
STUDENTS ENROLLED: ${course.students}+
RATING: ${course.rating}/5 ⭐

PRICING:
Current Fee: ₹${course.currentPrice.toLocaleString()}
${course.originalPrice ? `Original Price: ₹${course.originalPrice.toLocaleString()} (SAVE ₹${(course.originalPrice - course.currentPrice).toLocaleString()})` : ''}

${'='.repeat(50)}
COMPLETE CURRICULUM
${'='.repeat(50)}

${course.curriculum.levels.map(level => `
LEVEL ${level.level}: ${level.title.toUpperCase()}
${'-'.repeat(40)}

${level.weeks.map(week => `
  📅 WEEK ${week.week}: ${week.title}
  ${week.topics.map(topic => `    ✓ ${topic}`).join('\n  ')}
`).join('\n')}
`).join('\n')}

${'='.repeat(50)}
KEY FEATURES
${'='.repeat(50)}

${course.features.map(feature => `✨ ${feature}`).join('\n')}

${'='.repeat(50)}
CONTACT INFORMATION
${'='.repeat(50)}

WCC Labs - "Code Your Career with Industry-Ready Skills"
📞 Contact our admissions team for enrollment
🌐 Visit our website for more details

Generated on: ${new Date().toLocaleDateString('en-IN')}
© ${new Date().getFullYear()} WCC Labs. All rights reserved.

Note: This curriculum is subject to updates based on industry trends.
      `

      // Create and download text file
      const blob = new Blob([syllabusContent], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      
      link.href = url
      link.download = `${cleanTitle}_Syllabus_${timestamp}.txt`
      link.style.display = 'none'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      
      // Show user-friendly message
      alert('PDF generation temporarily unavailable. Downloaded text version instead.')
    }
  }

  const courses = {
    popular: [
      {
        id: 1,
        title: 'MERN Stack + Gen AI',
        description: 'Master MongoDB, Express.js, React.js, Node.js with AI integration for modern web development.',
        duration: '6 Months',
        level: 'Intermediate',
        students: 1200,
        rating: 4.9,
        originalPrice: 45000,
        currentPrice: 35000,
        icon: HiCode,
        gradient: 'from-blue-500 to-cyan-500',
        features: ['React 18 & Hooks', 'Node.js & Express', 'MongoDB Atlas', 'AI Integration', 'Live Projects', 'Job Assistance'],
        badge: 'Most Popular',
        curriculum: {
          duration: '6 Months',
          levels: [
            {
              level: 1,
              title: 'Frontend Fundamentals',
              weeks: [
                { week: '1', title: 'HTML5 & CSS3', topics: ['Semantic HTML', 'CSS Grid & Flexbox', 'Responsive Design'] },
                { week: '2-3', title: 'JavaScript ES6+', topics: ['Modern JS Features', 'DOM Manipulation', 'Async Programming'] },
                { week: '4', title: 'React Basics', topics: ['Components', 'Props & State', 'Event Handling'] }
              ]
            },
            {
              level: 2,
              title: 'Advanced Frontend',
              weeks: [
                { week: '5-6', title: 'React Advanced', topics: ['Hooks', 'Context API', 'State Management'] },
                { week: '7-8', title: 'UI Libraries', topics: ['Material UI', 'Styled Components', 'Animations'] }
              ]
            },
            {
              level: 3,
              title: 'Backend Development',
              weeks: [
                { week: '9-10', title: 'Node.js & Express', topics: ['Server Setup', 'REST APIs', 'Middleware'] },
                { week: '11-12', title: 'Database Integration', topics: ['MongoDB', 'Mongoose', 'Data Modeling'] }
              ]
            },
            {
              level: 4,
              title: 'Full Stack & AI',
              weeks: [
                { week: '13-16', title: 'MERN Integration', topics: ['Authentication', 'JWT', 'File Upload'] },
                { week: '17-20', title: 'AI Integration', topics: ['OpenAI API', 'Chatbots', 'ML Models'] },
                { week: '21-24', title: 'Project & Deployment', topics: ['Capstone Project', 'AWS Deployment', 'Performance Optimization'] }
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: 'Data Science & ML',
        description: 'Learn Python, Machine Learning, Deep Learning, and AI with hands-on projects and real datasets.',
        duration: '8 Months',
        level: 'Advanced',
        students: 890,
        rating: 4.8,
        originalPrice: 55000,
        currentPrice: 42000,
        icon: HiChartBar,
        gradient: 'from-purple-500 to-pink-500',
        features: ['Python & Pandas', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Real Projects', 'Industry Mentorship'],
        curriculum: {
          duration: '8 Months',
          levels: [
            {
              level: 1,
              title: 'Python Fundamentals',
              weeks: [
                { week: '1-2', title: 'Python Basics', topics: ['Syntax & Data Types', 'Control Structures', 'Functions'] },
                { week: '3-4', title: 'Data Manipulation', topics: ['Pandas', 'NumPy', 'Data Cleaning'] }
              ]
            },
            {
              level: 2,
              title: 'Statistics & ML',
              weeks: [
                { week: '5-8', title: 'Statistics', topics: ['Descriptive Stats', 'Probability', 'Hypothesis Testing'] },
                { week: '9-12', title: 'Machine Learning', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] }
              ]
            },
            {
              level: 3,
              title: 'Advanced ML & DL',
              weeks: [
                { week: '13-16', title: 'Deep Learning', topics: ['Neural Networks', 'TensorFlow', 'Computer Vision'] },
                { week: '17-20', title: 'NLP & AI', topics: ['Text Processing', 'Sentiment Analysis', 'LLMs'] }
              ]
            },
            {
              level: 4,
              title: 'Projects & Deployment',
              weeks: [
                { week: '21-24', title: 'ML Projects', topics: ['End-to-End Projects', 'Model Deployment', 'MLOps'] },
                { week: '25-28', title: 'Industry Projects', topics: ['Real Client Work', 'Portfolio Building', 'Career Prep'] }
              ]
            }
          ]
        }
      },
      {
        id: 3,
        title: 'Java Full Stack + Gen AI',
        description: 'Complete Java development with Spring Boot, React, and AI integration for enterprise applications.',
        duration: '7 Months',
        level: 'Intermediate',
        students: 750,
        rating: 4.7,
        originalPrice: 48000,
        currentPrice: 38000,
        icon: HiDatabase,
        gradient: 'from-orange-500 to-red-500',
        features: ['Core Java', 'Spring Framework', 'React Frontend', 'AI Tools', 'Microservices', 'DevOps Basics'],
        curriculum: {
          duration: '7 Months',
          levels: [
            {
              level: 1,
              title: 'Java Fundamentals',
              weeks: [
                { week: '1-2', title: 'Core Java', topics: ['OOP Concepts', 'Collections', 'Exception Handling'] },
                { week: '3-4', title: 'Advanced Java', topics: ['Multithreading', 'File I/O', 'JDBC'] }
              ]
            },
            {
              level: 2,
              title: 'Spring Framework',
              weeks: [
                { week: '5-8', title: 'Spring Core', topics: ['Dependency Injection', 'Spring MVC', 'Spring Boot'] },
                { week: '9-10', title: 'Data Layer', topics: ['Spring Data JPA', 'Hibernate', 'Database Design'] }
              ]
            },
            {
              level: 3,
              title: 'Frontend Integration',
              weeks: [
                { week: '11-14', title: 'React Development', topics: ['Components', 'State Management', 'API Integration'] },
                { week: '15-16', title: 'Full Stack Integration', topics: ['REST APIs', 'Authentication', 'Security'] }
              ]
            },
            {
              level: 4,
              title: 'Enterprise & AI',
              weeks: [
                { week: '17-20', title: 'Microservices', topics: ['Spring Cloud', 'Docker', 'API Gateway'] },
                { week: '21-24', title: 'AI Integration', topics: ['Java AI Libraries', 'ML Integration', 'Project Deployment'] }
              ]
            }
          ]
        }
      }
    ],
    trending: [
      {
        id: 4,
        title: 'Digital Marketing Mastery',
        description: 'Complete digital marketing course covering SEO, SEM, Social Media, and Analytics.',
        duration: '4 Months',
        level: 'Beginner',
        students: 650,
        rating: 4.6,
        originalPrice: 35000,
        currentPrice: 25000,
        icon: HiDeviceMobile,
        gradient: 'from-green-500 to-teal-500',
        features: ['SEO & SEM', 'Social Media Marketing', 'Google Analytics', 'Content Strategy', 'PPC Campaigns', 'Certification'],
        curriculum: {
          duration: '4 Months',
          levels: [
            {
              level: 1,
              title: 'Digital Marketing Basics',
              weeks: [
                { week: '1-2', title: 'Marketing Fundamentals', topics: ['Digital Marketing Overview', 'Consumer Behavior', 'Market Research'] },
                { week: '3-4', title: 'Website & SEO', topics: ['Website Optimization', 'On-page SEO', 'Keyword Research'] }
              ]
            },
            {
              level: 2,
              title: 'Paid Advertising',
              weeks: [
                { week: '5-8', title: 'Google Ads & SEM', topics: ['Search Campaigns', 'Display Ads', 'Shopping Ads'] },
                { week: '9-10', title: 'Social Media Ads', topics: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Ads'] }
              ]
            },
            {
              level: 3,
              title: 'Analytics & Strategy',
              weeks: [
                { week: '11-12', title: 'Analytics', topics: ['Google Analytics', 'Conversion Tracking', 'ROI Analysis'] },
                { week: '13-14', title: 'Content & Email', topics: ['Content Marketing', 'Email Campaigns', 'Marketing Automation'] }
              ]
            },
            {
              level: 4,
              title: 'Advanced & Certification',
              weeks: [
                { week: '15-16', title: 'Advanced Strategies', topics: ['Growth Hacking', 'Influencer Marketing', 'Brand Building'] }
              ]
            }
          ]
        }
      },
      {
        id: 5,
        title: 'Cybersecurity Specialist',
        description: 'Learn ethical hacking, network security, and cybersecurity best practices.',
        duration: '5 Months',
        level: 'Advanced',
        students: 420,
        rating: 4.8,
        originalPrice: 50000,
        currentPrice: 40000,
        icon: HiShieldCheck,
        gradient: 'from-indigo-500 to-purple-500',
        features: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'Security Tools', 'Compliance', 'Certifications'],
        curriculum: {
          duration: '5 Months',
          levels: [
            {
              level: 1,
              title: 'Security Fundamentals',
              weeks: [
                { week: '1-2', title: 'Cybersecurity Basics', topics: ['Security Principles', 'Threat Landscape', 'Risk Assessment'] },
                { week: '3-4', title: 'Network Security', topics: ['Network Protocols', 'Firewalls', 'VPNs'] }
              ]
            },
            {
              level: 2,
              title: 'Ethical Hacking',
              weeks: [
                { week: '5-8', title: 'Penetration Testing', topics: ['Vulnerability Assessment', 'Metasploit', 'Web App Testing'] },
                { week: '9-10', title: 'System Security', topics: ['OS Security', 'Active Directory', 'Incident Response'] }
              ]
            },
            {
              level: 3,
              title: 'Advanced Security',
              weeks: [
                { week: '11-14', title: 'Advanced Techniques', topics: ['Malware Analysis', 'Digital Forensics', 'Cryptography'] },
                { week: '15-16', title: 'Cloud Security', topics: ['AWS Security', 'Cloud Compliance', 'DevSecOps'] }
              ]
            },
            {
              level: 4,
              title: 'Certification Prep',
              weeks: [
                { week: '17-20', title: 'Industry Certifications', topics: ['CEH Preparation', 'CISSP Basics', 'Security+ Training'] }
              ]
            }
          ]
        }
      },
      {
        id: 6,
        title: 'Cloud Computing (AWS)',
        description: 'Master Amazon Web Services with hands-on labs and real-world scenarios.',
        duration: '6 Months',
        level: 'Intermediate',
        students: 580,
        rating: 4.7,
        originalPrice: 45000,
        currentPrice: 35000,
        icon: HiCloud,
        gradient: 'from-yellow-500 to-orange-500',
        features: ['AWS Core Services', 'Cloud Architecture', 'DevOps on AWS', 'Serverless', 'Security', 'AWS Certification'],
        curriculum: {
          duration: '6 Months',
          levels: [
            {
              level: 1,
              title: 'Cloud Fundamentals',
              weeks: [
                { week: '1-2', title: 'AWS Basics', topics: ['Cloud Concepts', 'AWS Global Infrastructure', 'IAM'] },
                { week: '3-4', title: 'Core Services', topics: ['EC2', 'S3', 'VPC'] }
              ]
            },
            {
              level: 2,
              title: 'Cloud Architecture',
              weeks: [
                { week: '5-8', title: 'Advanced Services', topics: ['RDS', 'Lambda', 'CloudFormation'] },
                { week: '9-10', title: 'Networking', topics: ['Load Balancers', 'Route 53', 'CloudFront'] }
              ]
            },
            {
              level: 3,
              title: 'DevOps & Automation',
              weeks: [
                { week: '11-14', title: 'DevOps Tools', topics: ['CodePipeline', 'CodeBuild', 'CloudWatch'] },
                { week: '15-16', title: 'Containers', topics: ['ECS', 'EKS', 'Docker on AWS'] }
              ]
            },
            {
              level: 4,
              title: 'Certification & Projects',
              weeks: [
                { week: '17-20', title: 'Security & Compliance', topics: ['AWS Security', 'Compliance', 'Best Practices'] },
                { week: '21-24', title: 'Certification Prep', topics: ['Solutions Architect', 'Hands-on Projects', 'Exam Preparation'] }
              ]
            }
          ]
        }
      }
    ]
  }

  const tabs = [
    { id: 'popular', name: 'Popular Courses', count: courses.popular.length },
    { id: 'trending', name: 'Trending', count: courses.trending.length }
  ]

  return (
    <section id="courses" className="py-20 bg-white">
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
            Explore Our <span className="gradient-text">Top Programs</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Master cutting-edge technologies with our industry-aligned curriculum and expert guidance
          </motion.p>
        </motion.div>

        {/* Course Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gray-100 rounded-xl p-2 flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.name} ({tab.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {courses[activeTab].map((course, index) => (
            <motion.div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Course Header */}
              <div className={`relative h-48 bg-gradient-to-br ${course.gradient} p-6 flex items-center justify-center`}>
                {course.badge && (
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {course.badge}
                  </div>
                )}
                <motion.div
                  className="text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <course.icon className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center">{course.title}</h3>
                </motion.div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <HiClock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HiUsers className="w-4 h-4" />
                    <span>{course.students}+ students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HiStar className="w-4 h-4 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  {course.features.length > 4 && (
                    <p className="text-sm text-gray-500 mt-2">
                      +{course.features.length - 4} more features
                    </p>
                  )}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{course.currentPrice.toLocaleString()}
                    </span>
                    {course.originalPrice && (
                      <span className="text-gray-500 line-through ml-2">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.a
                    href="#contact"
                    className="w-full btn btn-primary btn-md flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.a>
                  <motion.button
                    className="w-full btn btn-outline btn-md flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <HiPlay className="w-4 h-4" />
                    <span>View Curriculum</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Can't find the course you're looking for? We have more programs available.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-outline btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.a>
        </motion.div>

        {/* Curriculum Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`bg-gradient-to-r ${selectedCourse.gradient} p-8 text-white relative`}>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <selectedCourse.icon className="w-12 h-12" />
                    <div>
                      <h3 className="text-3xl font-bold">{selectedCourse.title}</h3>
                      <p className="text-white/90 text-lg">{selectedCourse.curriculum.duration} Program</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 max-w-3xl">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* Modal Content */}
                <div className="p-8 overflow-y-auto max-h-[60vh]">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h4>
                    
                    {/* Timeline */}
                    <div className="space-y-8">
                      {selectedCourse.curriculum.levels.map((level, levelIndex) => (
                        <motion.div
                          key={level.level}
                          className="relative"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: levelIndex * 0.1 }}
                        >
                          {/* Level Header */}
                          <div className="flex items-center mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedCourse.gradient} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                              {level.level}
                            </div>
                            <div>
                              <h5 className="text-xl font-bold text-gray-900">Level {level.level}</h5>
                              <p className="text-gray-600">{level.title}</p>
                            </div>
                          </div>

                          {/* Weeks Timeline */}
                          <div className="ml-6 border-l-2 border-gray-200 pb-8">
                            {level.weeks.map((week, weekIndex) => (
                              <div key={weekIndex} className="relative pl-8 pb-8">
                                {/* Timeline dot */}
                                <div className="absolute -left-2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full"></div>
                                
                                <div className="bg-gray-50 rounded-xl p-6">
                                  <div className="flex items-center justify-between mb-3">
                                    <h6 className="font-bold text-gray-900">Week {week.week}</h6>
                                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                                      {week.title}
                                    </span>
                                  </div>
                                  
                                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {week.topics.map((topic, topicIndex) => (
                                      <motion.div
                                        key={topicIndex}
                                        className="flex items-center space-x-2 text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (levelIndex * 0.1) + (weekIndex * 0.05) + (topicIndex * 0.02) }}
                                      >
                                        <HiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm">{topic}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA in Modal */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="#contact"
                        className="flex-1 btn btn-primary btn-lg flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCourse(null)}
                      >
                        Enroll Now - ₹{selectedCourse.currentPrice.toLocaleString()}
                      </motion.a>
                      <motion.button
                        className="btn btn-outline btn-lg flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => downloadSyllabus(selectedCourse)}
                      >
                        <HiDownload className="w-5 h-5" />
                        <span>Download Syllabus</span>
                      </motion.button>
                    </div>
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

export default Courses
