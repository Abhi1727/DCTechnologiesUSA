// Stripe Configuration Helper
// Run this in your browser console on the checkout page to verify Stripe is loaded

console.log('%c🔍 Stripe Configuration Check', 'color: #635BFF; font-size: 20px; font-weight: bold;');
console.log('');

// Check if Stripe is loaded
if (typeof window.Stripe !== 'undefined') {
  console.log('✅ Stripe.js library loaded');
} else {
  console.log('❌ Stripe.js library NOT loaded');
}

// Check environment variables
console.log('\n📋 Environment Variables:');
console.log('API URL:', import.meta.env.VITE_API_URL || 'Not set');
console.log('Stripe Key:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY?.substring(0, 20) + '...' || 'Not set');

// Test API connection
console.log('\n🔌 Testing API Connection...');
fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/health`)
  .then(res => res.json())
  .then(data => {
    console.log('✅ Backend API is reachable:', data);
  })
  .catch(err => {
    console.log('❌ Backend API error:', err.message);
  });

// Test config endpoint
fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/config`)
  .then(res => res.json())
  .then(data => {
    console.log('✅ Stripe config loaded:', data);
  })
  .catch(err => {
    console.log('❌ Config endpoint error:', err.message);
  });

console.log('\n💡 Tip: Check the Network tab in DevTools for API requests');
