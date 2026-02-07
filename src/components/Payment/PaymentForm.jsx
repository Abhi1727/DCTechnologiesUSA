import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'

export default function PaymentForm({ amount }) {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)
    setMessage('')

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message)
      } else {
        setMessage('An unexpected error occurred. Please try again.')
      }
    }

    setIsLoading(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement 
        id="payment-element"
        options={{
          layout: 'tabs',
          paymentMethodOrder: ['card', 'klarna', 'afterpay_clearpay', 'affirm', 'zip']
        }}
      />
      
      {message && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {message}
        </div>
      )}

      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all hover:shadow-lg flex items-center justify-center gap-3"
      >
        {isLoading ? (
          <>
            <FaSpinner className="animate-spin text-xl" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Pay ${parseFloat(amount).toFixed(2)}</span>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By confirming your payment, you agree to our terms and conditions
      </p>
    </form>
  )
}
