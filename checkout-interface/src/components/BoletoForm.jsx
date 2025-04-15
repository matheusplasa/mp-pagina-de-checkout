const BoletoForm = () => {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">CPF</label>
          <input 
            type="text" 
            placeholder="000.000.000-00" 
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Nome completo</label>
          <input 
            type="text" 
            placeholder="Seu nome completo" 
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <div className="bg-secondary p-4 rounded-md">
          <p className="text-sm text-text-light">
            O boleto bancário pode levar até 3 dias úteis para ser compensado. Após a compensação, seu pedido será processado.
          </p>
        </div>
      </div>
    )
  }
  
  export default BoletoForm