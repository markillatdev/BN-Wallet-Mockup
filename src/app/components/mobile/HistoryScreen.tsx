import { ArrowLeft, TrendingUp, TrendingDown, Filter, Search, Calendar } from 'lucide-react';

export function HistoryScreen() {
  const movements = [
    { id: 1, type: 'Ingreso', description: 'Depósito de sueldo - MEF', amount: 3500.00, date: '15 Abr 2026', time: '08:15', status: 'Completado' },
    { id: 2, type: 'Egreso', description: 'Transferencia a Yape - Juan Pérez', amount: -150.00, date: '14 Abr 2026', time: '14:32', status: 'Completado' },
    { id: 3, type: 'Egreso', description: 'Pago QR - Supermercado Metro', amount: -89.50, date: '13 Abr 2026', time: '19:45', status: 'Completado' },
    { id: 4, type: 'Ingreso', description: 'Devolución de compra - Tienda XYZ', amount: 45.00, date: '12 Abr 2026', time: '11:20', status: 'Completado' },
    { id: 5, type: 'Egreso', description: 'Pago de servicios - Luz del Sur', amount: -125.80, date: '11 Abr 2026', time: '16:05', status: 'Completado' },
    { id: 6, type: 'Egreso', description: 'Transferencia - María García', amount: -200.00, date: '10 Abr 2026', time: '10:30', status: 'Pendiente' },
    { id: 7, type: 'Ingreso', description: 'Depósito de bonificación', amount: 500.00, date: '09 Abr 2026', time: '09:00', status: 'Completado' },
    { id: 8, type: 'Egreso', description: 'Compra en farmacia', amount: -68.90, date: '08 Abr 2026', time: '17:22', status: 'Observado' },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="bg-[#C8102E] pt-12 pb-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-semibold">Historial</h1>
        </div>
        <p className="text-white/80 text-sm">Todos tus movimientos</p>
      </div>

      <div className="px-6 pt-4">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar por comercio, monto o fecha"
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
          />
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:border-[#C8102E] transition-colors">
            <Calendar size={16} />
            <span>Fecha</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:border-[#C8102E] transition-colors">
            <Filter size={16} />
            <span>Tipo</span>
          </button>
          <button className="px-4 py-2 bg-[#C8102E] text-white rounded-lg text-sm">
            Todos
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 overflow-auto">
        <div className="mb-4">
          <h3 className="text-gray-500 text-xs font-semibold mb-2">ABRIL 2026</h3>
          <div className="space-y-2">
            {movements.map((movement) => (
              <div key={movement.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-10 h-10 ${movement.type === 'Ingreso' ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                      {movement.type === 'Ingreso' ? (
                        <TrendingUp className="text-green-600" size={20} />
                      ) : (
                        <TrendingDown className="text-red-600" size={20} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium text-sm">{movement.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{movement.date} • {movement.time}</p>
                    </div>
                  </div>
                  <div className="text-right ml-2">
                    <p className={`${movement.type === 'Ingreso' ? 'text-green-600' : 'text-red-600'} font-semibold text-sm`}>
                      {movement.amount > 0 ? '+' : ''}S/ {Math.abs(movement.amount).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    movement.status === 'Completado' ? 'bg-green-100 text-green-700' :
                    movement.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {movement.status}
                  </span>
                  <button className="text-[#C8102E] text-xs font-medium">Ver detalle</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-white border-t border-gray-200">
        <button className="w-full py-3 text-[#C8102E] font-medium border border-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors">
          Exportar historial
        </button>
      </div>
    </div>
  );
}
