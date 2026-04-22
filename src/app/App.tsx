import { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { LoginScreen } from './components/mobile/LoginScreen';
import { DashboardScreen } from './components/mobile/DashboardScreen';
import { TransferScreen } from './components/mobile/TransferScreen';
import { QRPaymentScreen } from './components/mobile/QRPaymentScreen';
import { HistoryScreen } from './components/mobile/HistoryScreen';
import { CreditRequestScreen } from './components/mobile/CreditRequestScreen';
import { PensionScreen } from './components/mobile/PensionScreen';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AdminDashboard } from './components/web/AdminDashboard';
import { UserManagement } from './components/web/UserManagement';
import { CreditApproval } from './components/web/CreditApproval';
import { PLAFTMonitoring } from './components/web/PLAFTMonitoring';
import { CashLogistics } from './components/web/CashLogistics';
import { WebSidebar } from './components/WebSidebar';

export default function App() {
  const [viewMode, setViewMode] = useState<'mobile' | 'web'>('mobile');
  const [mobileScreen, setMobileScreen] = useState('login');
  const [webScreen, setWebScreen] = useState('admin-dashboard');

  const renderMobileScreen = () => {
    switch (mobileScreen) {
      case 'login':
        return <LoginScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'transfer':
        return <TransferScreen />;
      case 'qr':
        return <QRPaymentScreen />;
      case 'history':
        return <HistoryScreen />;
      case 'credit':
        return <CreditRequestScreen />;
      case 'pension':
        return <PensionScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  const renderWebScreen = () => {
    switch (webScreen) {
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'user-management':
        return <UserManagement />;
      case 'credit-approval':
        return <CreditApproval />;
      case 'plaft-monitoring':
        return <PLAFTMonitoring />;
      case 'cash-logistics':
        return <CashLogistics />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-gray-100">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C8102E] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BN</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">BN Wallet - Mockups</h1>
            <p className="text-xs text-gray-500">Banco de la Nación del Perú</p>
          </div>
        </div>

        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              viewMode === 'mobile'
                ? 'bg-[#C8102E] text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Smartphone size={18} />
            <span className="font-medium">App Móvil</span>
          </button>
          <button
            onClick={() => setViewMode('web')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              viewMode === 'web'
                ? 'bg-[#C8102E] text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Monitor size={18} />
            <span className="font-medium">Panel Web</span>
          </button>
        </div>
      </div>

      {viewMode === 'mobile' ? (
        <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="w-full max-w-md bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[700px] flex flex-col">
              <div className="flex-1 overflow-auto">
                {renderMobileScreen()}
              </div>
              {mobileScreen !== 'login' && (
                <MobileBottomNav
                  activeScreen={mobileScreen}
                  onNavigate={setMobileScreen}
                />
              )}
            </div>
          </div>

          {mobileScreen === 'login' && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Pantallas disponibles:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setMobileScreen('dashboard')}
                  className="px-3 py-1 bg-[#C8102E] text-white rounded text-xs hover:bg-[#9E0C24]"
                >
                  Ver Dashboard
                </button>
                <button
                  onClick={() => setMobileScreen('pension')}
                  className="px-3 py-1 bg-[#C8102E] text-white rounded text-xs hover:bg-[#9E0C24]"
                >
                  Ver Pensión
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex overflow-hidden">
          <WebSidebar activeScreen={webScreen} onNavigate={setWebScreen} />
          {renderWebScreen()}
        </div>
      )}
    </div>
  );
}