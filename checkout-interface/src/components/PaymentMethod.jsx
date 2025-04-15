import { FaCreditCard, FaBarcode, FaQrcode } from 'react-icons/fa'

const PaymentMethod = ({ selectedMethod, onSelectMethod }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-text-dark mb-4">Método de pagamento</h3>
      
      <div className="space-y-3">
        <button
          onClick={() => onSelectMethod('credit')}
          className={`flex items-center w-full p-4 rounded-md border ${selectedMethod === 'credit' ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-200'}`}
        >
          <FaCreditCard className={`mr-3 ${selectedMethod === 'credit' ? 'text-primary' : 'text-tertiary'}`} />
          <span className={`font-medium ${selectedMethod === 'credit' ? 'text-primary' : 'text-tertiary'}`}>Cartão de crédito</span>
        </button>
        
        <button
          onClick={() => onSelectMethod('boleto')}
          className={`flex items-center w-full p-4 rounded-md border ${selectedMethod === 'boleto' ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-200'}`}
        >
          <FaBarcode className={`mr-3 ${selectedMethod === 'boleto' ? 'text-primary' : 'text-tertiary'}`} />
          <span className={`font-medium ${selectedMethod === 'boleto' ? 'text-primary' : 'text-tertiary'}`}>Boleto bancário</span>
        </button>
        
        <button
          onClick={() => onSelectMethod('pix')}
          className={`flex items-center w-full p-4 rounded-md border ${selectedMethod === 'pix' ? 'border-primary bg-primary bg-opacity-10' : 'border-gray-200'}`}
        >
          <FaQrcode className={`mr-3 ${selectedMethod === 'pix' ? 'text-primary' : 'text-tertiary'}`} />
          <span className={`font-medium ${selectedMethod === 'pix' ? 'text-primary' : 'text-tertiary'}`}>Pix</span>
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod