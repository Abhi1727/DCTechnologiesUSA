#!/usr/bin/env node

/**
 * Quick Setup Verification Script
 * Run this to check if your payment system is configured correctly
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('\n🔍 DC Technologies Payment System - Setup Verification\n');
console.log('='.repeat(60));

let hasErrors = false;
let hasWarnings = false;

// Check if .env files exist
console.log('\n📁 Checking Environment Files...\n');

const frontendEnvPath = join(__dirname, '..', '.env');
const backendEnvPath = join(__dirname, '.env');

if (existsSync(frontendEnvPath)) {
  console.log('✅ Frontend .env file exists');
  const frontendEnv = readFileSync(frontendEnvPath, 'utf-8');
  
  if (frontendEnv.includes('pk_test_your_publishable_key_here')) {
    console.log('⚠️  Warning: Frontend .env still has placeholder Stripe key');
    hasWarnings = true;
  } else if (frontendEnv.includes('VITE_STRIPE_PUBLISHABLE_KEY=pk_')) {
    console.log('✅ Frontend Stripe key is configured');
  } else {
    console.log('❌ Frontend Stripe key not found');
    hasErrors = true;
  }
} else {
  console.log('❌ Frontend .env file not found');
  hasErrors = true;
}

if (existsSync(backendEnvPath)) {
  console.log('✅ Backend .env file exists');
  const backendEnv = readFileSync(backendEnvPath, 'utf-8');
  
  if (backendEnv.includes('sk_test_your_secret_key_here')) {
    console.log('⚠️  Warning: Backend .env still has placeholder Stripe keys');
    hasWarnings = true;
  } else if (backendEnv.includes('STRIPE_SECRET_KEY=sk_')) {
    console.log('✅ Backend Stripe secret key is configured');
  } else {
    console.log('❌ Backend Stripe secret key not found');
    hasErrors = true;
  }
} else {
  console.log('❌ Backend .env file not found');
  hasErrors = true;
}

// Check if node_modules exist
console.log('\n📦 Checking Dependencies...\n');

if (existsSync(join(__dirname, 'node_modules'))) {
  console.log('✅ Backend dependencies installed');
} else {
  console.log('❌ Backend dependencies not installed - Run: cd server && npm install');
  hasErrors = true;
}

const frontendNodeModules = join(__dirname, '..', 'node_modules');
if (existsSync(frontendNodeModules)) {
  console.log('✅ Frontend dependencies installed');
  
  // Check for Stripe packages
  const stripePkg = join(frontendNodeModules, '@stripe');
  if (existsSync(stripePkg)) {
    console.log('✅ Stripe packages installed');
  } else {
    console.log('❌ Stripe packages not found');
    hasErrors = true;
  }
} else {
  console.log('❌ Frontend dependencies not installed - Run: npm install');
  hasErrors = true;
}

// Check required files
console.log('\n📄 Checking Required Files...\n');

const requiredFiles = [
  { path: 'index.js', description: 'Backend server' },
  { path: 'package.json', description: 'Backend package.json' },
  { path: '../src/pages/Checkout.jsx', description: 'Checkout page' },
  { path: '../src/pages/PaymentSuccess.jsx', description: 'Success page' },
  { path: '../src/components/Payment/PaymentForm.jsx', description: 'Payment form' },
];

requiredFiles.forEach(file => {
  const filePath = join(__dirname, file.path);
  if (existsSync(filePath)) {
    console.log(`✅ ${file.description}`);
  } else {
    console.log(`❌ Missing: ${file.description}`);
    hasErrors = true;
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:\n');

if (!hasErrors && !hasWarnings) {
  console.log('✅ Everything looks good! Your payment system is ready.\n');
  console.log('🚀 Next steps:');
  console.log('   1. Add your Stripe API keys to .env files');
  console.log('   2. Run: npm run dev:all');
  console.log('   3. Visit: http://localhost:5173/checkout\n');
} else if (hasErrors) {
  console.log('❌ Setup incomplete. Please fix the errors above.\n');
  console.log('📚 See PAYMENT-SETUP.md for detailed instructions.\n');
} else if (hasWarnings) {
  console.log('⚠️  Setup complete with warnings.\n');
  console.log('🔑 Remember to add your actual Stripe API keys!\n');
  console.log('📚 See PAYMENT-SETUP.md for instructions.\n');
}

console.log('='.repeat(60));
console.log('');

process.exit(hasErrors ? 1 : 0);
