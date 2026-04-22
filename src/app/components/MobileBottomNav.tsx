import { Home, Send, QrCode, Clock, CreditCard, Wallet } from 'lucide-react';

interface MobileBottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function MobileBottomNav({ activeScreen, onNavigate }: MobileBottomNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Inicio', icon: Home },
    { id: 'transfer', label: 'Transferir', icon: Send },
    { id: 'qr', label: 'QR', icon: QrCode },
    { id: 'history', label: 'Historial', icon: Clock },
    { id: 'credit', label: 'Crédito', icon: CreditCard },
  ];

  return (
    <div className="bg-white border-t border-gray-200 px-2 py-2 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeScreen === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              isActive ? 'text-[#C8102E]' : 'text-gray-500'
            }`}
          >
            <Icon size={22} />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
