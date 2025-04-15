import { useState } from 'react'
import CheckoutForm from './components/CheckoutForm'
import OrderSummary from './components/OrderSummary'

function App() {
  return (
    <div className="min-h-screen bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold text-text-dark mb-8">Finalizar compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default App