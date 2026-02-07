#!/bin/bash
# Deployment script for DC Technologies USA with Payment System

echo "🚀 Deploying DC Technologies USA with Payment Integration..."
echo "============================================================"

# 1. Deploy Frontend
echo ""
echo "📦 Step 1: Deploying frontend..."
sudo cp -r /root/dctechnologies/dist/* /var/www/dctechnologiesusa.com/
echo "✅ Frontend files deployed"

# 2. Update Nginx Configuration
echo ""
echo "⚙️  Step 2: Updating Nginx configuration..."
sudo cp /root/dctechnologies/nginx/dctechnologiesusa.com.conf /etc/nginx/sites-available/dctechnologiesusa.com.conf
sudo nginx -t && sudo systemctl reload nginx
echo "✅ Nginx updated and reloaded"

# 3. Install PM2 if not installed
echo ""
echo "📦 Step 3: Setting up backend process manager..."
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
else
    echo "PM2 already installed"
fi

# 4. Copy production environment file
echo ""
echo "🔐 Step 4: Setting up production environment..."
cp /root/dctechnologies/server/.env.production /root/dctechnologies/server/.env
echo "✅ Production environment configured"

# 5. Start/Restart backend server with PM2
echo ""
echo "🖥️  Step 5: Starting backend server..."
cd /root/dctechnologies/server

# Stop if already running
pm2 stop dctechnologies-backend 2>/dev/null || true
pm2 delete dctechnologies-backend 2>/dev/null || true

# Start with PM2
pm2 start index.js --name dctechnologies-backend --env production

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup | tail -n 1 | bash 2>/dev/null || true

echo "✅ Backend server started"

# 6. Display status
echo ""
echo "============================================================"
echo "✅ Deployment Complete!"
echo "============================================================"
echo ""
echo "🌐 Website: https://dctechnologiesusa.com"
echo "💳 Checkout: https://dctechnologiesusa.com/checkout"
echo "🔧 Backend: https://dctechnologiesusa.com/api/health"
echo ""
echo "📊 Backend Status:"
pm2 status dctechnologies-backend
echo ""
echo "🧪 Test Payment:"
echo "   1. Visit: https://dctechnologiesusa.com/checkout"
echo "   2. Use test card: 4242 4242 4242 4242"
echo "   3. Expiry: 12/34, CVC: 123"
echo ""
echo "📝 View logs:"
echo "   Backend: pm2 logs dctechnologies-backend"
echo "   Nginx: sudo tail -f /var/log/nginx/dctechnologiesusa.com.access.log"
echo ""
echo "⚠️  Note: Using TEST Stripe keys - safe for live testing"
echo "============================================================"
