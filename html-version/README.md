# AgriLegacy HTML Version

This is the standalone HTML version of the AgriLegacy website with full mobile responsiveness.

## 📁 Structure

```
html-version/
├── css/
│   └── style.css          # Responsive styles (same as Vue version)
├── js/
│   └── main.js            # Interactive features
├── home.html              # Homepage
├── Livestock.html         # Livestock management page
├── aquaculture.html       # Aquaculture page
├── crop.html              # Crop planning page
├── services.html          # Services page
├── sustainability.html    # Sustainability page
├── reviews.html           # Reviews page
├── insights.html          # Blog/Insights page
└── contact.html           # Contact page
```

## 🚀 How to Use

### Option 1: Open Directly
Simply open any `.html` file in your web browser.

### Option 2: Use a Local Server
For better performance and to avoid CORS issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000/home.html`

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ Custom cursor animation
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Interactive carousel on homepage
- ✅ FAQ accordion
- ✅ Touch-friendly buttons (44px minimum)

## 📱 Mobile Responsiveness

The HTML version includes all the mobile fixes:
- Responsive breakpoints: 768px, 480px, 360px
- Optimized typography scaling
- Touch-friendly navigation
- Proper spacing and padding
- No horizontal scrolling
- Accessible touch targets

## 🎨 Customization

### Change Colors
Edit `css/style.css` and modify the CSS variables:

```css
:root {
  --accent-gold: #d4af37;
  --accent: #2d6a4f;
  /* ... more variables */
}
```

### Add New Pages
1. Copy an existing HTML file
2. Update the content
3. Add links in the navigation

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and `/html-version` folder
4. Your site will be live!

### Netlify/Vercel
1. Drag and drop the `html-version` folder
2. Site deployed instantly!

### Traditional Hosting
Upload all files via FTP to your web host.

## 📝 Notes

- All external resources (fonts, icons) are loaded from CDNs
- Images are hosted on external URLs
- No build process required
- Works offline (except for external resources)

## 🔗 Links

- Vue Version: `../` (parent directory)
- GitHub: https://github.com/ymoshood868-a11y/agrilegacy-vue

---

**Built with ❤️ by AgriLegacy Team**
