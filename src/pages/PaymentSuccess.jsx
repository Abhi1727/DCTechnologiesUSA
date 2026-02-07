import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaCheckCircle, FaSpinner, FaHome, FaEnvelope } from 'react-icons/fa'
import SEOHead from '../components/SEOHead'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [paymentData, setPaymentData] = useState(null)
  const [error, setError] = useState(null)

  const paymentIntentId = searchParams.get('payment_intent')
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!paymentIntentId && !sessionId) {
      setError('No payment information found')
      setLoading(false)
      return
    }

    // Verify payment status
    const verifyPayment = async () => {
      try {
        let data
        if (sessionId) {
          // Checkout Session payment
          const response = await fetch(
            `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}/api/checkout-session/${sessionId}`
          )
          data = await response.json()
          
          if (data.payment_status === 'paid') {
            setPaymentData({
              id: data.id,
              amount: data.amount_total,
              status: 'succeeded',
              created: Math.floor(new Date(data.created * 1000).getTime() / 1000),
              payment_method: data.payment_method_types?.[0] || 'card'
            })
          } else {
            setError('Payment verification failed')
          }
        } else {
          // Payment Intent payment
          const response = await fetch(
            `${import.meta.env.VITE_API_URL || 'http://localhost:3002'}/api/payment-intent/${paymentIntentId}`
          )
          data = await response.json()
          
          if (data.status === 'succeeded') {
            setPaymentData(data)
          } else {
            setError('Payment verification failed')
          }
        }
      } catch (err) {
        console.error('Error verifying payment:', err)
        setError('Failed to verify payment')
      } finally {
        setLoading(false)
      }
    }

    verifyPayment()
  }, [paymentIntentId, sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-6xl text-primary-500 animate-spin mx-auto mb-4" />
          <p className="text-xl text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Error</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title="Payment Successful - DC Technologies USA"
        description="Your payment has been processed successfully"
        canonical={`${window.location.origin}/payment-success`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            {/* Success Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              {/* Success Icon */}
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <FaCheckCircle className="text-5xl text-green-500" />
              </div>

              {/* Success Message */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your payment. Your transaction has been completed successfully.
              </p>

              {/* Payment Details */}
              {paymentData && (
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                  <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                    Payment Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-mono text-sm text-gray-900">
                        {paymentData.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Paid:</span>
                      <span className="font-bold text-xl text-primary-500">
                        ${(paymentData.amount / 100).toFixed(2)} USD
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        Paid
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="text-gray-900">
                        {new Date(paymentData.created * 1000).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirmation Message */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Confirmation Email Sent
                    </h3>
                    <p className="text-sm text-blue-700">
                      A receipt has been sent to your email address. Please check your inbox.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaHome />
                  Return to Home
                </button>
                <button
                  onClick={() => navigate('/contact-us')}
                  className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all"
                >
                  Contact Support
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm">
                Questions about your payment? Contact us at{' '}
                <a 
                  href="mailto:info@dctechnologiesusa.com" 
                  className="text-primary-500 hover:underline font-semibold"
                >
                  info@dctechnologiesusa.com
                </a>
                {' '}or call{' '}
                <a 
                  href="tel:+18885917999" 
                  className="text-primary-500 hover:underline font-semibold"
                >
                  +1 (888) 591-7999
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
