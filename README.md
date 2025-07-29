
# WCC Labs - Modern React Website

A modern, responsive React web application for WCC Labs - India's leading technology training platform. Built with cutting-edge technologies and featuring beautiful animations, interactive components, and an optimized mobile-first design with collapsible content sections.

## Features

- **Modern Design**: Clean, professional interface with gradient themes and glass morphism effects
- **Mobile-First Responsive**: Optimized for all devices with swipeable course carousels and collapsible content sections on mobile
- **Swipeable Course Display**: Mobile users can swipe left/right through course cards for an intuitive browsing experience
- **On-Demand Content**: Mobile users can expand sections like features and contact details when needed
- **Smooth Animations**: Framer Motion powered micro-interactions and page transitions
- **Interactive Components**: Dynamic course cards, collapsible information panels, and contact forms
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **Accessibility**: Semantic HTML and ARIA compliance

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons)
- **Lottie Animations**: Lottie React for advanced animations
- **Build Tool**: Vite for fast development and building

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Design System

### Colors
- **Primary**: Blue gradient (`primary-50` to `primary-900`)
- **Accent**: Purple gradient (`accent-50` to `accent-900`)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Cards**: Hover effects with subtle shadows
- **Forms**: Clean inputs with focus states
- **Animations**: Consistent timing and easing


## Key Sections

1. **Hero Section**: Eye-catching landing area with collapsible animated statistics on mobile
2. **About**: Company story with expandable core values and impact metrics
3. **Features**: Interactive feature cards with mobile-collapsible display
4. **Courses**: Dynamic course showcase with swipeable mobile carousel and desktop grid
5. **Placements**: Success stories and hiring partner logos
6. **Contact**: Priority contact form with expandable contact details on mobile
7. **Footer**: Complete site links and social media

## Customization

### Adding New Courses
Edit the courses array in `src/components/sections/Courses.jsx`:

```javascript
const courses = {
  popular: [
    {
      title: 'New Course',
      description: 'Course description',
      duration: '6 Months',
      // ... other properties
    }
  ]
}
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Performance Tips

- Images are optimized for web
- Animations use CSS transforms for better performance
- Components are loaded efficiently
- Tailwind CSS is purged for production

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server

## 📄 License

This project is licensed under the MIT License.

## 📞 Support
For support and questions:
- Email: info@wcclabs.com
- Phone: +91-9455966988
- Website: [WCC Labs](https://wcclabs.com)

---

Built with ❤️ by WCC Labs Team
