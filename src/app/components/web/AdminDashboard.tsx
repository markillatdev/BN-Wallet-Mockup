import { TrendingUp, Users, DollarSign, AlertTriangle, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AdminDashboard() {
  const transactionData = [
    { day: 'Lun', transferencias: 4500, pagos: 3200, creditos: 800 },
    { day: 'Mar', transferencias: 5200, pagos: 3800, creditos: 950 },
    { day: 'Mié', transferencias: 4800, pagos: 4100, creditos: 1100 },
    { day: 'Jue', transferencias: 6100, pagos: 4500, creditos: 1350 },
    { day: 'Vie', transferencias: 7200, pagos: 5200, creditos: 1600 },
    { day: 'Sáb', transferencias: 3800, pagos: 2900, creditos: 600 },
    { day: 'Dom', transferencias: 2100, pagos: 1800, creditos: 400 },
  ];

  const userGrowth = [
    { mes: 'Oct', usuarios: 125000 },
    { mes: 'Nov', usuarios: 142000 },
    { mes: 'Dic', usuarios: 168000 },
    { mes: 'Ene', usuarios: 195000 },
    { mes: 'Feb', usuarios: 224000 },
    { mes: 'Mar', usuarios: 258000 },
    { mes: 'Abr', usuarios: 289000 },
  ];

  const alerts = [
    { id: 1, type: 'high', user: 'DNI 45678912', description: 'Múltiples transferencias a diferentes cuentas', amount: 'S/ 15,000' },
    { id: 2, type: 'medium', user: 'DNI 78945612', description: 'Patrón inusual de retiros', amount: 'S/ 8,500' },
    { id: 3, type: 'high', user: 'DNI 12345678', description: 'Transferencias fraccionadas', amount: 'S/ 22,000' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Administrativo</h1>
          <p className="text-gray-600">Monitoreo en tiempo real - BN Wallet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="text-blue-600" size={24} />
              </div>
              <span className="flex items-center text-green-600 text-sm font-medium">
                <ArrowUpRight size={16} />
                +12.5%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Transacciones hoy</h3>
            <p className="text-2xl font-bold text-gray-900">24,573</p>
            <p className="text-xs text-gray-500 mt-1">Actualizado hace 2 min</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <span className="flex items-center text-green-600 text-sm font-medium">
                <ArrowUpRight size={16} />
                +8.2%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Usuarios activos</h3>
            <p className="text-2xl font-bold text-gray-900">289,450</p>
            <p className="text-xs text-gray-500 mt-1">Total registrados</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#C8102E]/10 rounded-lg flex items-center justify-center">
                <DollarSign className="text-[#C8102E]" size={24} />
              </div>
              <span className="flex items-center text-green-600 text-sm font-medium">
                <ArrowUpRight size={16} />
                +15.8%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Monto procesado hoy</h3>
            <p className="text-2xl font-bold text-gray-900">S/ 8.5M</p>
            <p className="text-xs text-gray-500 mt-1">Acumulado del día</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <span className="flex items-center text-red-600 text-sm font-medium">
                <ArrowDownRight size={16} />
                3 nuevas
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Alertas de Riesgos</h3>
            <p className="text-2xl font-bold text-gray-900">18</p>
            <p className="text-xs text-gray-500 mt-1">Pendientes de revisión</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Transacciones por día</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Bar dataKey="transferencias" fill="#C8102E" name="Transferencias" />
                <Bar dataKey="pagos" fill="#3b82f6" name="Pagos" />
                <Bar dataKey="creditos" fill="#10b981" name="Créditos" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Crecimiento de usuarios</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="usuarios" stroke="#C8102E" strokeWidth={2} name="Usuarios" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Operaciones sospechosas recientes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usuario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nivel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {alerts.map((alert) => (
                  <tr key={alert.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{alert.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alert.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{alert.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        alert.type === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {alert.type === 'high' ? 'Alto' : 'Medio'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-[#C8102E] hover:text-[#9E0C24] font-medium text-sm">
                        Investigar
                      </button>
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
