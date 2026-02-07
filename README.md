# DC Technologies USA

> Professional IT Staffing & Technology Recruitment Services

[![Live Website](https://img.shields.io/badge/Live-dctechnologiesusa.com-orange)](https://dctechnologiesusa.com)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)

## 🚀 Live Website

**[https://dctechnologiesusa.com](https://dctechnologiesusa.com)**

## ✨ Features

- ⚡ Lightning fast performance with Vite
- 📱 Fully responsive mobile-first design
- 🔍 Complete SEO optimization
- ♿ WCAG 2.1 accessibility compliant
- 🎨 Modern UI/UX with smooth animations
- 🚀 Production-ready with Nginx & SSL

## 🛠️ Tech Stack

- **React** 18.2.0 - UI Framework
- **Vite** 5.0.8 - Build Tool
- **Tailwind CSS** 3.4.0 - Styling
- **React Router** 7.12.0 - Routing
- **React Icons** 4.12.0 - Icons

## 📁 Project Structure

```
dctechnologies/
├── src/
│   ├── components/        # React components
│   │   ├── About/
│   │   ├── BlogPreview/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Services/
│   │   ├── Stats/
│   │   ├── Testimonials/
│   │   ├── WhyChooseUs/
│   │   ├── ui/           # Reusable UI components
│   │   ├── LazyImage.jsx
│   │   └── SEOHead.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── WhoWeAre.jsx
│   │   ├── OurTeam.jsx
│   │   └── ContactUs.jsx
│   ├── utils/            # Utilities
│   │   ├── constants.js
│   │   ├── seo.js
│   │   └── performance.js
│   ├── assets/           # Static assets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/               # Public assets
│   ├── images/          # Hero images
│   ├── favicon.*        # Favicons
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── docs/                # Documentation
├── nginx/               # Nginx config
└── scripts/             # Build scripts
```

## 🏁 Getting Started

```bash
# Clone repository
git clone https://github.com/Abhi1727/DCTechnologiesUSA.git
cd DCTechnologiesUSA

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📜 Available Scripts

```bash
npm run dev           # Start frontend dev server
npm run dev:server    # Start backend server
npm run dev:all       # Start both frontend & backend
npm run build         # Build for production
npm run preview       # Preview production build
npm run server        # Run backend in production
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
```

## 💳 Payment System

The website now includes a complete Stripe payment integration supporting:

- 💳 **Credit/Debit Cards** - All major cards accepted
- 🇸🇪 **Klarna** - Buy now, pay later (up to $10,000)
- 🟡 **Afterpay** - Split into 4 payments (up to $4,000)
- 💙 **Affirm** - Flexible financing ($50-$30,000)
- ⚡ **Zip** - Pay over time (up to $1,000)

### Quick Start

1. **Get Stripe API keys** from [Stripe Dashboard](https://dashboard.stripe.com)
2. **Configure environment variables**:
   ```bash
   # Frontend .env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   VITE_API_URL=http://localhost:3001
   
   # Backend server/.env
   STRIPE_SECRET_KEY=sk_test_your_key
   ```
3. **Run the application**:
   ```bash
   npm run dev:all
   ```
4. **Access checkout**: http://localhost:5173/checkout

📚 **Detailed setup guide**: See [PAYMENT-SETUP.md](./PAYMENT-SETUP.md)

## 🚀 Deployment

```bash
# Build production bundle
npm run build

# Deploy to server
sudo cp -r dist/* /var/www/dctechnologiesusa.com/
sudo systemctl restart nginx
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📚 Documentation

- [SEO Implementation Guide](docs/SEO-IMPLEMENTATION-GUIDE.md)
- [Mobile Optimization Summary](docs/MOBILE-OPTIMIZATION-SUMMARY.md)
- [Deployment Checklist](docs/DEPLOYMENT-CHECKLIST.md)
- [QA Test Report](QA-TEST-REPORT.md)

## 📊 Performance

- Load Time: < 1s
- Bundle Size: 82 KB (gzipped)
- Lighthouse Score: 90+
- SEO Score: 98/100

## 📝 License

© 2026 DC Technologies USA. All rights reserved.

## 📞 Contact

**Website:** [dctechnologiesusa.com](https://dctechnologiesusa.com)  
**Email:** info@dctechnologiesusa.com
