# Payment Method Selection Flow

## Overview
The checkout process now allows customers to select their preferred payment method upfront, then redirects them to the specific payment provider's portal to complete the transaction.

## How It Works

### Step 1: Enter Amount
- Customer enters the payment amount (minimum $1.00)
- Validates the amount and proceeds to payment method selection

### Step 2: Select Payment Method
Customer chooses from 5 payment options:

1. **Credit/Debit Cards**
   - Visa, Mastercard, American Express, Discover
   - Redirects to Stripe's card payment page

2. **Klarna**
   - Pay in 4 interest-free installments
   - Redirects to Klarna's portal for approval

3. **Afterpay**
   - Buy now, pay later in 4 installments
   - Redirects to Afterpay's portal

4. **Affirm**
   - Monthly payments with flexible terms
   - Redirects to Affirm's portal

5. **Zip**
   - Pay over time with no interest
   - Redirects to Zip's portal

### Step 3: Payment Processing
- Backend creates a Stripe Checkout Session with the selected payment method
- Customer is redirected to Stripe's hosted checkout page
- Stripe handles the redirect to the specific payment provider (Klarna, Afterpay, etc.)
- Customer completes payment on the provider's secure portal

### Step 4: Return to Site
- After successful payment: Redirected to `/payment-success?session_id={CHECKOUT_SESSION_ID}`
- After cancelled payment: Redirected to `/payment-cancel`

## Technical Implementation

### Frontend (`/src/pages/Checkout.jsx`)
- Two-step UI: Amount entry → Payment method selection
- Visual payment method cards with logos
- Calls `/api/create-payment-intent` with `paymentMethodType` parameter

### Backend (`/server/index.js`)
- Creates Stripe Checkout Session when `paymentMethodType` is specified
- Returns `session.url` for redirect
- Supported payment method types:
  - `card` - Credit/Debit cards
  - `klarna` - Klarna
  - `afterpay_clearpay` - Afterpay
  - `affirm` - Affirm
  - `zip` - Zip

### Success Page (`/src/pages/PaymentSuccess.jsx`)
- Handles both `session_id` (Checkout Session) and `payment_intent` (direct payment)
- Retrieves payment details from backend
- Displays transaction confirmation

## API Endpoints

### POST `/api/create-payment-intent`
Creates a payment intent or checkout session.

**Request Body:**
```json
{
  "amount": 100.00,
  "currency": "usd",
  "paymentMethodType": "klarna"  // Optional: card, klarna, afterpay_clearpay, affirm, zip
}
```

**Response (with paymentMethodType):**
```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_...",
  "sessionId": "cs_test_..."
}
```

**Response (without paymentMethodType):**
```json
{
  "clientSecret": "pi_..._secret_...",
  "paymentIntentId": "pi_..."
}
```

### GET `/api/checkout-session/:id`
Retrieves checkout session details.

**Response:**
```json
{
  "id": "cs_test_...",
  "payment_status": "paid",
  "amount_total": 10000,
  "created": 1675886400,
  "payment_method_types": ["klarna"]
}
```

## User Experience Flow

1. User clicks "Pay Now" in header
2. Enters payment amount → "Continue to Payment Method"
3. Sees 5 payment method options with logos and descriptions
4. Clicks on preferred method (e.g., "Klarna")
5. Shows "Processing..." indicator
6. Redirected to Stripe's checkout page
7. Stripe redirects to Klarna's portal
8. User completes payment on Klarna
9. Redirected back to success page with transaction details

## Benefits

✅ **Clear Choice**: Customers know upfront what payment method they'll use  
✅ **Provider Branding**: Each method shows its logo and description  
✅ **Seamless Redirects**: Automatic routing to provider portals  
✅ **Unified Experience**: All providers work through Stripe infrastructure  
✅ **Live Payments**: Using live Stripe keys for real transactions  

## Testing

### Test Cards (Stripe Test Mode)
- Visa: `4242 4242 4242 4242`
- Mastercard: `5555 5555 5555 4444`
- Any future expiry date and CVC

### BNPL Testing
For Klarna, Afterpay, Affirm, and Zip, Stripe provides test credentials in their documentation.

## Environment Variables

### Frontend (`.env`)
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
VITE_API_URL=https://dctechnologiesusa.com
```

### Backend (`/server/.env`)
```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
CLIENT_URL=https://dctechnologiesusa.com
PORT=3002
NODE_ENV=production
```

## Deployment

```bash
# Backend restart
pm2 restart dctechnologies-backend

# Frontend build and deploy
npm run build
sudo cp -r dist/* /var/www/dctechnologiesusa.com/
```

## Security Features

- 🔒 SSL/TLS encryption on all connections
- 🛡️ PCI DSS compliant through Stripe
- ✅ No sensitive payment data stored on our servers
- 🔐 Stripe handles all payment processing
- 📝 Transaction IDs logged for audit trail

## Future Enhancements

- [ ] Add PayPal integration
- [ ] Save preferred payment method for returning customers
- [ ] Email receipts automatically
- [ ] Database integration for payment records
- [ ] Admin dashboard for payment monitoring
- [ ] Refund functionality
- [ ] Subscription/recurring payments
