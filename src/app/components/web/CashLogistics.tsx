import { MapPin, TrendingDown, AlertCircle, Truck, CheckCircle, Clock } from 'lucide-react';

export function CashLogistics() {
  const regions = [
    { id: 1, name: 'Lima Metropolitana', agencies: 45, atms: 180, level: 'high', cash: 12500000, capacity: 75 },
    { id: 2, name: 'Arequipa', agencies: 12, atms: 48, level: 'medium', cash: 3200000, capacity: 55 },
    { id: 3, name: 'Cusco', agencies: 8, atms: 32, level: 'low', cash: 1800000, capacity: 28 },
    { id: 4, name: 'Trujillo', agencies: 10, atms: 40, level: 'medium', cash: 2500000, capacity: 60 },
    { id: 5, name: 'Piura', agencies: 7, atms: 28, level: 'critical', cash: 850000, capacity: 15 },
    { id: 6, name: 'Chiclayo', agencies: 6, atms: 24, level: 'medium', cash: 1900000, capacity: 48 },
  ];

  const recentOrders = [
    { id: 1, region: 'Piura', amount: 2000000, status: 'in-transit', eta: '19 Abr 2026 - 10:00', priority: 'urgent' },
    { id: 2, region: 'Cusco', amount: 1500000, status: 'pending', eta: '20 Abr 2026 - 14:00', priority: 'normal' },
    { id: 3, region: 'Lima Metropolitana', amount: 5000000, status: 'delivered', eta: '18 Abr 2026 - 08:00', priority: 'normal' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reposición de Efectivo y Logística</h1>
          <p className="text-gray-600">Control de niveles de efectivo a nivel nacional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <MapPin className="text-[#C8102E]" size={24} />
              <span className="text-2xl font-bold text-gray-900">88</span>
            </div>
            <p className="text-gray-600 text-sm">Agencias activas</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <MapPin className="text-blue-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">352</span>
            </div>
            <p className="text-gray-600 text-sm">Cajeros ATM</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingDown className="text-yellow-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">23</span>
            </div>
            <p className="text-gray-600 text-sm">Nivel bajo de efectivo</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Truck className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">5</span>
            </div>
            <p className="text-gray-600 text-sm">Reposiciones en tránsito</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Mapa de calor por región</h3>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 800 600" className="w-full h-full">
                    <path d="M 100 100 L 300 80 L 500 120 L 700 100 L 700 400 L 500 450 L 300 420 L 100 400 Z" fill="#C8102E" opacity="0.3" />
                    <path d="M 150 200 L 250 180 L 350 200 L 350 350 L 250 370 L 150 350 Z" fill="#22c55e" opacity="0.3" />
                    <path d="M 400 250 L 550 240 L 600 300 L 550 360 L 400 350 Z" fill="#eab308" opacity="0.3" />
                    <path d="M 550 100 L 650 90 L 700 150 L 650 200 L 550 190 Z" fill="#ef4444" opacity="0.8" />
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <MapPin className="text-[#C8102E] mx-auto mb-2" size={48} />
                  <p className="text-gray-600">Mapa interactivo de Perú</p>
                  <p className="text-sm text-gray-500">Niveles de efectivo por región</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Alto (≥60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-600">Medio (30-60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm text-gray-600">Bajo (15-30%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-600">Crítico (&lt;15%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Órdenes recientes</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{order.region}</h4>
                      <p className="text-xs text-gray-500">S/ {order.amount.toLocaleString()}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status === 'delivered' ? 'Entregado' :
                       order.status === 'in-transit' ? 'En tránsito' : 'Pendiente'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Clock size={12} />
                    <span>{order.eta}</span>
                  </div>
                  {order.priority === 'urgent' && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                      <AlertCircle size={12} />
                      <span>Urgente</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Niveles de efectivo por región</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#C8102E] text-white rounded-lg hover:bg-[#9E0C24]">
              <Truck size={18} />
              <span>Nueva orden de reposición</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Región</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agencias</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cajeros ATM</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Efectivo disponible</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nivel de capacidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {regions.map((region) => (
                  <tr key={region.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{region.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{region.agencies}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{region.atms}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      S/ {(region.cash / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              region.capacity >= 60 ? 'bg-green-500' :
                              region.capacity >= 30 ? 'bg-yellow-500' :
                              region.capacity >= 15 ? 'bg-orange-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${region.capacity}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{region.capacity}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                        region.level === 'high' ? 'bg-green-100 text-green-700' :
                        region.level === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        region.level === 'low' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {region.level === 'critical' && <AlertCircle size={12} />}
                        {region.level === 'high' ? 'Óptimo' :
                         region.level === 'medium' ? 'Normal' :
                         region.level === 'low' ? 'Bajo' : 'Crítico'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {(region.level === 'low' || region.level === 'critical') ? (
                        <button className="text-[#C8102E] hover:text-[#9E0C24] font-medium text-sm">
                          Ordenar reposición
                        </button>
                      ) : (
                        <button className="text-gray-400 text-sm">
                          Ver detalles
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
