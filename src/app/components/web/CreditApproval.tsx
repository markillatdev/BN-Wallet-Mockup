import { CheckCircle, XCircle, Clock, FileText, TrendingUp, AlertCircle } from 'lucide-react';

export function CreditApproval() {
  const requests = [
    {
      id: 1,
      dni: '45678912',
      name: 'María Elena Torres Vega',
      amount: 3000,
      term: 3,
      score: 750,
      employment: 'Servidor Público - MEF',
      income: 3500,
      requestDate: '15 Abr 2026',
      status: 'pending',
      risk: 'low'
    },
    {
      id: 2,
      dni: '78945612',
      name: 'Juan Carlos Mendoza Silva',
      amount: 5000,
      term: 12,
      score: 680,
      employment: 'Pensionista - ESSALUD',
      income: 1850,
      requestDate: '14 Abr 2026',
      status: 'pending',
      risk: 'medium'
    },
    {
      id: 3,
      dni: '12345678',
      name: 'Rosa Angélica Pérez López',
      amount: 1500,
      term: 6,
      score: 620,
      employment: 'Beneficiario Social - JUNTOS',
      income: 680,
      requestDate: '14 Abr 2026',
      status: 'pending',
      risk: 'medium'
    },
    {
      id: 4,
      dni: '98765432',
      name: 'Luis Alberto Ramírez Cruz',
      amount: 4500,
      term: 18,
      score: 580,
      employment: 'Servidor Público - MINSA',
      income: 4200,
      requestDate: '13 Abr 2026',
      status: 'pending',
      risk: 'high'
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Aprobación de Créditos Multired</h1>
          <p className="text-gray-600">Evaluación y gestión de solicitudes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Clock className="text-yellow-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">24</span>
            </div>
            <p className="text-gray-600 text-sm">Pendientes</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">156</span>
            </div>
            <p className="text-gray-600 text-sm">Aprobadas hoy</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="text-red-600" size={24} />
              <span className="text-2xl font-bold text-gray-900">38</span>
            </div>
            <p className="text-gray-600 text-sm">Rechazadas hoy</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-[#C8102E]" size={24} />
              <span className="text-2xl font-bold text-gray-900">S/ 582K</span>
            </div>
            <p className="text-gray-600 text-sm">Monto aprobado hoy</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Solicitudes pendientes de evaluación</h3>
          </div>

          <div className="divide-y divide-gray-200">
            {requests.map((request) => (
              <div key={request.id} className="p-6 hover:bg-gray-50">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{request.name}</h4>
                        <p className="text-sm text-gray-500">DNI: {request.dni}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        request.risk === 'low' ? 'bg-green-100 text-green-700' :
                        request.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        Riesgo {request.risk === 'low' ? 'Bajo' : request.risk === 'medium' ? 'Medio' : 'Alto'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Monto solicitado</p>
                        <p className="text-sm font-semibold text-gray-900">S/ {request.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Plazo</p>
                        <p className="text-sm font-semibold text-gray-900">{request.term} meses</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Score crediticio</p>
                        <p className={`text-sm font-semibold ${
                          request.score >= 700 ? 'text-green-600' :
                          request.score >= 650 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {request.score}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ingreso mensual</p>
                        <p className="text-sm font-semibold text-gray-900">S/ {request.income.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-gray-400" />
                      <p className="text-sm text-gray-600">{request.employment}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Evaluación crediticia automática</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Capacidad de pago</span>
                          <span className={`font-medium ${request.income / request.amount > 1.5 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {request.income / request.amount > 1.5 ? 'Adecuada' : 'Justa'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Historial de pagos</span>
                          <span className="text-green-600 font-medium">Sin morosidad</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Relación deuda/ingreso</span>
                          <span className="text-green-600 font-medium">32%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Cuota estimada</span>
                          <span className="font-semibold text-gray-900">
                            S/ {((request.amount * 1.09) / request.term).toFixed(2)}/mes
                          </span>
                        </div>
                      </div>
                    </div>

                    {request.risk === 'high' && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-red-800">
                          <strong>Alerta:</strong> Score crediticio bajo. Se recomienda evaluación manual detallada antes de aprobar.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-80 flex flex-col gap-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Fecha de solicitud</p>
                      <p className="text-sm font-medium text-gray-900">{request.requestDate}</p>
                    </div>

                    <textarea
                      placeholder="Observaciones (opcional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-sm"
                      rows={3}
                    />

                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <CheckCircle size={18} />
                        <span className="font-medium">Aprobar</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        <XCircle size={18} />
                        <span className="font-medium">Rechazar</span>
                      </button>
                    </div>

                    <button className="w-full py-2 text-[#C8102E] border border-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors text-sm">
                      Ver historial completo
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
