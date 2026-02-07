# DC Technologies USA - Backend Server

Express.js backend server for handling Stripe payment processing with support for multiple payment methods.

## 🚀 Features

- Stripe Payment Intent creation
- Support for multiple payment methods:
  - Credit/Debit Cards
  - Klarna
  - Afterpay/Clearpay
  - Affirm
  - Zip
- Webhook handling for payment events
- CORS enabled for frontend communication
- Secure payment processing

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

Create a `.env` file in the server directory:

```bash
# Stripe API Keys
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Server Configuration
PORT=3001
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

## 🏃 Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status.

### Create Payment Intent
```
POST /api/create-payment-intent
Content-Type: application/json

{
  "amount": 100.00,
  "currency": "usd",
  "paymentMethodTypes": ["card", "klarna", "afterpay_clearpay", "affirm", "zip"]
}
```
Creates a new payment intent and returns client secret.

### Get Payment Intent
```
GET /api/payment-intent/:id
```
Retrieves payment intent details by ID.

### Get Config
```
GET /api/config
```
Returns Stripe publishable key for frontend.

### Webhook Handler
```
POST /webhook
Content-Type: application/json
Stripe-Signature: [signature]
```
Handles Stripe webhook events.

## 🔐 Security

- Secret keys never exposed to frontend
- Webhook signature verification
- CORS protection
- Environment variable based configuration
- PCI DSS compliant through Stripe

## 📊 Webhook Events Handled

- `payment_intent.succeeded` - Payment successful
- `payment_intent.payment_failed` - Payment failed
- `charge.succeeded` - Charge completed
- `charge.refunded` - Charge refunded

## 🌐 CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173` (development)
- Update `CLIENT_URL` in `.env` for production

## 📝 Dependencies

- `express` - Web framework
- `stripe` - Stripe SDK
- `cors` - CORS middleware
- `dotenv` - Environment variable management

## 🔄 Development

The server uses `nodemon` for automatic restarts during development:

```bash
npm run dev
```

## 🚀 Production Deployment

1. Update environment variables:
   ```bash
   NODE_ENV=production
   STRIPE_SECRET_KEY=sk_live_your_live_key
   CLIENT_URL=https://dctechnologiesusa.com
   ```

2. Setup webhook endpoint in Stripe Dashboard

3. Configure SSL/TLS certificate

4. Deploy to your hosting platform

## 📞 Support

For issues or questions:
- Email: info@dctechnologiesusa.com
- Phone: +1 (888) 591-7999

## ⚠️ Important

- Never commit `.env` file to version control
- Use test keys for development
- Test thoroughly before going live
- Monitor transactions in Stripe Dashboard
