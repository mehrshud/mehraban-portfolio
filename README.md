# Dr. Mehraban Hamavandy - Professional Portfolio

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![React](https://img.shields.io/badge/react-19.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

> A modern, SEO-optimized, mobile-first portfolio showcasing Dr. Mehraban Hamavandy's expertise in EAL, ESOL, SEND support, and English language education across London and the UK.

## 🌟 Overview

This is a professional portfolio website built with cutting-edge web technologies, designed to showcase Dr. Hamavandy's:

- **17+ years** of teaching and research experience
- PhD in Teaching English as a Second Language (TESL)
- Expertise in EAL, ESOL, SEND, and behaviour support
- Professional translation and interpreting services (Farsi, Kurdish, English)
- Academic publications and research contributions

## ✨ Key Features

### 🎨 Modern Design

- **Glassmorphism UI** with smooth animations and transitions
- **Dark/Light mode** with animated theme switching
- **Custom cursor** effects for enhanced user experience
- **Responsive design** optimized for all devices (mobile-first approach)
- **Parallax scrolling** and interactive elements

### 🚀 Performance & SEO

- **SEO-optimized** with comprehensive meta tags and structured data (JSON-LD)
- **Semantic HTML5** markup for accessibility
- **Optimized images** with lazy loading
- **Fast load times** with code splitting and optimization
- **Mobile-first** responsive design
- **Accessibility features** (ARIA labels, keyboard navigation, reduced motion support)

### 📱 Core Sections

1. **Hero Section** - Eye-catching introduction with availability status
2. **About** - Professional background and specializations
3. **Stats** - Key achievements and metrics with animated counters
4. **Experience** - Timeline of professional journey
5. **Publications** - Research and academic contributions
6. **CV Downloads** - Three specialized CV formats:
   - ESOL Teacher CV (PDF)
   - Teaching Assistant CV (DOCX)
   - Academic Research CV (PDF)
7. **Hamavandy LMS** - Dedicated section promoting the Learning Management System
8. **Contact** - Multiple contact methods with interactive cards

### 🔧 Technical Features

- **React 19.2.0** - Latest React features
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Lucide React** - Beautiful icon system
- **Vite** - Lightning-fast build tool
- **Custom hooks** for scroll reveal, parallax, and mouse tracking
- **Intersection Observer API** for performance-optimized animations
- **LocalStorage** for theme persistence

## 🛠️ Technologies

### Core Stack

- **React 19.2.0** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Styling framework
- **Lucide React 0.554.0** - Icon library

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/mehraban-portfolio.git

# Navigate to project directory
cd mehraban-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
mehraban-portfolio/
├── public/
│   ├── image.png                          # Profile photo
│   ├── Mehraban_Hamavandy_ESOL_CV.pdf    # ESOL CV
│   ├── Mehraban-Hamavandy-TA-CV.docx     # Teaching Assistant CV
│   └── Mehraban-Hamavandy-Research-CV.pdf # Research CV
├── src/
│   ├── App.jsx                            # Main application component
│   ├── main.jsx                           # Entry point
│   ├── index.css                          # Global styles
│   └── assets/                            # Static assets
├── index.html                             # HTML template
├── tailwind.config.js                     # Tailwind configuration
├── vite.config.js                         # Vite configuration
├── postcss.config.js                      # PostCSS configuration
├── package.json                           # Dependencies
└── README.md                              # Documentation
```

## 🎯 SEO Optimization

### Implemented SEO Features

- ✅ **Meta Tags** - Comprehensive title, description, and keywords
- ✅ **Open Graph** - Social media sharing optimization
- ✅ **Structured Data** - JSON-LD Person schema
- ✅ **Semantic HTML** - Proper heading hierarchy and landmarks
- ✅ **Alt Text** - All images have descriptive alt attributes
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Language Tags** - Multi-language support (English, Persian)
- ✅ **Mobile Optimization** - Responsive and mobile-first
- ✅ **Performance** - Fast loading and optimized assets
- ✅ **Accessibility** - WCAG 2.1 AA compliant

### Keywords Targeting

- English: "EAL teacher London", "ESOL tutor", "IELTS teacher", "PhD TESL"
- Persian: "مدرس آیلتس لندن", "معلم زبان انگلیسی", "مترجم فارسی انگلیسی"

## 🌐 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## ♿ Accessibility

- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **Reduced motion** support for users with motion sensitivity
- **High contrast mode** support
- **Screen reader** friendly markup

## 📱 Responsive Breakpoints

```css
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Deployment Platforms

- **Vercel** (Recommended) - Zero-config deployment
- **Netlify** - Simple drag-and-drop
- **GitHub Pages** - Free hosting
- **Cloudflare Pages** - Fast global CDN

### Environment Variables

No environment variables required for basic deployment.

## 🔧 Configuration

### Updating Content

Edit the `CONFIG` object in `src/App.jsx`:

```javascript
const CONFIG = {
  name: "Your Name",
  title: "Your Title",
  contact: {
    email: "your@email.com",
    phone: "+44 1234 567890",
    // ... other contact info
  },
  // ... other configuration
};
```

### Customizing Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#10b981',  // emerald-500
      secondary: '#0ea5e9', // sky-500
    }
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Developed by [OmnilertLab](https://omnilertlab.com)**

A cutting-edge digital solutions provider specializing in:

- Modern web applications
- SEO-optimized websites
- Custom development solutions
- User experience design

## 📞 Support & Contact

For technical support or inquiries about this portfolio:

- **Email**: support@omnilertlab.com
- **Website**: [omnilertlab.com](https://omnilertlab.com)

For professional inquiries about Dr. Hamavandy:

- **Email**: hamavandy.me@gmail.com
- **LinkedIn**: [Dr. Mehraban Hamavandy](https://www.linkedin.com/in/mehraban-hamavandy-9753b161)

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For beautiful open-source icons
- **Vite** - For the blazing-fast build tool

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Mobile-friendly**: Yes
- **HTTPS**: Required

## 🔄 Updates & Maintenance

This portfolio is actively maintained and updated with:

- Latest security patches
- Performance optimizations
- New features and improvements
- Content updates

## 🐛 Known Issues

No known issues at this time. If you encounter any problems, please report them.

## 🎓 Learning Resources

Built with modern web development practices following:

- React best practices
- Accessibility guidelines (WCAG 2.1)
- SEO best practices
- Performance optimization techniques
- Mobile-first responsive design principles

---

**Last Updated**: November 2025  
**Version**: 2.0.0  
**Status**: Active Development

---

Made with ❤️ by [OmnilertLab](https://omnilertlab.com) for Dr. Mehraban Hamavandy
