import { Send, QrCode, Plus, Clock, ArrowDownToLine, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

export function DashboardScreen() {
  const movements = [
    { id: 1, type: 'Ingreso', description: 'Depósito de sueldo - MEF', amount: 3500.00, date: '15 Abr 2026', icon: TrendingUp, color: 'text-green-600' },
    { id: 2, type: 'Egreso', description: 'Transferencia a Yape', amount: -150.00, date: '14 Abr 2026', icon: TrendingDown, color: 'text-red-600' },
    { id: 3, type: 'Egreso', description: 'Pago QR - Supermercado Metro', amount: -89.50, date: '13 Abr 2026', icon: TrendingDown, color: 'text-red-600' },
    { id: 4, type: 'Ingreso', description: 'Devolución de compra', amount: 45.00, date: '12 Abr 2026', icon: TrendingUp, color: 'text-green-600' },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/80 text-sm">Bienvenido/a</p>
            <h2 className="text-white text-xl font-semibold">María Elena Torres</h2>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">MT</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-white/80 text-sm mb-1">Saldo disponible</p>
          <div className="flex items-end justify-between">
            <p className="text-white text-3xl font-bold">S/ 3,215.50</p>
            <button className="text-white/80 text-sm underline">Ver detalle</button>
          </div>
          <p className="text-white/70 text-xs mt-2">Próximo pago: 30 Abr 2026</p>
        </div>
      </div>

      <div className="px-6 -mt-4 mb-4">
        <div className="grid grid-cols-4 gap-3">
          <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#C8102E]/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Send className="text-[#C8102E]" size={24} />
            </div>
            <p className="text-xs text-center text-gray-700">Transferir</p>
          </button>

          <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#C8102E]/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <QrCode className="text-[#C8102E]" size={24} />
            </div>
            <p className="text-xs text-center text-gray-700">Pagar</p>
          </button>

          <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#C8102E]/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Plus className="text-[#C8102E]" size={24} />
            </div>
            <p className="text-xs text-center text-gray-700">Recargar</p>
          </button>

          <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#C8102E]/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="text-[#C8102E]" size={24} />
            </div>
            <p className="text-xs text-center text-gray-700">Historial</p>
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 overflow-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 font-semibold">Últimos movimientos</h3>
          <button className="text-[#C8102E] text-sm">Ver todos</button>
        </div>

        <div className="space-y-2">
          {movements.map((movement) => (
            <div key={movement.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className={`w-10 h-10 ${movement.type === 'Ingreso' ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center`}>
                  <movement.icon className={movement.color} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium text-sm">{movement.description}</p>
                  <p className="text-gray-500 text-xs">{movement.date}</p>
                </div>
              </div>
              <p className={`${movement.color} font-semibold text-sm ml-2`}>
                {movement.amount > 0 ? '+' : ''}S/ {Math.abs(movement.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mt-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 font-medium">Crédito Multired</p>
              <p className="text-gray-500 text-sm">Solicita hasta S/ 5,000</p>
            </div>
            <ChevronRight className="text-[#C8102E]" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
