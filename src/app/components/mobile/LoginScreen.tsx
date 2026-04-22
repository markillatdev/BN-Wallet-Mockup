import { Fingerprint, Eye } from 'lucide-react';

export function LoginScreen() {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="bg-[#C8102E] pt-16 pb-12 px-6 text-center">
        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-[#C8102E] font-bold text-2xl">BN</span>
        </div>
        <h1 className="text-white text-2xl font-semibold mb-2">BN Wallet</h1>
        <p className="text-white/90 text-sm">Banco de la Nación</p>
      </div>

      <div className="flex-1 px-6 pt-8">
        <p className="text-center text-gray-600 mb-8 text-lg">
          Tu dinero del Estado, en tu celular
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Número de DNI</label>
            <input
              type="text"
              placeholder="Ingrese su DNI"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E] text-base"
            />
          </div>

          <button className="w-full bg-[#C8102E] text-white py-3 rounded-lg font-medium hover:bg-[#9E0C24] transition-colors mt-4">
            Ingresar
          </button>

          <div className="text-center">
            <a href="#" className="text-[#C8102E] text-sm">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">o accede con</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[#C8102E] text-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors">
              <Fingerprint size={24} />
              <span>Huella</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[#C8102E] text-[#C8102E] rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors">
              <Eye size={24} />
              <span>Rostro</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 text-center text-xs text-gray-500">
        <p>Al ingresar, aceptas nuestros Términos y Condiciones</p>
        <p className="mt-1">© 2026 Banco de la Nación - Perú</p>
      </div>
    </div>
  );
}
