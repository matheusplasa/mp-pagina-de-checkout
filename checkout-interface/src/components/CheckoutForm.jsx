import { useState } from 'react'
import PaymentMethod from './PaymentMethod'
import CreditCardForm from './CreditCardForm'
import BoletoForm from './BoletoForm'
import PixForm from './PixForm'

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold text-text-dark mb-6">Complete seu pedido</h2>
      
      <PaymentMethod 
        selectedMethod={paymentMethod}
        onSelectMethod={setPaymentMethod}
      />
      
      {paymentMethod === 'credit' && <CreditCardForm />}
      {paymentMethod === 'boleto' && <BoletoForm />}
      {paymentMethod === 'pix' && <PixForm />}
      
      <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition mt-6">
        Finalizar pagamento
      </button>
    </div>
  )
}

export default CheckoutForm