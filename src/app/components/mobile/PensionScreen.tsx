import { ArrowLeft, CheckCircle, Download, Send, Calendar } from 'lucide-react';

export function PensionScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-semibold">Cobro de Pensión</h1>
        </div>
        <p className="text-white/80 text-sm">Detalles de tu haber depositado</p>
      </div>

      <div className="flex-1 px-6 pt-6 overflow-auto">
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-green-900 font-semibold text-lg">¡Pago Acreditado!</h3>
              <p className="text-green-700 text-sm">15 Abril 2026 • 08:15 AM</p>
            </div>
          </div>
          <p className="text-green-800 text-sm">
            Tu pensión del mes de Abril ha sido depositada exitosamente en tu BN Wallet.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-gray-900 font-semibold mb-4">Detalles del depósito</h3>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Tipo de pago</span>
              <span className="text-gray-900 font-medium">Pensión Jubilación</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Entidad origen</span>
              <span className="text-gray-900 font-medium">ESSALUD</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Periodo</span>
              <span className="text-gray-900 font-medium">Abril 2026</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Fecha de depósito</span>
              <span className="text-gray-900 font-medium">15/04/2026</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">N° de operación</span>
              <span className="text-gray-900 font-medium">2026041500012345</span>
            </div>

            <div className="flex justify-between py-3 bg-gray-50 -mx-6 px-6 mt-3">
              <span className="text-gray-900 font-semibold text-lg">Monto depositado</span>
              <span className="text-[#C8102E] font-bold text-xl">S/ 1,200.00</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-gray-900 font-semibold mb-4">Próximos pagos</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#C8102E]" size={20} />
                <div>
                  <p className="text-gray-900 font-medium text-sm">Mayo 2026</p>
                  <p className="text-gray-500 text-xs">Próximo pago programado</p>
                </div>
              </div>
              <span className="text-gray-700 font-medium">15 May</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="text-gray-900 font-medium text-sm">Junio 2026</p>
                  <p className="text-gray-500 text-xs">Pago programado</p>
                </div>
              </div>
              <span className="text-gray-700 font-medium">15 Jun</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-[#C8102E] text-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors">
            <Send size={20} />
            <span className="font-medium">Transferir</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#C8102E] hover:text-[#C8102E] transition-colors">
            <Download size={20} />
            <span className="font-medium">Descargar</span>
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Recordatorio:</strong> Tus fondos están disponibles de inmediato. Puedes transferir, pagar o retirar en cualquier agente BN.
          </p>
        </div>
      </div>
    </div>
  );
}
