const fs = require('fs')
const path = require('path')

/**
 * Sitemap Generator Script
 * Run this script to automatically generate sitemap.xml
 * Usage: node scripts/generate-sitemap.js
 */

const baseUrl = 'https://dctechnologiesusa.com'
const today = new Date().toISOString().split('T')[0]

const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/services', priority: 0.9, changefreq: 'monthly' },
  { url: '/who-we-are', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact-us', priority: 0.8, changefreq: 'monthly' },
  { url: '/our-team', priority: 0.7, changefreq: 'monthly' },
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>
`

  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')

  fs.writeFileSync(sitemapPath, sitemap.trim())
  console.log(`✓ Sitemap generated successfully at ${sitemapPath}`)
  console.log(`✓ Total URLs: ${pages.length}`)
}

try {
  generateSitemap()
} catch (error) {
  console.error('Error generating sitemap:', error)
  process.exit(1)
}
