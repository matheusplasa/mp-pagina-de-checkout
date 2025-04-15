const CreditCardForm = () => {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Número do cartão</label>
          <input 
            type="text" 
            placeholder="0000 0000 0000 0000" 
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Nome impresso no cartão</label>
          <input 
            type="text" 
            placeholder="Seu nome" 
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">Validade</label>
            <input 
              type="text" 
              placeholder="MM/AA" 
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-dark mb-1">CVV</label>
            <input 
              type="text" 
              placeholder="000" 
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Parcelas</label>
          <select className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
            <option>1x de R$ 100,00 sem juros</option>
            <option>2x de R$ 50,00 sem juros</option>
            <option>3x de R$ 33,33 sem juros</option>
          </select>
        </div>
      </div>
    )
  }
  
  export default CreditCardForm