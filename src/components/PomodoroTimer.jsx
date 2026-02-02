import {
  Armchair,
  Brain,
  Coffee,
  Pause,
  Play,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const MODES = {
  focus: {
    label: `Foco`,
    time: 1500,
    icon: <Brain />,
    card: 'bg-rose-500 text-white shadow-lg shadow-rose-500/30',
    hover: 'hover:text-rose-500 ',
    primaryColor: 'text-rose-500',
    backgroundColor: 'bg-rose-500',
    shadowColor: 'shadow-rose-500/30',
  },
  short: {
    label: `Curta`,
    time: 300,
    icon: <Coffee />,
    card: '  bg-emerald-500 text-white shadow-lg shadow-emerald-500/30',
    hover: 'hover:text-emerald-500 ',
    primaryColor: 'text-emerald-500',
    backgroundColor: 'bg-emerald-500',
    shadowColor: 'shadow-emerald-500/30',
  },
  long: {
    label: `Longa`,
    time: 900,
    icon: <Armchair />,
    card: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30',
    hover: 'hover:text-blue-500',
    primaryColor: 'text-blue-500',
    backgroundColor: 'bg-blue-500',
    shadowColor: 'shadow-blue-500/30',
  },
};

const PomodoroTimer = () => {
  const pomodoroInicio = localStorage.getItem('pomodoro_seconds');

  const pomodoroMode = localStorage.getItem('pomodoro_mode');

  const [currentMode, setCurrentMode] = useState(() => {
    return pomodoroMode === undefined || null ? 'focus' : pomodoroMode;
  });

  const [secondsTotal, setSecondsTotal] = useState(() => {
    return pomodoroInicio === undefined || null ? 1500 : Number(pomodoroInicio);
  });
  const [isActive, setIsActive] = useState(false);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  };
  formatTime(secondsTotal);

  localStorage.setItem('pomodoro_mode', currentMode);

  useEffect(() => {
    localStorage.setItem('pomodoro_seconds', secondsTotal.toString());
  }, [secondsTotal]);

  useEffect(() => {
    localStorage.setItem('pomodoro_mode', currentMode);
  }, [currentMode]);

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
      setSecondsTotal(secondsTotal - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsTotal]);

  function resetTime() {
    setSecondsTotal(MODES[currentMode].time);
    setIsActive(false);
  }

  function handleChangeMode(modeKey) {
    setCurrentMode(modeKey);
    setSecondsTotal(MODES[modeKey].time);
    setIsActive(false);
  }

  return (
    <div className=" mt-60  flex flex-col items-center w-full max-w-md px-4 mx-auto">
      <div className="flex p-1 rounded-full mb-12 bg-black/5  backdrop-blur-sm border border-black/5  w-full  ">
        {Object.keys(MODES).map((modeKey) => (
          <div
            className="flex "
            onClick={() => {
              handleChangeMode(modeKey);
            }}
            key={modeKey}
          >
            <button
              className={`px-8.5 py-2 text-gray-600 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2    ${currentMode === modeKey ? MODES[modeKey].card : MODES[modeKey].hover}`}
            >
              {MODES[modeKey].icon}
              {MODES[modeKey].label}
            </button>
          </div>
        ))}
      </div>

      <div>
        <p
          className={`${MODES[currentMode].primaryColor} text-[8rem] leading-none font-bold tracking-tighter tabular-nums transition-colors duration-300 select-none `}
        >
          {formatTime(secondsTotal)}
        </p>
        <p className="bottom-6 w-full text-center text-sm font-medium opacity-50 uppercase tracking-widest mb-3.5">
          {isActive ? 'EM PROGRESSO' : 'PAUSADO'}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <button
          className={`${MODES[currentMode].backgroundColor} ${MODES[currentMode].shadowColor} w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl
               text-white
            `}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <Pause fill="white" stroke="white" />
          ) : (
            <Play fill="white" stroke="white" />
          )}
        </button>
        <button
          onClick={resetTime}
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all border-2
              border-black/5 hover:bg-black/5
            "
        >
          <RotateCcw />
        </button>
        <button
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all border-2
              border-black/5 hover:bg-black/5
            "
        >
          <Volume2 />
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
