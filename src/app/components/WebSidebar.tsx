import {
  LayoutDashboard,
  Users,
  FileCheck,
  AlertTriangle,
  Truck,
  LogOut,
} from "lucide-react";

interface WebSidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function WebSidebar({
  activeScreen,
  onNavigate,
}: WebSidebarProps) {
  const navItems = [
    {
      id: "admin-dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "user-management",
      label: "Gestión de Usuarios",
      icon: Users,
    },
    {
      id: "credit-approval",
      label: "Aprobación de Créditos",
      icon: FileCheck,
    },
    {
      id: "plaft-monitoring",
      label: "Monitoreo de Riesgos",
      icon: AlertTriangle,
    },
    {
      id: "cash-logistics",
      label: "Logística de Efectivo",
      icon: Truck,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C8102E] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">BN</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900">
              BN Wallet
            </h2>
            <p className="text-xs text-gray-500">
              Panel Administrativo
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#C8102E] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">
              AC
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Admin Carlos
            </p>
            <p className="text-xs text-gray-500">Supervisor</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">
            Cerrar sesión
          </span>
        </button>
      </div>
    </div>
  );
}