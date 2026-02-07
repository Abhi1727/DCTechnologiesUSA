# 🚀 Quick Start - Payment System

## ⚡ 5-Minute Setup

### Step 1: Get Stripe Keys (2 min)
1. Visit: https://dashboard.stripe.com/register
2. Sign up/Login
3. Go to: **Developers → API keys**
4. Copy both keys

### Step 2: Add Keys to .env Files (1 min)

**Frontend** - Edit `/root/dctechnologies/.env`:
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51abc...xyz
VITE_API_URL=http://localhost:3001
```

**Backend** - Edit `/root/dctechnologies/server/.env`:
```bash
STRIPE_PUBLISHABLE_KEY=pk_test_51abc...xyz
STRIPE_SECRET_KEY=sk_test_51abc...xyz
STRIPE_WEBHOOK_SECRET=whsec_abc...xyz
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Step 3: Enable Payment Methods in Stripe (1 min)
1. Go to: **Settings → Payment methods**
2. Enable: Klarna, Afterpay, Affirm, Zip
3. Select region: United States

### Step 4: Run Application (1 min)
```bash
cd /root/dctechnologies
npm run dev:all
```

### Step 5: Test Payment
1. Open: http://localhost:5173/checkout
2. Enter amount: $10.00
3. Click "Continue to Payment"
4. Use test card: 4242 4242 4242 4242
5. Expiry: 12/34, CVC: 123
6. Complete payment ✅

---

## 🧪 Test Cards

| Card Number | Brand | Result |
|-------------|-------|--------|
| 4242 4242 4242 4242 | Visa | Success ✅ |
| 4000 0027 6000 3184 | Visa | 3D Secure |
| 4000 0000 0000 0002 | Visa | Declined ❌ |
| 5555 5555 5555 4444 | Mastercard | Success ✅ |

**For all test cards:**
- Expiry: Any future date (e.g., 12/34)
- CVC: Any 3 digits (e.g., 123)
- ZIP: Any 5 digits (e.g., 12345)

---

## 📍 Key URLs

- **Checkout Page**: http://localhost:5173/checkout
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health
- **Stripe Dashboard**: https://dashboard.stripe.com

---

## 🔍 Verify Setup

```bash
cd /root/dctechnologies/server
npm run verify
```

---

## ❓ Troubleshooting

### Payment form not loading?
- Check `.env` files have correct keys
- Verify backend is running (port 3001)
- Check browser console for errors

### "Invalid API key" error?
- Confirm keys are copied correctly
- No extra spaces in `.env` files
- Using test keys (start with `pk_test_` and `sk_test_`)

### CORS errors?
- Check `CLIENT_URL` in backend `.env`
- Should be: `http://localhost:5173`

### Port already in use?
```bash
# Kill process on port 3001
kill -9 $(lsof -t -i:3001)

# Or change port in server/.env
PORT=3002
```

---

## 📞 Need Help?

- 📧 Email: info@dctechnologiesusa.com
- 📱 Phone: +1 (888) 591-7999
- 📚 Full Guide: [PAYMENT-SETUP.md](./PAYMENT-SETUP.md)
- 🔗 Stripe Docs: https://stripe.com/docs

---

**Ready to accept payments! 💰**
