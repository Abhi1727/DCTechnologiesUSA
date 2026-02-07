import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { FaShieldAlt, FaLock, FaCreditCard, FaCheckCircle } from 'react-icons/fa'
import { pageSEO } from '../utils/seo'

export default function Checkout() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const paymentMethods = [
    {
      id: 'card',
      name: 'Cards',
      renderLogo: () => (
        <div className="flex flex-col items-center gap-1">
          <FaCreditCard className="text-4xl text-blue-700" />
          <div className="flex gap-1.5">
            <span className="text-xs font-extrabold text-blue-700">VISA</span>
            <span className="text-xs font-extrabold text-orange-600">MC</span>
            <span className="text-xs font-extrabold text-blue-800">AMEX</span>
          </div>
        </div>
      )
    },
    {
      id: 'klarna',
      name: 'Klarna',
      renderLogo: () => (
        <div className="text-center">
          <span className="text-3xl font-black tracking-tight" style={{ color: '#FF85C0' }}>Klarna</span>
          <div className="text-xs font-bold text-gray-700 mt-1">Pay in 4</div>
        </div>
      )
    },
    {
      id: 'afterpay_clearpay',
      name: 'Afterpay',
      renderLogo: () => (
        <div className="text-center">
          <div>
            <span className="text-2xl font-black" style={{ color: '#00C8BE' }}>after</span>
            <span className="text-2xl font-black" style={{ color: '#00C8BE' }}>pay</span>
          </div>
          <div className="text-xs font-bold text-gray-700 mt-1">4 payments</div>
        </div>
      )
    },
    {
      id: 'affirm',
      name: 'Affirm',
      renderLogo: () => (
        <div className="text-center">
          <span className="text-3xl font-black text-blue-700">affirm</span>
          <div className="text-xs font-bold text-gray-700 mt-1">Monthly pay</div>
        </div>
      )
    },
    {
      id: 'zip',
      name: 'Zip',
      renderLogo: () => (
        <div className="text-center">
          <span className="text-3xl font-black text-gray-900">Zip</span>
          <div className="text-xs font-bold text-gray-700 mt-1">Pay later</div>
        </div>
      )
    }
  ]

  const handlePaymentMethodSelect = async (methodId) => {
    setError('')

    const numAmount = parseFloat(amount)
    
    if (isNaN(numAmount) || numAmount < 1) {
      setError('Please enter a valid amount (minimum $1.00)')
      return
    }

    if (numAmount > 999999) {
      setError('Maximum amount is $999,999.00')
      return
    }

    setSelectedMethod(methodId)
    setIsLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: numAmount,
          currency: 'usd',
          paymentMethodType: methodId
        }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setIsLoading(false)
        setSelectedMethod(null)
        return
      }

      // Redirect to Stripe Checkout or payment page
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Unable to process payment. Please try again.')
        setIsLoading(false)
        setSelectedMethod(null)
      }
    } catch (err) {
      console.error('Payment error:', err)
      setError('Failed to initialize payment. Please try again.')
      setIsLoading(false)
      setSelectedMethod(null)
    }
  }

  return (
    <>
      <SEOHead
        title="Secure Checkout - DC Technologies USA"
        description="Complete your payment securely with multiple payment options including Klarna, Afterpay, Affirm, and Zip."
        canonical={`${window.location.origin}/checkout`}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <FaLock className="text-5xl mx-auto mb-4 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Secure Checkout
              </h1>
              <p className="text-xl text-primary-100">
                Complete your payment securely with flexible payment options
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Side - Payment Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-secondary-700 mb-6">
                      Payment Details
                    </h2>
                    
                    {/* Amount Input */}
                    <div className="mb-6">
                      <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount (USD) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-semibold">
                          $
                        </span>
                        <input
                          type="number"
                          id="amount"
                          step="0.01"
                          min="1"
                          max="999999"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full pl-10 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-6">
                        {error}
                      </div>
                    )}

                    {/* Payment Method Selection */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                        Available Payment Methods
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            onClick={() => handlePaymentMethodSelect(method.id)}
                            disabled={isLoading}
                            className={`p-4 border-2 border-gray-200 rounded-lg text-center transition-all hover:border-primary-500 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${
                              selectedMethod === method.id && isLoading ? 'border-primary-500 bg-primary-50' : ''
                            }`}
                          >
                            <div className="h-12 flex items-center justify-center mb-2">
                              {method.renderLogo()}
                            </div>
                            {isLoading && selectedMethod === method.id && (
                              <div className="mt-2 flex justify-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <p className="text-xs text-gray-500 text-center">
                        By confirming your payment, you agree to our terms and conditions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Security Info */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
                    <h3 className="text-lg font-bold text-secondary-700 mb-4">
                      Secure Payment
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaLock className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">
                            SSL Encrypted
                          </h4>
                          <p className="text-xs text-gray-600">
                            Your data is protected with 256-bit encryption
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaShieldAlt className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">
                            PCI Compliant
                          </h4>
                          <p className="text-xs text-gray-600">
                            Meets highest security standards
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">
                            Powered by Stripe
                          </h4>
                          <p className="text-xs text-gray-600">
                            Trusted by millions worldwide
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">
                        Buy Now, Pay Later
                      </h4>
                      <p className="text-xs text-gray-600 mb-3">
                        Split your payment into flexible installments with Klarna, Afterpay, Affirm, or Zip at checkout.
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• No hidden fees</li>
                        <li>• Instant approval</li>
                        <li>• Flexible terms</li>
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <p className="text-xs text-gray-500">
                        Need help? Contact us at{' '}
                        <a
                          href="mailto:info@dctechnologiesusa.com"
                          className="text-primary-500 hover:underline"
                        >
                          info@dctechnologiesusa.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
