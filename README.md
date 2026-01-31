# Mohan Prasath | Portfolio

A cutting-edge, immersive, responsive personal portfolio website featuring a premium black theme with cinematic animations and smooth scrolling.

## ✨ Features

### Design
- **Pure Black Theme** (#000) - Maximum contrast and elegance
- **Fluid Typography** - Responsive text sizing using CSS clamp()
- **Minimal UI** - Clean, distraction-free interface
- **Custom Cursor** - Interactive cursor with hover effects
- **Dynamic Favicon** - SVG-based favicon with initials

### Animations
- **GSAP + ScrollTrigger** - Professional-grade animations
- **Lenis Smooth Scroll** - Butter-smooth scrolling experience
- **Horizontal Scroll Gallery** - Innovative projects section inspired by premium portfolios
- **Parallax Effects** - Depth-rich layered scrolling
- **Reveal Animations** - Elements animate into view on scroll
- **Floating Particles** - Atmospheric background effects in hero section

### Sections
1. **Hero** - Cinematic landing with animated typography and particles
2. **About** - Introduction with animated stats and skill icons (Python, JavaScript, React, TensorFlow, Node.js, Docker, AWS, Git)
3. **Projects** - Horizontal scroll gallery with 6 sample projects:
   - Neural Vision AI (ML/Computer Vision)
   - ShopFlow Commerce (Full Stack E-commerce)
   - ConvoAI Assistant (NLP/Chatbot)
   - DataPulse Analytics (Data Visualization)
   - FitTrack Pro (Mobile Development)
   - NFT Marketplace (Web3/Blockchain)
4. **Experience** - Animated timeline with 4 positions
5. **Contact** - Minimal form with social links (GitHub, LinkedIn, Twitter, Email)

## 🚀 Quick Start

### Option 1: Direct Browser Opening
Simply open `index.html` in your browser:
```
Double-click index.html
```

### Option 2: Local Development Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```bash
# Install live-server globally
npm install -g live-server

# Run in project directory
live-server
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## 📁 Project Structure

```
PV-3/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # Animations & interactions
├── assets/             # Images and media
└── README.md           # Documentation
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling, Grid, Flexbox |
| JavaScript (ES6+) | Interactivity |
| GSAP 3.12 | Professional animations |
| ScrollTrigger | Scroll-based animations |
| Lenis | Smooth scroll library |

## 📚 CDN Dependencies

All libraries are loaded via CDN for easy setup:

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-bg: #000000;
    --color-text: #ffffff;
    --color-text-muted: #888888;
    --color-accent: #ffffff;
}
```

### Typography
```css
:root {
    --font-primary: 'Space Grotesk', sans-serif;
    --font-secondary: 'Inter', sans-serif;
}
```

### Animation Timing
```css
:root {
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 🔧 Customizing Content

### Personal Information
Update these sections in `index.html`:

1. **Hero Section** - Name and tagline
2. **About Section** - Bio, stats, and skills
3. **Projects Section** - Portfolio items
4. **Experience Section** - Work history
5. **Contact Section** - Email and social links

### Adding Projects
Add new project cards in the projects grid:
```html
<article class="project-card" data-project="5">
    <div class="project-image">
        <div class="project-overlay"></div>
        <div class="project-placeholder">
            <span>NEW</span>
        </div>
    </div>
    <div class="project-content">
        <span class="project-category">Category</span>
        <h3 class="project-title">Project Title</h3>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech</span>
        </div>
        <div class="project-links">
            <!-- Links -->
        </div>
    </div>
</article>
```

### Adding Experience
Add new timeline items:
```html
<div class="timeline-item" data-year="2025">
    <div class="timeline-marker">
        <div class="marker-dot"></div>
    </div>
    <div class="timeline-content">
        <span class="timeline-date">2025 - Present</span>
        <h3 class="timeline-title">Job Title</h3>
        <span class="timeline-company">Company Name</span>
        <p class="timeline-description">Description...</p>
        <div class="timeline-tags">
            <span class="timeline-tag">Skill</span>
        </div>
    </div>
</div>
```

## ⚡ Performance Tips

1. **Optimize Images** - Use WebP format and appropriate sizes
2. **Lazy Loading** - Add `loading="lazy"` to images
3. **Preload Fonts** - Consider preloading critical fonts
4. **Minify Assets** - Minify CSS/JS for production

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion support (`prefers-reduced-motion`)
- Focus states for all interactive elements

## 🌟 Enhancement Ideas

1. **Add Project Images** - Replace placeholders with actual screenshots
2. **Blog Section** - Add a blog/articles section
3. **Dark/Light Mode Toggle** - Add theme switching
4. **Project Detail Pages** - Create individual project pages
5. **Contact Form Backend** - Connect to Formspree, Netlify Forms, etc.
6. **Analytics** - Add Google Analytics or Plausible
7. **SEO Optimization** - Add meta tags, Open Graph, structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Mohan Prasath**
- Email: mohanprasath210607@gmail.com
- GitHub: [github.com/mohanprasath-dev](https://github.com/mohanprasath-dev)
- LinkedIn: [linkedin.com/in/mohanprasath21](https://linkedin.com/in/mohanprasath21)

---

⭐ If you found this helpful, please give it a star!

Built with ❤️ by Mohan Prasath