import { X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const SettingsModal = ({ onClose, timers, setTimers }) => {
  const [formData, setFormData] = useState({
    focus: timers.focus,
    short: timers.short,
    long: timers.long,
  });

  const inputTime = useRef();
  useEffect(() => {
    inputTime.current.focus();
  }, []);

  function changeInputValue(e) {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: Number(value),
      };
    });
  }

  const salvarMudancas = useCallback(() => {
    setTimers(formData);
    onClose();
  }, [formData, setTimers, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
          <h2 className="text-xl font-bold text-gray-800">Configurações</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Foco (minutos)
            </label>
            <input
              ref={inputTime}
              value={formData.focus}
              onChange={changeInputValue}
              name="focus"
              type="number"
              className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
              placeholder="25"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Descanso (minutos)
            </label>
            <input
              name="short"
              value={formData.short}
              onChange={changeInputValue}
              type="number"
              className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all"
              placeholder="5"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Pausa Longa (minutos)
            </label>
            <input
              name="long"
              value={formData.long}
              onChange={changeInputValue}
              type="number"
              className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              placeholder="15"
            />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={salvarMudancas}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
