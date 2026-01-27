# DC Technologies USA Website

Production website for DC Technologies USA - Professional staffing and workforce solutions.

## 🚀 Deployment Instructions

### Option 1: Deploy to Netlify (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy the site**:
   ```bash
   cd /root/dctechnologies
   netlify deploy --prod --dir=dist
   ```

3. **Configure your domain**:
   - Go to Netlify Dashboard → Domain Settings
   - Add custom domain: `dctechnologiesusa.com`
   - Follow DNS configuration instructions

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd /root/dctechnologies
   vercel --prod
   ```

3. **Add custom domain**:
   - Go to Vercel Dashboard → Project Settings → Domains
   - Add `dctechnologiesusa.com`

### Option 3: Deploy to GitHub Pages

1. **Create repository and push code**:
   ```bash
   cd /root/dctechnologies
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/dctechnologies.git
   git push -u origin main
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to package.json scripts**:
   ```json
   "homepage": "https://dctechnologiesusa.com",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting (cPanel, Hostinger, etc.)

1. **Upload files via FTP**:
   - Connect to your hosting via FTP/SFTP
   - Upload all files from the `dist/` folder to your `public_html` or `www` directory

2. **Configure domain**:
   - Point your domain DNS to your hosting server
   - A Record: Your server IP
   - Wait for DNS propagation (up to 48 hours)

### Option 5: AWS S3 + CloudFront

1. **Upload to S3**:
   ```bash
   aws s3 sync dist/ s3://dctechnologiesusa.com --delete
   ```

2. **Configure S3 bucket for static website hosting**

3. **Set up CloudFront distribution**

4. **Configure Route 53 or your DNS provider**

## 📦 Production Files

The production build is located in the `dist/` folder:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Optimized CSS and JavaScript files

## 🔧 DNS Configuration

For `dctechnologiesusa.com`:

**A Record:**
```
Type: A
Name: @
Value: [Your hosting IP or CDN IP]
TTL: 3600
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: dctechnologiesusa.com
TTL: 3600
```

## 📝 Post-Deployment Checklist

- [ ] Verify website loads at dctechnologiesusa.com
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify contact information is correct
- [ ] Test form submissions (if applicable)
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure redirects (www to non-www or vice versa)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Submit sitemap to search engines

## 🔒 SSL/HTTPS

Most modern hosting platforms (Netlify, Vercel, Cloudflare) provide free SSL certificates automatically.

For traditional hosting:
- Use Let's Encrypt (free)
- Or purchase SSL from your hosting provider

## 📊 Website Performance

The built files are optimized:
- Minified CSS and JavaScript
- Optimized assets
- Gzip compression ready
- Fast loading times

## 🆘 Support

If you need help with deployment, contact your hosting provider's support team with these files.
