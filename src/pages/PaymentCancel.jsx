import { useNavigate } from 'react-router-dom'
import { FaTimesCircle, FaHome, FaRedo } from 'react-icons/fa'
import SEOHead from '../components/SEOHead'

export default function PaymentCancel() {
  const navigate = useNavigate()

  return (
    <>
      <SEOHead
        title="Payment Cancelled - DC Technologies USA"
        description="Your payment was cancelled"
        canonical={`${window.location.origin}/payment-cancel`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            {/* Cancel Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              {/* Cancel Icon */}
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTimesCircle className="text-5xl text-yellow-500" />
              </div>

              {/* Cancel Message */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Payment Cancelled
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your payment was cancelled. No charges have been made to your account.
              </p>

              {/* Info Box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <p className="text-sm text-yellow-800">
                  If you experienced any issues during checkout or have questions about our payment process, 
                  please don't hesitate to contact our support team. We're here to help!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/checkout')}
                  className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaRedo />
                  Try Again
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaHome />
                  Return to Home
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm mb-4">Need assistance?</p>
              <p className="text-sm">
                Email:{' '}
                <a 
                  href="mailto:info@dctechnologiesusa.com" 
                  className="text-primary-500 hover:underline font-semibold"
                >
                  info@dctechnologiesusa.com
                </a>
              </p>
              <p className="text-sm">
                Phone:{' '}
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
