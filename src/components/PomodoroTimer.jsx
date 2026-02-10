import {
  Armchair,
  Brain,
  Coffee,
  Pause,
  Play,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const MODES = {
  focus: {
    label: 'Foco',
    time: 1500,
    icon: <Brain />,
    card: 'bg-rose-500 text-white shadow-lg shadow-rose-500/30',
    hover: 'hover:text-rose-500',
    primaryColor: 'text-rose-500',
    backgroundColor: 'bg-rose-500',
    shadowColor: 'shadow-rose-500/30',
  },
  short: {
    label: 'Descanso',
    time: 300,
    icon: <Coffee />,
    card: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30',
    hover: 'hover:text-emerald-500',
    primaryColor: 'text-emerald-500',
    backgroundColor: 'bg-emerald-500',
    shadowColor: 'shadow-emerald-500/30',
  },
  long: {
    label: 'Pausa Longa',
    time: 900,
    icon: <Armchair />,
    card: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30',
    hover: 'hover:text-blue-500',
    primaryColor: 'text-blue-500',
    backgroundColor: 'bg-blue-500',
    shadowColor: 'shadow-blue-500/30',
  },
};

const PomodoroTimer = ({ timers }) => {
  const [currentMode, setCurrentMode] = useLocalStorage(
    'pomodoro_mode',
    'focus'
  );
  const [secondsTotal, setSecondsTotal] = useLocalStorage(
    'pomodoro_seconds',
    timers[currentMode] * 60
  );
  const [isActive, setIsActive] = useState(false);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  };

  useEffect(() => {
    const body = document.body;
    const modeColors = {
      focus: '#fff1f2',
      short: '#ECFDF5',
      long: 'rgb(239, 246, 255)',
    };
    body.style.backgroundColor = modeColors[currentMode];

    return () => {
      body.style.backgroundColor = '';
    };
  }, [currentMode]);

  useEffect(() => {
    if (!isActive || secondsTotal <= 0) return;
    const interval = setInterval(() => {
      setSecondsTotal((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsTotal]);

  const resetTime = useCallback(() => {
    setSecondsTotal(timers[currentMode] * 60);
    setIsActive(false);
  }, [timers, currentMode]);

  const handleChangeMode = useCallback(
    (modeKey) => {
      setCurrentMode(modeKey);
      setSecondsTotal(timers[modeKey] * 60);
      setIsActive(false);
    },
    [timers]
  );

  const mode = MODES[currentMode] || MODES['focus'];

  useEffect(() => {
    if (secondsTotal === 0) {
      setIsActive(false);
      setSecondsTotal(timers[currentMode] * 60);
    }
  }, [secondsTotal, timers, currentMode]);

  return (
    <div className="mt-16 flex flex-col items-center w-full max-w-lg px-4 mx-auto">
      <div className="flex justify-center gap-2 p-2 rounded-full mb-12 bg-gray-200/50 w-full">
        {Object.keys(MODES).map((modeKey) => (
          <button
            key={modeKey} // A Key vai direto no elemento repetido
            onClick={() => handleChangeMode(modeKey)}
            className={`
              flex-1 px-4 py-3 text-gray-600 rounded-full text-sm font-semibold
              transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
              ${currentMode === modeKey ? MODES[modeKey].card : 'hover:bg-white/50'}
            `}
          >
            {MODES[modeKey].icon}
            {MODES[modeKey].label}
          </button>
        ))}
      </div>
      <div className="text-center mb-10">
        <p
          className={`${mode.primaryColor} text-[9rem] leading-none font-bold tracking-tighter tabular-nums transition-colors duration-300 select-none`}
        >
          {formatTime(secondsTotal)}
        </p>
        <p className="mt-4 text-sm font-medium opacity-50 uppercase tracking-widest">
          {isActive ? 'Em Progresso' : 'Pausado'}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className={`
            ${mode.backgroundColor} ${mode.shadowColor}
            w-24 h-24 rounded-full flex items-center justify-center
            transition-all duration-200 transform hover:scale-105 active:scale-95
            shadow-xl text-white cursor-pointer
          `}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <Pause size={32} fill="white" stroke="white" />
          ) : (
            <Play size={32} fill="white" stroke="white" className="ml-1" />
          )}
        </button>
        <button
          onClick={resetTime}
          className="cursor-pointer w-16 h-16 rounded-full flex items-center justify-center transition-all bg-gray-200/50 hover:bg-gray-200/80 text-gray-600"
        >
          <RotateCcw size={24} />
        </button>

        <button className="cursor-pointer w-16 h-16 rounded-full flex items-center justify-center transition-all bg-gray-200/50 hover:bg-gray-200/80 text-gray-600">
          <Volume2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
