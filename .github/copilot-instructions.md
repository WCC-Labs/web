<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# WCC Labs - React Web Application

This is a modern React web application built for WCC Labs, an educational technology training platform.

## Project Stack
- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, interactive animations
- **Icons**: React Icons (Heroicons)
- **Lottie**: Lottie React for advanced animations

## Design System
- **Colors**: Primary (Blue) and Accent (Purple) gradient themes
- **Typography**: Inter font family
- **Components**: Modern, responsive UI components with glass morphism effects
- **Animations**: Subtle hover effects, smooth transitions, and engaging micro-interactions

## Component Architecture
- **Sections**: Header, Hero, Features, Courses, Placements, Testimonials, Contact, Footer
- **UI Components**: Reusable button variants, cards, forms, and animations
- **Layout**: Mobile-first responsive design with Tailwind breakpoints

## Key Features
- Responsive design optimized for all devices
- Modern animations and micro-interactions
- Interactive course browsing with tabs
- Contact form with validation
- Testimonial carousel
- Company logo showcase
- Professional placement statistics

## Development Guidelines
- Use Tailwind CSS classes for styling
- Implement Framer Motion for animations
- Follow React best practices with hooks
- Maintain consistent component structure
- Use semantic HTML for accessibility
- Optimize images and assets for performance

## Animation Patterns
- `initial={{ opacity: 0, y: 30 }}` for entrance animations
- `whileHover={{ scale: 1.05 }}` for interactive elements
- `transition={{ duration: 0.6 }}` for smooth timing
- Use `viewport={{ once: true }}` for scroll-triggered animations

## Color Usage
- Primary: `bg-primary-600`, `text-primary-600`
- Accent: `bg-accent-600`, `text-accent-600`
- Gradients: `gradient-text` class for text gradients
- Glass effects: `glass-effect` class for backdrop blur

When adding new components or features, maintain consistency with the existing design system and animation patterns.
