import { AlertTriangle, CheckCircle, XCircle, Eye, FileText, Send } from 'lucide-react';

export function PLAFTMonitoring() {
  const alerts = [
    {
      id: 1,
      level: 'high',
      user: { dni: '45678912', name: 'María Elena Torres Vega' },
      type: 'Múltiples transferencias fraccionadas',
      operations: 15,
      totalAmount: 15500,
      period: 'Últimas 24 horas',
      pattern: 'Transferencias de S/ 900-1100 a 12 cuentas diferentes',
      date: '18 Abr 2026 - 14:32',
      status: 'pending'
    },
    {
      id: 2,
      level: 'high',
      user: { dni: '78945612', name: 'Juan Carlos Mendoza Silva' },
      type: 'Patrón inusual de retiros',
      operations: 8,
      totalAmount: 22000,
      period: 'Últimos 3 días',
      pattern: 'Retiros repetidos en diferentes agencias fuera de la ciudad de residencia',
      date: '17 Abr 2026 - 09:15',
      status: 'pending'
    },
    {
      id: 3,
      level: 'medium',
      user: { dni: '12345678', name: 'Rosa Angélica Pérez López' },
      type: 'Incremento súbito de transacciones',
      operations: 25,
      totalAmount: 8500,
      period: 'Última semana',
      pattern: 'Cuenta con historial bajo, ahora con alta actividad de pagos QR',
      date: '16 Abr 2026 - 16:45',
      status: 'investigating'
    },
    {
      id: 4,
      level: 'medium',
      user: { dni: '98765432', name: 'Luis Alberto Ramírez Cruz' },
      type: 'Recepción de fondos inusuales',
      operations: 6,
      totalAmount: 18000,
      period: 'Últimas 48 horas',
      pattern: 'Depósitos de múltiples fuentes no relacionadas con empleador',
      date: '15 Abr 2026 - 11:20',
      status: 'pending'
    },
    {
      id: 5,
      level: 'low',
      user: { dni: '45612378', name: 'Carmen Isabel Flores Rojas' },
      type: 'Operación fuera de perfil',
      operations: 3,
      totalAmount: 5200,
      period: 'Hoy',
      pattern: 'Transferencias internacionales (primera vez)',
      date: '18 Abr 2026 - 08:00',
      status: 'pending'
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Monitoreo de Riesgos</h1>
          <p className="text-gray-600">Prevención de Lavado de Activos y Financiamiento del Terrorismo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="text-red-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">18</span>
            </div>
            <p className="text-gray-600 text-sm">Alertas de alto riesgo</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="text-yellow-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">45</span>
            </div>
            <p className="text-gray-600 text-sm">Alertas de riesgo medio</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <Eye className="text-blue-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">12</span>
            </div>
            <p className="text-gray-600 text-sm">En investigación</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <FileText className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">8</span>
            </div>
            <p className="text-gray-600 text-sm">Reportes enviados UIF</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Operaciones sospechosas detectadas</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                Todas
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                Alto riesgo
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                En investigación
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          alert.level === 'high' ? 'bg-red-100' :
                          alert.level === 'medium' ? 'bg-yellow-100' :
                          'bg-blue-100'
                        }`}>
                          <AlertTriangle className={
                            alert.level === 'high' ? 'text-red-600' :
                            alert.level === 'medium' ? 'text-yellow-600' :
                            'text-blue-600'
                          } size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{alert.type}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{alert.user.name}</span>
                            <span className="text-gray-400">•</span>
                            <span>DNI: {alert.user.dni}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        alert.level === 'high' ? 'bg-red-100 text-red-700' :
                        alert.level === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {alert.level === 'high' ? 'Alto Riesgo' : alert.level === 'medium' ? 'Riesgo Medio' : 'Riesgo Bajo'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Operaciones</p>
                        <p className="text-sm font-semibold text-gray-900">{alert.operations}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Monto total</p>
                        <p className="text-sm font-semibold text-[#C8102E]">S/ {alert.totalAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Periodo</p>
                        <p className="text-sm font-semibold text-gray-900">{alert.period}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Fecha de alerta</p>
                        <p className="text-sm font-semibold text-gray-900">{alert.date}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h5 className="text-xs font-semibold text-gray-700 mb-2">PATRÓN DETECTADO</h5>
                      <p className="text-sm text-gray-900">{alert.pattern}</p>
                    </div>

                    {alert.status === 'investigating' && (
                      <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <Eye className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-blue-800">
                          <strong>Estado:</strong> En investigación desde el 16 Abr 2026. Analista asignado: Carlos Rodríguez.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-80 flex flex-col gap-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-2">Acciones disponibles</p>
                      <div className="space-y-2">
                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Eye size={18} />
                          <span className="font-medium">Investigar</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#C8102E] text-white rounded-lg hover:bg-[#9E0C24] transition-colors">
                          <Send size={18} />
                          <span className="font-medium">Reportar a UIF</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                          <XCircle size={18} />
                          <span className="font-medium">Desestimar</span>
                        </button>
                      </div>
                    </div>

                    <textarea
                      placeholder="Notas de investigación..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                      rows={4}
                    />

                    <button className="w-full py-2 text-[#C8102E] border border-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors text-sm">
                      Ver operaciones detalladas
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
