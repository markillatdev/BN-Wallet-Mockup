import { ArrowLeft, Phone, User, ChevronDown } from 'lucide-react';

export function TransferScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-semibold">Transferir</h1>
        </div>
        <p className="text-white/80 text-sm">Envía dinero de forma rápida y segura</p>
      </div>

      <div className="flex-1 px-6 pt-6 overflow-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
          <p className="text-blue-800 text-sm">
            ✓ Compatible con Yape y Plin - Transferencias inmediatas
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Método de transferencia</label>
            <div className="flex gap-3">
              <button className="flex-1 py-3 px-4 border-2 border-[#C8102E] bg-[#C8102E] text-white rounded-lg flex items-center justify-center gap-2">
                <Phone size={18} />
                <span>Celular</span>
              </button>
              <button className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#C8102E] transition-colors flex items-center justify-center gap-2">
                <User size={18} />
                <span>DNI</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Número de celular</label>
              <input
                type="tel"
                placeholder="Ej: 987654321"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
              />
              <p className="text-xs text-gray-500 mt-1">El destinatario recibirá el dinero al instante</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Monto a transferir</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">S/</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Saldo disponible: S/ 3,215.50</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Concepto (opcional)</label>
              <input
                type="text"
                placeholder="Ej: Pago de servicios"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Banco destino</label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base appearance-none">
                  <option>BN Wallet</option>
                  <option>Yape</option>
                  <option>Plin</option>
                  <option>Otro banco</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Monto a transferir</span>
            <span className="text-gray-900 font-medium">S/ 0.00</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Comisión</span>
            <span className="text-green-600 font-medium">S/ 0.00 (Gratis)</span>
          </div>
          <div className="border-t border-gray-300 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="text-gray-900 font-semibold">Total</span>
              <span className="text-gray-900 font-semibold">S/ 0.00</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#C8102E] text-white py-4 rounded-lg font-semibold hover:bg-[#9E0C24] transition-colors mb-6">
          Continuar
        </button>
      </div>
    </div>
  );
}
