# Sam's Pawn Shop - Griffin GA

A modern, responsive website for Sam's Pawn Shop in Griffin, Georgia. Built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🌟 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Professional design with smooth animations
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **PWA Ready** - Progressive Web App with manifest
- **Contact Form** - Functional contact form with validation
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Fast Loading** - Optimized for performance

## 📁 Project Structure

```
sam-pawn-shop/
├── public/                 # Production files
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   ├── favicon.ico        # Website favicon
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
├── assets/                # Development assets (if any)
├── README.md             # This file
└── .gitignore           # Git ignore file
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/sam-pawn-shop.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   `https://yourusername.github.io/sam-pawn-shop`

### Option 2: Netlify (Recommended - Free)

1. **Deploy via Netlify UI**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Set build command: (leave empty)
   - Set publish directory: `public`
   - Click "Deploy site"

2. **Or deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --dir=public --prod
   ```

3. **Custom Domain Setup**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., samspawnshopgriffin.com)
   - Follow DNS instructions

### Option 3: Vercel (Free)

1. **Deploy via Vercel UI**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Set root directory to `public`
   - Click "Deploy"

2. **Or deploy via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

## 🌐 Custom Domain Setup

### For GoDaddy:

1. **In GoDaddy DNS Settings:**
   - Add A record: `@` → `75.2.60.5` (Netlify IP)
   - Add CNAME record: `www` → `your-site.netlify.app`

2. **In Netlify/Vercel:**
   - Add your domain in domain settings
   - Update DNS records as instructed

### For Namecheap:

1. **In Namecheap DNS Settings:**
   - Add A record: `@` → `75.2.60.5` (Netlify IP)
   - Add CNAME record: `www` → `your-site.netlify.app`

2. **In Netlify/Vercel:**
   - Add your domain in domain settings
   - Update DNS records as instructed

## 🔧 Customization

### Update Business Information:
- Edit `public/index.html` to update:
  - Business name and contact info
  - Services and descriptions
  - Testimonials
  - FAQ content

### Update SEO:
- Modify meta tags in `<head>` section
- Update `sitemap.xml` with your domain
- Update `robots.txt` with your domain

### Update PWA:
- Edit `public/manifest.json` for app details
- Replace favicon files in `public/` directory

## 📱 PWA Features

The website includes:
- **Manifest file** for app-like experience
- **Service worker** ready for offline functionality
- **App icons** for home screen installation
- **Theme colors** matching the brand

## 🔍 SEO Features

- **Meta tags** for social sharing
- **Structured data** for search engines
- **Sitemap** for better indexing
- **Robots.txt** for crawler guidance
- **Fast loading** for better rankings

## 🎨 Design Features

- **Responsive grid layouts**
- **Smooth animations** and transitions
- **Professional color scheme**
- **Modern typography** (Inter font)
- **Accessibility compliant**

## 📞 Support

For questions or issues:
- Email: [your-email@example.com]
- Phone: (770) 228-9333

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Sam's Pawn Shop - Griffin, GA** 