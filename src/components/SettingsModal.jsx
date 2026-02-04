import { X } from 'lucide-react';

const SettingsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
          <h2 className="text-xl font-bold text-gray-700">Configurações</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-600">
              Foco (minutos)
            </label>
            <input
              type="number"
              className="w-17 p-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
              placeholder="25"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-600">
              Curta (minutos)
            </label>
            <input
              type="number"
              className="w-17 p-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all"
              placeholder="5"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-600">
              Longa (minutos)
            </label>
            <input
              type="number"
              className="w-17 p-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              placeholder="15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
