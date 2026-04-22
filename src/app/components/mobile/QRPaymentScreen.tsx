import { ArrowLeft, ScanLine, ChevronDown } from 'lucide-react';

export function QRPaymentScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-semibold">Pagar con QR</h1>
        </div>
        <p className="text-white/80 text-sm">Escanea el código del comercio</p>
      </div>

      <div className="flex-1 px-6 pt-6 flex flex-col">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="aspect-square bg-gray-900 relative flex items-center justify-center">
            <div className="absolute inset-8 border-4 border-white/30 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-[#C8102E] rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <ScanLine className="text-white" size={64} />
              </div>
            </div>
            <div className="absolute top-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white text-sm text-center">Coloca el código QR dentro del marco</p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
              <ScanLine size={20} className="text-[#C8102E]" />
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Escaneando...</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm mb-1">o ingresa el monto manualmente</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Comercio</label>
              <input
                type="text"
                placeholder="Se detectará automáticamente"
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-base"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Monto a pagar</label>
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
          </div>
        </div>

        <div className="mt-auto mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-blue-800 text-xs">
              ✓ Pago seguro protegido por Banco de la Nación
            </p>
          </div>

          <button className="w-full bg-[#C8102E] text-white py-4 rounded-lg font-semibold hover:bg-[#9E0C24] transition-colors">
            Confirmar pago
          </button>

          <button className="w-full mt-3 py-3 text-[#C8102E] font-medium">
            Ver mis códigos QR guardados
          </button>
        </div>
      </div>
    </div>
  );
}
