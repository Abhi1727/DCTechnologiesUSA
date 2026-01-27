# SEO Deployment Checklist
## Quick Reference for deploying SEO optimizations

## ✅ PRE-DEPLOYMENT

### 1. Build the Project
```bash
cd /root/dctechnologies
npm run build
```

### 2. Test Build Locally
```bash
npm run preview
```
Visit http://localhost:4173 and verify:
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Images load (or placeholders show)
- [ ] Forms work
- [ ] Navigation works

### 3. Check Generated Files
```bash
ls -lh dist/
```
Verify files exist:
- [ ] dist/index.html
- [ ] dist/assets/ directory
- [ ] Check file sizes are reasonable

## 🚀 DEPLOYMENT

### 4. Backup Current Site
```bash
sudo cp -r /var/www/dctechnologiesusa.com /var/www/dctechnologiesusa.com.backup-$(date +%Y%m%d)
```

### 5. Deploy New Build
```bash
sudo cp -r dist/* /var/www/dctechnologiesusa.com/
sudo chown -R www-data:www-data /var/www/dctechnologiesusa.com/
```

### 6. Verify Static Files
```bash
curl https://dctechnologiesusa.com/robots.txt
curl https://dctechnologiesusa.com/sitemap.xml
```

### 7. Update Nginx Configuration (Optional but Recommended)
```bash
# Backup current config
sudo cp /etc/nginx/sites-available/dctechnologiesusa.com /etc/nginx/sites-available/dctechnologiesusa.com.backup

# Apply new config
sudo cp /root/dctechnologies/nginx/dctechnologiesusa.com.conf /etc/nginx/sites-available/dctechnologiesusa.com

# Test configuration
sudo nginx -t

# If test passes, reload
sudo systemctl reload nginx
```

### 8. Verify Security Headers
```bash
curl -I https://dctechnologiesusa.com | grep -i "x-\|strict\|content-security"
```

Expected headers:
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] X-XSS-Protection
- [x] Strict-Transport-Security (HSTS)
- [x] Content-Security-Policy

## ✅ POST-DEPLOYMENT VERIFICATION

### 9. Test All Pages
Visit and verify each page loads:
- [ ] https://dctechnologiesusa.com/
- [ ] https://dctechnologiesusa.com/services
- [ ] https://dctechnologiesusa.com/who-we-are
- [ ] https://dctechnologiesusa.com/our-team
- [ ] https://dctechnologiesusa.com/contact-us

### 10. Check Meta Tags
View page source (Ctrl+U) and verify:
- [ ] Title tag is optimized
- [ ] Meta description is present
- [ ] Canonical URL is correct
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

### 11. Test Structured Data
Visit: https://search.google.com/test/rich-results
- [ ] Test homepage
- [ ] Test services page
- [ ] Verify no errors

### 12. Mobile-Friendly Test
Visit: https://search.google.com/test/mobile-friendly
- [ ] Test homepage
- [ ] Verify mobile-friendly

### 13. PageSpeed Insights
Visit: https://pagespeed.web.dev/
- [ ] Test https://dctechnologiesusa.com
- [ ] Check Core Web Vitals scores
- [ ] Note improvement areas

### 14. Test Contact Form
- [ ] Fill out and submit contact form
- [ ] Verify validation works
- [ ] Check form submission (if backend connected)

## 📊 ANALYTICS SETUP

### 15. Google Search Console
1. Visit: https://search.google.com/search-console
2. Add property: https://dctechnologiesusa.com
3. Verify ownership
4. Submit sitemap: https://dctechnologiesusa.com/sitemap.xml

### 16. Google Analytics (To Be Done)
```bash
# Install analytics package
npm install react-ga4
```
Then implement in code (see SEO-IMPLEMENTATION-GUIDE.md section 9.1)

## 🔍 MONITORING (First 24 Hours)

### 17. Monitor Logs
```bash
# Check for errors
sudo tail -f /var/log/nginx/dctechnologiesusa.com.error.log

# Check access patterns
sudo tail -f /var/log/nginx/dctechnologiesusa.com.access.log
```

### 18. Check Server Status
```bash
# Nginx status
sudo systemctl status nginx

# SSL certificate status
sudo certbot certificates
```

## ⚠️ ROLLBACK (If Issues Occur)

### Emergency Rollback
```bash
# Restore backup
sudo rm -rf /var/www/dctechnologiesusa.com/*
sudo cp -r /var/www/dctechnologiesusa.com.backup-*/* /var/www/dctechnologiesusa.com/

# Restore old Nginx config
sudo cp /etc/nginx/sites-available/dctechnologiesusa.com.backup /etc/nginx/sites-available/dctechnologiesusa.com
sudo nginx -t
sudo systemctl reload nginx
```

## 📝 NOTES

**Deployment Date:** _______________
**Deployed By:** _______________
**Issues Encountered:** _______________
**Resolution:** _______________

## 🎯 SUCCESS CRITERIA

After deployment, you should have:
- ✅ All pages loading with optimized meta tags
- ✅ Structured data (JSON-LD) on all pages
- ✅ robots.txt and sitemap.xml accessible
- ✅ Enhanced security headers active
- ✅ No broken links or console errors
- ✅ Mobile-friendly confirmation
- ✅ Search Console property set up

## 📞 SUPPORT

If you encounter issues:
1. Check error logs: `/var/log/nginx/dctechnologiesusa.com.error.log`
2. Verify file permissions
3. Test Nginx configuration: `sudo nginx -t`
4. Check SEO-IMPLEMENTATION-GUIDE.md for detailed troubleshooting

---

**Last Updated:** January 22, 2026
