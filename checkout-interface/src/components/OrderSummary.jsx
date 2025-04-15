import { FaCreditCard, FaBarcode, FaQrcode, FaTruck } from 'react-icons/fa'

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold text-text-dark mb-6">Resumo do pedido</h2>
      
      <div className="space-y-6">
        <div className="flex justify-between items-start border-b border-gray-200 pb-4">
          <div className="flex">
            <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
            <div>
              <h3 className="text-sm font-medium text-text-dark">Camiseta Manga Curta</h3>
              <p className="text-xs text-text-light">Quantidade: 1</p>
            </div>
          </div>
          <span className="text-sm font-medium text-text-dark">R$ 100,00</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-text-light">Subtotal</span>
            <span className="text-sm text-text-dark">R$ 100,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-text-light">Desconto</span>
            <span className="text-sm text-highlight">- R$ 0,00</span>
          </div>
          <div className="flex justify-between font-medium text-text-dark pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>R$ 100,00</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-text-dark mb-3">Métodos de pagamento aceitos</h3>
          <div className="flex space-x-3">
            <FaCreditCard className="text-tertiary" />
            <FaBarcode className="text-tertiary" />
            <FaQrcode className="text-tertiary" />
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <FaTruck className="text-tertiary mr-2" />
            <span className="text-sm text-text-light">
              Entrega via <span className="font-medium">Correios</span>
            </span>
          </div>
          <p className="text-sm text-text-light mt-1">Prazo de entrega: até 5 dias úteis</p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary