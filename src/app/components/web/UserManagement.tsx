import { Search, Filter, MoreVertical, CheckCircle, XCircle, Clock, Download } from 'lucide-react';

export function UserManagement() {
  const users = [
    { id: 1, dni: '45678912', name: 'María Elena Torres Vega', type: 'Servidor Público', status: 'Activo', balance: 3215.50, lastActivity: '18 Abr 2026', phone: '987654321' },
    { id: 2, dni: '78945612', name: 'Juan Carlos Mendoza Silva', type: 'Pensionista', status: 'Activo', balance: 1850.00, lastActivity: '17 Abr 2026', phone: '965874123' },
    { id: 3, dni: '12345678', name: 'Rosa Angélica Pérez López', type: 'Beneficiario Social', status: 'Pendiente', balance: 450.00, lastActivity: '15 Abr 2026', phone: '912345678' },
    { id: 4, dni: '98765432', name: 'Luis Alberto Ramírez Cruz', type: 'Servidor Público', status: 'Activo', balance: 5420.75, lastActivity: '18 Abr 2026', phone: '998765432' },
    { id: 5, dni: '45612378', name: 'Carmen Isabel Flores Rojas', type: 'Pensionista', status: 'Bloqueado', balance: 2100.00, lastActivity: '10 Abr 2026', phone: '945678912' },
    { id: 6, dni: '78912345', name: 'Pedro Miguel Castro Díaz', type: 'Beneficiario Social', status: 'Activo', balance: 680.50, lastActivity: '18 Abr 2026', phone: '923456789' },
    { id: 7, dni: '32165498', name: 'Ana Lucía Vargas Quispe', type: 'Servidor Público', status: 'Pendiente', balance: 0.00, lastActivity: '16 Abr 2026', phone: '956789123' },
    { id: 8, dni: '65498732', name: 'Jorge Luis Huamán Gonzales', type: 'Pensionista', status: 'Activo', balance: 1950.25, lastActivity: '17 Abr 2026', phone: '987123456' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administración de cuentas BN Wallet</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por DNI, nombre o teléfono..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
                />
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter size={20} />
                  <span>Filtros</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-3 bg-[#C8102E] text-white rounded-lg hover:bg-[#9E0C24]">
                  <Download size={20} />
                  <span>Exportar</span>
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-[#C8102E] text-white rounded-lg text-sm">
                Todos (289,450)
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                Servidores Públicos
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                Pensionistas
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                Beneficiarios Sociales
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DNI</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usuario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Saldo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Última actividad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.dni}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        user.type === 'Servidor Público' ? 'bg-blue-100 text-blue-700' :
                        user.type === 'Pensionista' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === 'Activo' ? 'bg-green-100 text-green-700' :
                        user.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {user.status === 'Activo' && <CheckCircle size={12} />}
                        {user.status === 'Pendiente' && <Clock size={12} />}
                        {user.status === 'Bloqueado' && <XCircle size={12} />}
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      S/ {user.balance.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.lastActivity}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-medium">1-8</span> de <span className="font-medium">289,450</span> usuarios
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                Anterior
              </button>
              <button className="px-4 py-2 bg-[#C8102E] text-white rounded-lg text-sm hover:bg-[#9E0C24]">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
