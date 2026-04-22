import { ArrowLeft, Calculator, Info } from 'lucide-react';

export function CreditRequestScreen() {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-semibold">Crédito Multired</h1>
        </div>
        <p className="text-white/80 text-sm">Solicita tu préstamo en minutos</p>
      </div>

      <div className="flex-1 px-6 pt-6 overflow-auto">
        <div className="bg-gradient-to-br from-[#C8102E] to-[#9E0C24] rounded-xl p-6 mb-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Tu monto pre-aprobado</h3>
          <p className="text-3xl font-bold mb-1">S/ 5,000.00</p>
          <p className="text-sm text-white/80">Basado en tu historial crediticio</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-gray-900 font-semibold mb-4">Detalles del crédito</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Monto solicitado</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">S/</span>
                <input
                  type="number"
                  placeholder="0.00"
                  defaultValue="3000"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Mínimo: S/ 500</span>
                <span>Máximo: S/ 5,000</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                defaultValue="3000"
                step="100"
                className="w-full mt-2 accent-[#C8102E]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Plazo de pago</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base">
                <option>3 meses</option>
                <option>6 meses</option>
                <option>12 meses</option>
                <option>18 meses</option>
                <option>24 meses</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Propósito del crédito</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base">
                <option>Gastos personales</option>
                <option>Educación</option>
                <option>Salud</option>
                <option>Negocio</option>
                <option>Vivienda</option>
                <option>Otro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3 mb-3">
            <Calculator className="text-[#C8102E] flex-shrink-0" size={24} />
            <div className="flex-1">
              <h4 className="text-gray-900 font-semibold mb-1">Simulación de cuota</h4>
              <p className="text-xs text-gray-600">Basado en TEA 25% anual</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Cuota mensual</span>
              <span className="text-gray-900 font-semibold">S/ 1,089.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total a pagar</span>
              <span className="text-gray-900 font-semibold">S/ 3,267.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Intereses</span>
              <span className="text-gray-900 font-semibold">S/ 267.00</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-start gap-2">
            <Info className="text-gray-400 flex-shrink-0 mt-1" size={16} />
            <div className="text-xs text-gray-600">
              <p className="mb-2">Al solicitar este crédito, aceptas:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Términos y condiciones del Crédito Multired</li>
                <li>Verificación de tu historial crediticio</li>
                <li>Descuento automático de cuotas de tu sueldo</li>
              </ul>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#C8102E] text-white py-4 rounded-lg font-semibold hover:bg-[#9E0C24] transition-colors mb-6">
          Enviar solicitud
        </button>
      </div>
    </div>
  );
}
