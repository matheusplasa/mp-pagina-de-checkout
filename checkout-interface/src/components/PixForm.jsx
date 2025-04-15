import { FaCopy } from 'react-icons/fa'

const PixForm = () => {
  return (
    <div className="space-y-6">
      <div className="bg-secondary p-4 rounded-md">
        <p className="text-sm text-text-light mb-4">
          O pagamento via Pix é processado instantaneamente. Após a confirmação, seu pedido será processado.
        </p>
        
        <div className="flex justify-center mb-4">
          <div className="w-48 h-48 bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-text-light">QR Code</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Chave Pix copia e cola</label>
          <div className="relative">
            <input 
              type="text" 
              value="00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-4266554400005204000053039865405100.005802BR5913Fulano de Tal6008BRASILIA62070503***6304A2B3" 
              readOnly
              className="w-full p-3 pr-10 border border-gray-200 rounded-md bg-white text-sm text-text-light"
            />
            <button className="absolute right-3 top-3 text-primary">
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PixForm